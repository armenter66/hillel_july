import { BrowserRouter} from "react-router-dom";
import './App.css'
import Content from './components/Content/Content'
import Header from './components/Header/Header'
import { UserContext } from "./contexts/Context";
import { useState } from "react";


// Відображення у вигляді таблиці (grid) або стилізованих карток


function App() {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  return (
    <>
      <UserContext.Provider value={{ value: user, change: setUser }}>
        <BrowserRouter>
          <Header />
          <Content />
        </BrowserRouter>
      </UserContext.Provider>
    </>
  )
}

export default App
