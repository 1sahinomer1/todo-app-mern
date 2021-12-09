import { Schema, model } from 'mongoose';

export interface ITodo {
  todos: [{ title: string; isCompleted: boolean }];
  email: string;
}

const todoSchema = new Schema<ITodo>(
  {
    todos: [
      {
        title: String,
        isCompleted: Boolean,
      },
    ],
    email: {
      type: String,
      unique: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Todo = model<ITodo>('Todo', todoSchema);
export default Todo;
