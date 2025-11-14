import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import { useEffect } from 'react';
import { loadTodos } from './store/actions';

// Реалізувати окремий TODO додаток, з використанням Redux. У додатку має бути лише форма додавання. Без редагування, видалення та позначки як виконане. У футері програми вивести загальну кількість елементів.

function App() {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.list);

  useEffect(() => {
    dispatch(loadTodos());
  }, [ ]);

  return (
    <>
      <div className="main-container">
        <h1>Todo List</h1>
        <TodoForm />
        <TodoList />
      </div>

      <footer style={{ marginTop: "20px" }}>
        Total tasks: {list.length}
      </footer>
    </>
  )
}

export default App
