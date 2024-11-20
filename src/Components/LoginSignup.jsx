import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginSignup.css';

// import icons
import user_icon from './Assets/person.jpg';
import email_icon from './Assets/email.png';
import password_icon from './Assets/password.png';

export const LoginSignup = () => {
    const [action, setAction] = useState("Login");
    const navigate = useNavigate();


    // Function to handle clicking on the SignUp button
    const handleSignUpClick = () => {
        setAction("SignUp");
    };

    // Function to handle clicking on the Login button
    const handleLoginClick = () => {
        setAction("Login");
        navigate('/ehome');
    };

    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>

            <div className='inputs'>
                {action==="Login"?<div></div>:<div className='input'>
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder='Your Name'/>
                </div>}

                
                <div className='input'>
                    <img src={email_icon} alt="" />
                    <input type="text" placeholder='Employee ID' />
                </div>
                <div className='input'>
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder='Strong Password' />
                </div>
            </div>

            {action==="SignUp"?<div></div>:<div className="forgot-password">
                Lost Password?<span>click Here !</span>
            </div>}
            
            <div className="submit-container">
                <div className={action === "Login" ? "submit gray" : "submit"} onClick={handleSignUpClick}>SignUp</div>
                <div className={action === "SignUp" ? "submit gray" : "submit"} onClick={handleLoginClick}>Login</div>
            </div>
        </div>
    );
};
