import React from 'react';
import './AdminHome.css';
import add from './Assets/add.jpg';
import view from './Assets/view.jpg';
import leave from './Assets/leave.jpg';
import profile from './Assets/pro.jpg';
import salary from './Assets/salary.jpg';



export const AdminHome = () => {
  return (
    <>
      <div className='header'>
          <h1>Admin Home</h1>
      </div>
      <div className="admin-home">
        <div className="cards">
          <h2>Add Employee</h2>
          <img src={add}></img>
          {/* Add any additional content or functionality for this card */}
        </div>
        <div className="cards">
          <h2>View Employee Details</h2>
          <img src={view}></img>
          {/* Add any additional content or functionality for this card */}
        </div>
        <div className="cards">
          <h2>View Leave Request</h2>
          <img src={leave}></img>
          {/* Add any additional content or functionality for this card */}
        </div>
        <div className="cards">
          <h2>My Profile</h2>
          <img src={profile}></img>
          {/* Add any additional content or functionality for this card */}
        </div>
        <div className="cards">
          <h2>Salary Reports</h2>
          <img src={salary}></img>
          {/* Add any additional content or functionality for this card */}
        </div>
      </div>
    </>

  );
};
