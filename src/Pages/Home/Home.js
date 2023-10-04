import React from 'react';
import './CSS/Home.css';
import Navbar from '../../Components/Navbar/Navbar';
import Slider from '../../Components/Slider/Slider2';
import Footer from '../../Components/Footer/Footer';
import Card from '../../Components/Card/Card';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Loader from '../../Components/Loader/Loader';


const Home = () => {

  const [data , setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define the API URL you want to fetch data from
    const apiUrl = 'http://localhost:8000/products';
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

  // console.log(sessionStorage.getItem("userName"));
  // console.log(sessionStorage.getItem("password"));

  return (
    <div className='homeBody'>
      <div>
        <Navbar/>
      </div>
      <div>
        <Slider/>
      </div>
      <div className='cardSection'>
      {
        loading
        ? (<Loader/>) 
        : <Card data={data}/>
      }
      </div>
      <div>
        {/* <Loader/> */}
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Home
