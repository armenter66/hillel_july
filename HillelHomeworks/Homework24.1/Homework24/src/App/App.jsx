import Button from '../Button/Button'
import About from '../About/About';
import './App.css'
import { useState } from 'react';


const user = {
  id: 1,
  name: "Armen",
  age: 28
}

function App() {
  const [visible, setVisible] = useState(false);

  const renderAbout = () => {
    setVisible(!visible);
  }   

  return (
    <div>
      <h1 className='title'> This is my first react app </h1>
          <Button text="About me" onClick={renderAbout} className="myBtn1"/>
          {visible && <About user={user} />}
    </div>  
  )
}

export default App;
