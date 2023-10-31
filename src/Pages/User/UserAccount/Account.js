import React from "react";
import "./Account.css";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import YourOrders from '../../../Images/YourOrders.png';
import Login from '../../../Images/Login&Security.png';
import Prime from '../../../Images/Prime.png';
import Addresses from '../../../Images/Addresses.png';
import Payment from '../../../Images/Payment.png';
import AmazonPay from '../../../Images/AmazonPay.png';
import Contact from '../../../Images/ContactUs.png';
import Business from '../../../Images/Business.png';


const Account = () => {

  let navigate = useNavigate();
  
  return (
    <div className="accountBody">
      <div>
        <Navbar />
      </div>
      <div className="accountContent">
        <h1>Your Account</h1>
        <div className="accountCardContainer">
          <div className="accountCard" onClick={()=> navigate('/orders')}>
            <img src={YourOrders} />
            <div>
              <h3>Your Orders</h3>
              <p>Track, return, or buy things again</p>
            </div>
          </div>
          <div className="accountCard" onClick={()=> navigate('/login&security')}>
            <img src={Login} />
            <div>
              <h3>Login & security</h3>
              <p>Edit login, name, and mobile number</p>
            </div>
          </div>
          <div className="accountCard">
            <img src={Prime} />
            <div>
              <h3>Prime</h3>
              <p>View benefits and payment settings</p>
            </div>
          </div>
          <div className="accountCard" onClick={()=> navigate('/addresses')}>
            <img src={Addresses} />
            <div>
              <h3>Your Addresses</h3>
              <p>Edit addresses for orders and gifts</p>
            </div>
          </div>
          <div className="accountCard">
            <img src={Payment} />
            <div>
              <h3>Payment options</h3>
              <p>Edit or add payment methods</p>
            </div>
          </div>
          <div className="accountCard">
            <img src={AmazonPay} />
            <div>
              <h3>Amazon Pay balance</h3>
              <p>Add money to your balance</p>
            </div>
          </div>
          <div className="accountCard">
            <img src={Contact} />
            <div>
              <h3>Contact Us</h3>
              <p></p>
            </div>
          </div>
          <div className="accountCard">
            <img src={Business} />
            <div>
              <h3 style={{ marginTop: "0px" }}>Your business account</h3>
              <p style={{ marginTop: "-13px" }}>
                Sign up to save up to 28% with GST invive and bulk discounts,
                purchase on credit and more
              </p>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Account;
