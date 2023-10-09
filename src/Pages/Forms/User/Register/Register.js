import React, { useState, useEffect } from 'react';
import './Register.css';
import '../Login/Login.css';
import '../../../../Components/Navbar/Navbar.css';
import LoginLogo from '../../../../Images/LoginLogo.png'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Register = () => {

  let navigate = useNavigate();

  const [data , setData] = useState([]);
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
        setLoading(false);
      })
      .catch((err) => {
        // Handle errors
        setError(err);
        setLoading(false);
      });
  }, []);

//for creation of cart table for new users
// useEffect(() => {

//   axios
//   .post("http://localhost:8000/cart", )
//   .then((response) => {
//     console.log("POST request successful", response);
//     // Redirect or perform any other action as needed
//   })
//   .catch((error) => {
//     // Handle errors from the POST request
//     console.error("Error making POST request", error);
//   });
//   window.location.href="/userCart";
// }, []);


  let [userName, setUserName] = useState('');
  let [mobileNumber, setMobileNumber] = useState('');
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');

  // validation of user
  function validateRegistration(inputUserName, inputMobileNumber, inputEmail, inputPassword) {
    let isValid = false;
    let message = document.getElementById('message');

    data && data.forEach((user) => {
      if (inputUserName && inputMobileNumber && inputPassword ) 
      {
        isValid = true;
      }
    });
  
    if (isValid) 
    {
      console.log("Registered successful");
      message.innerHTML = "Success";
      message.style.color = "green";

      // If you want to make a POST request, you can do it here
      const postData = {
        userName: inputUserName,
        mobileNumber: mobileNumber,
        email: email,
        password: password
      };

      axios.post('http://localhost:8000/user', postData)
        .then((response) => {
          // Handle the response from the POST request
          console.log('POST request successful', response);
          // Redirect or perform any other action as needed
        })
        .catch((error) => {
          console.error('Error making POST request', error);
        });

      // You can navigate to the desired page here
      navigate('/login');
      alert("User Registered successfully..!");

  //for creation of cart table for new users


      // axios
      // .post("http://localhost:8000/cart/", userid)
      // .then((response) => {
      //   console.log("POST request successful", response);
      //   // Redirect or perform any other action as needed
      // })
      // .catch((error) => {
      //   // Handle errors from the POST request
      //   console.error("Error making POST request", error);
      // });

    } 
    else {
      console.log("Invalid username or Pass");
      message.innerHTML = "Enter all details or User already exist";
      message.style.color = "red";
    }
  }


  return (
    <div className='registerBody'>
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
            <form
            onSubmit={(e) => {
              e.preventDefault(); // Prevents default form submission
              validateRegistration(userName, mobileNumber, email, password);
            }}
            method='post'
            >
              <div className='loginLabel'>
                <label>
                  <b>Your name</b>
                </label>
              </div>
              <div className='loginInput'>
                <input type='text' placeholder='First and last name' onChange={(e) => setUserName(e.target.value)}>
                
                </input>
              </div>
              <div className='loginLabel'>
                <label>
                  <b>Mobile number</b>
                </label>
              </div>
              <div className='loginInput'>
                <input type='text' placeholder='Mobile number'
                onChange={(e) => setMobileNumber(e.target.value)}
                >
                
                </input>
              </div>
              <div className='loginLabel'>
                <label>
                  <b>Email (optional)</b>
                </label>
              </div>
              <div className='loginInput'>
                <input type='email' onChange={(e) => setEmail(e.target.value)}>
                
                </input>
              </div>
              <div className='loginLabel'>
                <label>
                  <b>Password</b>
                </label>
              </div>
              <div className='loginInput' placeholder='At least 6 characters' onChange={(e) => setPassword(e.target.value)}>
                <input type='password'>
                
                </input>
              </div>
              <p><span style={{marginRight:'10px'}}><i><b>i </b> </i></span> Password must be at least 6 characters.</p>
              <p>
                To verify your number, we will send you a text message with a temporary code. Message and data rates may apply.
              </p>
              <input type='submit' className='loginButton' name='Continue' value="Continue"/>                
            </form>
            <p id='message'></p>
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
