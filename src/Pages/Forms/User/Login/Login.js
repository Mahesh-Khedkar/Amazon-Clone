import React, { useState, useEffect } from 'react';
import './Login.css';
import '../../../../Components/Navbar/Navbar.css';
import LoginLogo from '../../../../Images/LoginLogo.png'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Login = () => {

  let navigate = useNavigate();

  const [data , setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define the API URL you want to fetch data from
    const apiUrl = 'http://localhost:8000/user';
    // Use Axios to fetch data from the API
    axios.get(apiUrl)
      .then((response) => {
        // Set the data in state
        setData(response.data);
        // console.log(response.data);
        setLoading(false);
      })
      .catch((err) => {
        // Handle errors
        setError(err);
        setLoading(false);
      });
  }, []);

  let [userId, setUserId] = useState('');
  let [password, setPassword] = useState('');

  // console.log(userName);

  // let loginData = {
  //   userName: userId,
  //   password: password
  // }

  console.log(userId);

  // validation of user

  function validateUserName(userId) {
    let isValid = false;
    data && data.forEach((user) => {

      // console.log(user.userName);
      console.log(userId);

      if (userId === user.userName) {
        isValid = true;
      }
    });
  
    if (isValid) 
    {
      console.log("Login successful");
    } 
    else 
    {
      console.log("Invalid username");
    }
  }

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
                <input type='text'  onChange= {((e) => setUserId(e.target.value))}>
                
                </input>
              </div>
              <button className='loginButton' onClick={validateUserName(userId)}>
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
        <div className='createAccount' onClick={() => navigate('/register')}>
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
