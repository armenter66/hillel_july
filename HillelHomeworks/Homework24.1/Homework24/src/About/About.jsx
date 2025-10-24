import { useState } from 'react';
import myphoto from '../assets/myPhoto.png'
import Button from '../Button/Button';
import './About.css'


function About({user}) {
    const [age, setAge] = useState(user.age);

    const changeAge = () => {
        setAge(age + 1);
    }

    if ( !user) {
        return null;
    } 
    
    return (
        <>
        <div className='aboutWrapper'>
            <Button text="Change" onClick={changeAge} className="myBtn2"/>
            {user.name && <h2 className='nameTitle'>Hello my name is {user.name}</h2>}
            {user.age && <h4 className='ageTitle'>My age is <span> {age} </span> </h4>}
            <img src={myphoto} alt="myphoto" className="myImg"/>
        </div>
        </>
        
    )
}

export default About;