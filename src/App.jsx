import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import NavbarN from './Components/Navbar/Navbar.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Home from './Components/Home/Home.jsx';
import Login from './Components/Pages/Login/Login.jsx';
import SignUp from './Components/Pages/Login/SignUp.jsx';

const HomePage = () => {
  return (
    <div>
      <Home/>
      
    </div>
  );
};

function App() {
  return (

    <Router>
      <NavbarN />
     
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;