import React from 'react';
import './Login.css';
import '../../../../Components/Navbar/Navbar.css';
import LoginLogo from '../../../../Images/LoginLogo.png'
import { useNavigate } from 'react-router-dom';

const Login = () => {

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
            <h1>Sign in</h1>
          </div>
          <div>
            <form>
              <div className='loginLabel'>
                <label>
                  <b>Email or mobile phone number</b>
                </label>
              </div>
              <div className='loginInput'>
                <input type='text'>
                
                </input>
              </div>
              <button className='loginButton'>
                Continue
              </button>
            </form>
          </div>
          <div>
            <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
          </div>
          <a>Need help?</a>
        </div>
        <div className='newToAmazon'>
          <hr></hr>
          New to Amazon
          <hr></hr>
        </div>
        <div className='createAccount'>
          Create your own account
        </div>
        <br/>
        <hr color='lightGray' ></hr>
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
        <span>
          © 1996-2023, Amazon.com, Inc. or its affiliates
        </span>
    </div>
  )
}

export default Login
