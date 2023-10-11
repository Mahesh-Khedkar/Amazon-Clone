import React from 'react';
import './UserOrders.css';
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';
import OrdersCard from './OrdersCard';

const UserOrders = () => {
  return (
    <div className='userOrdersBody'>
      <div>
        <Navbar/>
      </div>
      <div className='userOrdersContent'>
        <div className='userOrdersContentLeft'>
          <span style={{color:'rgb(22, 116, 133)'}}>Your Account › </span> 
          <span style={{color:'red'}}>Your Orders</span>
          <br/>
          <div>
            <h1>
              Your Orders
            </h1>
          </div>
          <div>
            <nav className='ordersNav'>
              <button>Orders</button>
              <button>Buy Again</button>
              <button>Not Yet Shipped</button>
              <button>Cancelled Orders</button>
            </nav>
            <hr/>
            <div>
              0 Orders palced in past month
            </div>
          </div>
          <div>
            <OrdersCard/>
          </div>
        </div>

      </div>
        <Footer/>
    </div>
  )
}

export default UserOrders
