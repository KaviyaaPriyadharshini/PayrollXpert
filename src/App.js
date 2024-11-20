import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginSignup } from './Components/LoginSignup';
import { AdminLogin } from './Components/AdminLogin';
import { Front } from './Components/Front';
import { AdminHome } from './Components/AdminHome';
import { EHome } from './Components/EHome';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Front />} />
          <Route path="/home" element={<Front />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/ahome" element={<AdminHome />} />
          <Route path="/ehome" element={<EHome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
