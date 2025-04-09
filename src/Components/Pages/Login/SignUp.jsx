
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();
  return (
        <section className='login__main__container'>
        <div className='login__form__container'>
          <h1 className='login__main__title'>Create Account</h1>
          <form>
            <input
              type='text'
              placeholder='User'
            />
            <input
              type='email'
              placeholder='Email'
            />
            <input
              type='text'
              placeholder='Full Name'
            />
            <input
              type='tel'
              placeholder='Phone Number'     
              />
   
            <input
              type='password'
              placeholder='Password'
            />
            <input type='submit' value='Register' />
          </form>
        </div>
        <div className="register__container">
      <p className='register__user__text'>Do you have account?      
      <button className='register__user__button' onClick={() => navigate('/login')}>Log In</button></p>
     
    </div>
        </section>
  )
}

export default SignUp;
