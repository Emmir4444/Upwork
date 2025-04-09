import React from 'react'
import './App.css'
import NavbarN from './Components/Navbar/Navbar.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Home from './Components/Home/Home.jsx';

const App = () => {
  return (
    <div>
      <NavbarN />
      <Home/>
<Footer/>
    </div>
  )
}

export default App