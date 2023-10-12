import React from 'react';
import './CSS/Home.css';
import Navbar from '../../Components/Navbar/Navbar';
import Slider from '../../Components/Slider/Slider2';
import Slider3 from '../../Components/Slider/Slider3';
import Footer from '../../Components/Footer/Footer';
import Card from '../../Components/Card/Card';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Loader from '../../Components/Loader/Loader';
import Categories from './Categories';
import RandomPics from './RandomPics';


const Home = () => {

  const [data , setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //For search functionality
  const[search,setSearch]= useState('');
  // console.log(search);

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
        <Navbar setSearch={setSearch}/>
      </div>
      <div>
        <Slider/>
      </div>
      <div className='categoriesContainer'>
        <h2 style={{color:'white', marginBottom:'-10px'}}>Shop by Categories</h2>
        <Categories data={data}/>
      </div>
      <div className='randomPicsContainer'>
        <div>
          <RandomPics/>
        </div>
      </div>
      <div className='cardSection'>
      {/* {
        loading
        ? (<Loader/>) 
        : <Card data={data} search={search}/>
        
      } */}
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
