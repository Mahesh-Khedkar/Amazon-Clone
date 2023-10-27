import React, { useState, useEffect } from "react";
import './UserOrders.css';
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';
import OrdersCard from './OrdersCard';
import axios from 'axios';

const UserOrders = () => {

  //Get all products from cart of current user---------------------

  const [ordersData, setOrdersData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // console.log(ordersData.length)

  useEffect(() => {
    const apiUrl = `http://localhost:8000/orders?userId=${sessionStorage.getItem("userId")}`;

    axios
      .get(apiUrl)
      .then((response) => {
        // Set the data in state
        setOrdersData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        // Handle errors
        setError(err);
        setLoading(false);
      });
  }, []);
  
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
              <b>{ordersData.length} Orders </b> palced in past month
            </div>
          </div>
          <div className="ordersCardDiv">
            <OrdersCard ordersData={ordersData}/>
          </div>
        </div>

      </div>
        <Footer/>
    </div>
  )
}

export default UserOrders
