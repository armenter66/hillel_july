import { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const [isListShown, setIsListShown] = useState(true);

  const loadData = async () => {
    const response = await fetch('http://localhost:5173/data.json');
    const result = await response.json();
    setTodoItems(result);
  }

  const handleRemoveList = () => {
    setIsListShown(false);
  }

  const handleAddNewItem = value => {
    const newItem = { id: todoItems.length + 1, text: value };
    setTodoItems([...todoItems, newItem]);
    console.log(todoItems);
  }

  return (
    <>
      <button type="button" onClick={loadData}>
        Load Data
      </button>
      <button type="button" onClick={handleRemoveList}>
        Remove TodoList
      </button>
      <TodoForm onSave={handleAddNewItem} />
      {isListShown && <TodoList list={todoItems} />}
    </>
  )
}

export default App
