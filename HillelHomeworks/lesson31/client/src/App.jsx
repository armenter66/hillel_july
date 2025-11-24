import { BrowserRouter} from "react-router-dom";
import './App.css'
import Content from './components/Content/Content'
import Header from './components/Header/Header'
import { UserContext } from "./contexts/Context";
import { useState } from "react";


function App() {
  const [user, setUser] = useState(null);

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
