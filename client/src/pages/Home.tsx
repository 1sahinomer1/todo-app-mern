import axios from 'axios';
import { Button, Input, Navbar } from 'components';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useAppDispatch, useAppSelector } from 'store';
import { add, remove, toggleCompleted } from 'store/todoSlice';

import * as S from 'styles/Pages/Home';

const Home = () => {
  const [title, setTitle] = useState('');
  const [cookies, setCookie] = useCookies(['users']);
  const email = cookies.users?.user?.email;

  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todos);

  const submitHandler = async (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(add(title));
    setTitle('');
    const response = await axios.post('/todos/addTodo', todos, email);
    console.log(response);
  };
  const removeTodo = (id: string) => {
    dispatch(remove(id));
  };
  const toggle = (id: string) => {
    dispatch(toggleCompleted(id));
  };

  return (
    <S.Container>
      <Navbar />
      <Input
        name="title"
        placeholder="add todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button onClick={submitHandler}>Add</Button>

      <ul>
        {todos.map((todo) => (
          <div key={todo.id}>
            <li>{todo.title}</li>
            <button onClick={() => removeTodo(todo.id)}>sil</button>
            <button onClick={() => toggle(todo.id)}>
              {todo.completed ? 'not completed' : 'completed'}
            </button>
          </div>
        ))}
      </ul>
    </S.Container>
  );
};

export default Home;
