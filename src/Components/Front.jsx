import React from 'react';
import './Front.css'; // Import your Front.css file
import { useNavigate } from 'react-router-dom';
import employee from './Assets/employee.png';
import admin from './Assets/admin.png';
import main from './Assets/profile.svg';

export const Front = () => {
  const navigate = useNavigate();

  const handleAdminButtonClick = () => {
    navigate('/admin'); // Navigate to the '/admin' route
  };

  const handleEmployeeButtonClick = () => {
    navigate('/login'); // Navigate to the '/login' route
  };

  return (
    <div className='group'>

      <div className="heading">
        <p>EMPLOYEE PAYROLL</p>
      </div>

      <div className='body'>
        
        <div className='sel-op'>
          <div className='card'>
            <img src={admin} alt="Admin"></img>
            <button onClick={handleAdminButtonClick}>ADMIN</button>
          </div>
          <div className='card'>
            <img src={employee} alt="Employee"></img>
            <button onClick={handleEmployeeButtonClick}>EMPLOYEE</button>
          </div>
        </div>

        <div className='mainimg'>
          <img src={main} alt="Main"></img>
        </div>

      </div>

    </div>
  );
};
