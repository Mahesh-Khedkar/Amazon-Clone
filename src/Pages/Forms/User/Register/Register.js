import React from 'react';
import './Register.css';
import '../Login/Login.css';
import '../../../../Components/Navbar/Navbar.css';
import LoginLogo from '../../../../Images/LoginLogo.png'
import { useNavigate } from 'react-router-dom';


const Register = () => {

  let navigate = useNavigate();

  return (
    <div className='loginBody'>
        <center>
          <div className="navLogo" style={{height:'70px'}} onClick={() => navigate('/')}>
            <img src={LoginLogo} alt="Navigation Logo" />
          </div>
        </center>
        <div className='loginFormContainer'>
          <div>
            <h1>Create Account</h1>
          </div>
          <div>
            <form>
              <div className='loginLabel'>
                <label>
                  <b>Your name</b>
                </label>
              </div>
              <div className='loginInput'>
                <input type='text' placeholder='First and last name'>
                
                </input>
              </div>
              <div className='loginLabel'>
                <label>
                  <b>Mobile number</b>
                </label>
              </div>
              <div className='loginInput'>
                <input type='text' placeholder='Mobile number'>
                
                </input>
              </div>
              <div className='loginLabel'>
                <label>
                  <b>Email (optional)</b>
                </label>
              </div>
              <div className='loginInput'>
                <input type='text'>
                
                </input>
              </div>
              <div className='loginLabel'>
                <label>
                  <b>Password</b>
                </label>
              </div>
              <div className='loginInput' placeholder='At least 6 characters'>
                <input type='text'>
                
                </input>
              </div>
              <p><span style={{marginRight:'10px'}}><i><b>i </b> </i></span> Password must be at least 6 characters.</p>
              <p>
                To verify your number, we will send you a text message with a temporary code. Message and data rates may apply.
              </p>
              <button className='loginButton'>
                Continue
              </button>
            </form>
            <br/>
            <hr/>
          </div>
          <div>
            <p><b>Buying for work?</b></p>
            <span style={{fontSize:'15px',color:'blue'}}>Create a free business account</span>
          </div>
          
          <hr/>
          <div>
            <p>Already have an account? <span style={{color:'blue'}} onClick={() => navigate('/login')}>Sign in</span></p>
          </div>
          <p style={{fontSize:'15px'}}>
            By creating an account or logging in, you agree to Amazon’s <span>Conditions of Use</span> and <span>Privacy Policy</span>.
          </p>
        </div>
        <br/>
        <hr/>
        <br/>
        <div className='loginBottom'>
          <span>
            Conditions of Use 
          </span>
          <span>
            Privacy Notice 
          </span>
          <span>
            Help
          </span>
        </div>
        <span style={{color:'black',fontSize:'14px'}}>
          © 1996-2023, Amazon.com, Inc. or its affiliates
        </span>
    </div>
  )
}

export default Register
