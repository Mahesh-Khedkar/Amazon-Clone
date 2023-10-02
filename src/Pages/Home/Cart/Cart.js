import React from 'react';
import './Cart.css';
import '../../Forms/User/Login/Login.css';
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';
import CartImg from '../../../Images/cart.png';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  let navigate = useNavigate();

  return (
    <div className='cartBody'>
      <div>
        <Navbar/>
      </div>
      <div className='cartContent'>
        <div className='cartContentImage'>
          <img src={CartImg}/>
        </div>
        <div>
          <div>
            <h2>Your Amazon Cart is empty</h2>
          </div>
          <p style={{color:'blue'}}>Shop today’s deals</p>
          <div className='cartButtons'>
            <div>
              <button className='loginButton' style={{fontSize:'18px'}} onClick={() => navigate('/login')}>
                Sign in to your account
              </button>
            </div>
            <div>
              <button className='loginButton'style={{background:'white',border:'1px solid gray', marginLeft:'10px',fontSize:'18px'}} onClick={() => navigate('/register')}>
                Sign up now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='cartContent' style={{height:'20px'}}>
      </div>
        <div className='cartContent' style={{background:'transparent'}}>
          <p style={{fontSize:'13px'}}>
            The price and availability of items at Amazon.in are subject to change. The shopping cart is a temporary place to store a list of your items and reflects each item's most recent price.
            <br/> Do you have a promotional code? We'll ask you to enter your claim code when it's time to pay.
          </p>
        </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Cart
