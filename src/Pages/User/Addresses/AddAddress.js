import React from "react";
import "./AddAddress.css";
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from "../../../Components/Footer/Footer";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const AddAddress = () => {
    let navigate = useNavigate();

    //Add a new address--------------------

    function addAddress(){
        // Assuming order is an array of products
        const address = 
        {
            "name": "Mahi Khedkar",
            "city": "Pune",
            "state":"Maharashtra",
            "country": "India",
            "pincode": 411021
        };

        axios
        .post(`http://localhost:8000/user?id=${sessionStorage.getItem("userId")}&address=`, address)
        .then((response) => {
          console.log("POST request successful", response);
          navigate('/addresses');
        })
        .catch((error) => {
          console.error("Error making POST request", error);
        });
    }

  return (
    <div className="addAddressBody">
      <div>
        <Navbar />
      </div>
      <div className="addAddressContent">
        <div className="userOrdersContentLeft">
          <span style={{ color: "rgb(22, 116, 133)" }}>Your Account › </span>
          <span style={{ color: "red" }}>Your Addresses</span>
          <br />
          <div>
            <h1>Your Addresses</h1>
          </div>
        </div>
        <button onClick={()=> addAddress()}>
            Add Address
        </button>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default AddAddress;
