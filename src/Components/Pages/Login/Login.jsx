import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user, password }),
      });
  
      const data = await response.json();
  
      if (data.success) {
        navigate('/AdminPanel');
      } else {
        alert('Usuario o contraseña incorrectos');
      }
    } catch (error) {
      console.error('Error al conectar con el servidor:', error);
      alert('Error en el servidor');
    }
  };
  

  return (
    <section className='login__main__container'>
    <div className='login__form__container'>
      <h1 className='login__main__title'>Welcome Back</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='User'
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type='submit' value='Login' />
      </form>
    </div>
    <div className="register__container">
  <p className='register__user__text'>Do you not have account?      
  <button className='register__user__button' onClick={() => navigate('/register')}>Register Now!!</button></p>
 
</div>
    </section>
  );
};

export default Login;
