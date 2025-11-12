import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllTodos } from "../store/todosReducer";

export default function TodoItems() {
  const { data: todos } = useSelector(store => store.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodos());
  }, [])

  return (
    <div>
      <h2>TodoItems</h2>
      {!todos.length && <span>No todos added yet</span>}
      <ul>
        {todos.map(todoItem => <li key={todoItem.id}>{todoItem.title}</li> )}
      </ul>
    </div>
  )
}