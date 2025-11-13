import './App.css'
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, addBy } from "./store/actions";

function App() {

  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();


  return (
    <>
      <h1>Value: {value}</h1>

      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(addBy(5))}>+5</button>
    </>
  )
}

export default App
