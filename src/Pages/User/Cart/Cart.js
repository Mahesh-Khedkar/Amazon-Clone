import React, { useState, useEffect } from 'react';
import './Cart.css';
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';
import CartCard from './CartCard';
import axios from 'axios';


const Cart = () => {

  const [data , setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    // Define the API URL you want to fetch data from
    const apiUrl = `http://localhost:8000/cart?userId=${sessionStorage.getItem("userId")}`;
    // Use Axios to fetch data from the API

    // const userData =`http://localhost:8000/user?userName=${userId}`;

    axios.get(apiUrl)
      .then((response) => {
        // Set the data in state
        setData(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch((err) => {
        // Handle errors
        setError(err);
        setLoading(false);
      });
  }, []);


  return (
    <div className='userCartBody'>
      <div><Navbar/></div>
      <div className='userCartContent'>
        <div className='shopingCart'>
          <section>
            <h1>Cart</h1>
            <p>Deselect all items</p>
            <hr/>
            <br/>
            <CartCard/>
            
          </section>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Cart
