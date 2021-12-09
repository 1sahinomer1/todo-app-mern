import { Request, Response } from 'express';

import { Router } from 'express';

import Todo, { ITodo } from '../models/todo';
const router = Router();

router.post('/addTodo', async (req: Request, res: Response) => {
  const body = req.body as ITodo;

  try {
    const isUser = await Todo.findOne({ email: body.email });
    if (isUser) {
      isUser.todos = [...body.todos];
      await isUser.save();
      return res.status(201).json('sonuna ekledik');
    } else {
      await Todo.create(body);
      return res.status(201).json('oldu');
    }
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

router.get('/displayTodos', async (req: Request, res: Response) => {
  const body = req.body as ITodo;

  try {
    const todos = await Todo.findOne({ email: body.email });
    res.status(201).json({ todos: todos });
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

export default router;
