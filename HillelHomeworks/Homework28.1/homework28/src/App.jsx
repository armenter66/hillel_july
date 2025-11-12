import { useState, useEffect } from "react"
import './App.css'
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"


// Зробити роботу TODO list через бібліотеку Formik
// Обов'язково зробити валідацію на мінімальну довжину поля введення (не менше 5 символів)

function App() {
  const [list, setList] = useState(()=> {
    const savedList = localStorage.getItem('list');
    return savedList ? JSON.parse(savedList) : [];
  });

  useEffect(()=> {
    localStorage.setItem("list", JSON.stringify(list))
  }, [list])
  

  return (
    <div className="main-container">
      <h1>Todo List</h1>
      <TodoForm setList={setList}/>
      <TodoList list={list} setList={setList}/>
    </div>
  )
}

export default App
