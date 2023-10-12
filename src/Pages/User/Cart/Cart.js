import React, { useState, useEffect } from 'react';
import './Cart.css';
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';
import CartCard from './CartCard';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Cart = () => {

  let navigate = useNavigate();

 //Get all products from cart of current user---------------------

  const [cartData , setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    const apiUrl = `http://localhost:8000/cart?userId=${sessionStorage.getItem("userId")}`;

    axios.get(apiUrl)
      .then((response) => {
        // Set the data in state
        setData(response.data);
        sessionStorage.setItem("cartLength",response.data.length);
        console.log(response.data);
        setLoading(false);
      })
      .catch((err) => {
        // Handle errors
        setError(err);
        setLoading(false);
      });
  }, []);
  // console.log(cartData);  

 //Remove product from cart---------------------
  
  function removeProduct(product) {
    cartData.forEach((item) => {
      if (item.id === product.id && item.userId === sessionStorage.getItem('userId')) {

        console.log(product.title);
        console.log(item.title);
        axios.delete(`http://localhost:8000/cart/${item.id}`)
          .then((response) => {
            // Handle the response from the DELETE request
            console.log('DELETE request successful', response);
            // Redirect or perform any other action as needed
            window.location.href = '/userCart'; // Assuming 'navigate' is not defined
            // alert("Product Removed ..!");
          })
          .catch((error) => {
            console.error('Error making DELETE request', error);
          });
      }
    });
  }
  
  return (
    <div className='userCartBody'>
      <div><Navbar/></div>
      <div className='userCartContent'>
        <div className='shopingCart'>
          <section>
            <h1>Shopping Cart</h1>
            <p>Deselect all items</p>
            <hr/>
            <br/>
            <CartCard data={cartData} removeProduct={removeProduct}/>
            
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
