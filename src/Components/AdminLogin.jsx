import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginSignup.css';

// import icons
import user_icon from './Assets/person.jpg';
import email_icon from './Assets/email.png';
import password_icon from './Assets/password.png';

export const AdminLogin  = () => {

  const [action, setAction] = useState("Login");
  const navigate = useNavigate();


  // Function to handle clicking on the Login button
  const handleLoginClick = () => {
    setAction("Login");
    navigate('/ahome');
  };

  return (
    <div className='container'>
    <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
    </div>

    <div className='inputs'>
       
        <div className='input'>
            <img src={email_icon} alt="" />
            <input type="text" placeholder='Employee ID' />
        </div>
        <div className='input'>
            <img src={password_icon} alt="" />
            <input type="password" placeholder='Strong Password' />
        </div>
    </div>

   
    
    <div className="submit-container">
        <div className="submit" onClick={handleLoginClick}>Login</div>
    </div>
</div>
  )
}
