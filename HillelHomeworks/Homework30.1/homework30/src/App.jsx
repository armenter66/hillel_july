import { useDispatch } from 'react-redux';
import { clearSwapi } from './store/swapiSlice';
import './App.css'
import Swapi from './Swapi';


// Зробити додаток Swapi з використанням redux-thunk.
// У футер додати кнопку, яка очистить данні TODO.

function App() {
  const dispatch = useDispatch();
  return (
    <>
      <div className="main-container">
          <Swapi/>
      </div>

      <footer style={{ marginTop: "20px" }}>
          <button onClick={() => dispatch(clearSwapi())}>Clear</button>
      </footer>
    </>
  )
}

export default App
