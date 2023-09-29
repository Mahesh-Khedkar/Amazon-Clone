import React from 'react';
import './Cart.css';
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';

const Cart = () => {
  return (
    <div className='CartBody'>
      <div>
        <Navbar/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Cart
