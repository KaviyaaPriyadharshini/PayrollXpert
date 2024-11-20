import React from 'react';
import './EHome.css';
import eleave from './Assets/eleave.jpg';
import eview from './Assets/eview.webp';
import esala from './Assets/esala.jpg';
import epro from './Assets/epro.webp';

export const EHome = () => {
  return (
    <>
          <div className='header'>
          <h1>Employee Home</h1>
      </div>
      <div className="emp-home">
        <div className="ecards">
          <h2>Apply Leave</h2>
          <img src={eleave}></img>
          {/* Add any additional content or functionality for this card */}
        </div>
        <div className="ecards">
          <h2>View Leave Approval</h2>
          <img src={eview}></img>
          {/* Add any additional content or functionality for this card */}
        </div>
        <div className="ecards">
          <h2>View Salary Slip</h2>
          <img src={esala}></img>
          {/* Add any additional content or functionality for this card */}
        </div>
        <div className="ecards">
          <h2>My Profile</h2>
          <img src={epro}></img>
          {/* Add any additional content or functionality for this card */}
        </div>
        
      </div>

    </>
  )
}
