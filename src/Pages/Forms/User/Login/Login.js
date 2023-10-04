import React, { useState, useEffect } from 'react';
import './Login.css';
import '../../../../Components/Navbar/Navbar.css';
import LoginLogo from '../../../../Images/LoginLogo.png'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Login = () => {

  let navigate = useNavigate();

  const [data , setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define the API URL you want to fetch data from
    const apiUrl = 'http://localhost:8000/user';
    // Use Axios to fetch data from the API

    // const userData =`http://localhost:8000/user?userName=${userId}`;

    axios.get(apiUrl)
      .then((response) => {
        // Set the data in state
        setData(response.data);
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

// validation of user

  function validateUserName(inputUserId, pass) 
  {
    let isValid = false;
    let message = document.getElementById('message');

    data && data.forEach((user) =>
    {      
      if (inputUserId === user.userName && pass === user.password) {
        isValid = true;
        // Store username and password in session storage

        // sessionStorage.setItem("userName", inputUserId);
        // sessionStorage.setItem("password", pass);
        sessionStorage.setItem("userId", user.id);
        sessionStorage.setItem("userName", user.userName);
        sessionStorage.setItem("userMobile", user.mobileNumber);
        sessionStorage.setItem("userEmail", user.email);
        sessionStorage.setItem("userPassword", user.password);

        let x = sessionStorage.getItem("userName");
        console.log(x);
   
      }
    });

  
    if (isValid) 
    {
      console.log("Login successful");
      message.innerHTML="Success";
      message.style.color="green";

      navigate('/'); 

    } 
    else 
    {
      console.log("Invalid username or Pass");
      message.innerHTML="Invalid username or Password";
      message.style.color="red";
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
            <form 
              onSubmit={(e) => {
              e.preventDefault(); // Prevents default form submission
              validateUserName(userId, password);
            }}
            method='post'
            >
              <div className='loginLabel'>
                <label>
                  <b>Email or mobile phone number</b>
                </label>
              </div>
              <div className='loginInput'>
                <input type='text'  onChange= {((e) => setUserId(e.target.value))}>
                
                </input>
              </div>
              <div className='loginLabel'>
                <label>
                  <b>Password</b>
                </label>
              </div>
              <div className='loginInput'>
                <input type='password'  onChange= {((e) => setPassword(e.target.value))}>
                
                </input>
              </div>
              <input type='submit' className='loginButton' name='Continue' value="Continue"/>                
            </form>
            <p id='message'></p>
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
