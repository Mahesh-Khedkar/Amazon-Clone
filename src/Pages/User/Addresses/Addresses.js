import React, { useState, useEffect } from "react";
import "./Addresses.css";
import axios from "axios";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

const Addresses = ({ addressData, setAddressData }) => {

  let navigate = useNavigate();


//Remove Address---------------------

  function removeAddress(id){

    addressData.forEach((item) => {
        axios
          .delete(`http://localhost:8000/useraddress/${id}`)
          .then((response) => {
            console.log("DELETE request successful", response);
            navigate('/addresses'); 

            setAddressData((prev)=>prev.filter((item)=> item.id !== id));

          })
          .catch((error) => {
            console.error("Error making DELETE request", error);
          });
      // }
    });

  }

  return (
    <div className="userOrdersBody">
      <div>
        <Navbar />
      </div>
      <div className="userOrdersContent">
        <div className="userOrdersContentLeft">
          <span style={{ color: "rgb(22, 116, 133)" }}>Your Account › </span>
          <span style={{ color: "red" }}>Your Addresses</span>
          <br />
          <div>
            <h1>Your Addresses</h1>
          </div>
          <div className="addressContentContainer">
          
            <div className="addAddress" onClick={() => navigate("/addaddress")}>
              <AddIcon style={{ fontSize: "70px", color: "lightGrey" }} />
              <h2>Add Address</h2>
            </div>

            <div className="addressesContainer">
              {addressData.map((address) => (
                <div className="addresses" key={address.id}>
                  <p>
                    <b>{address.name}</b>
                  </p>
                  <p>{address.house}</p>
                  <p>{address.area}</p>
                  <p>{address.landMark},</p>
                  <p>
                    {address.city}, {address.state}, {address.pincode}
                  </p>
                  <p>{address.country}</p>
                  <p>Phone number: {address.mobileNumber}</p>
                  <span>Add delivery instructions</span>
                  <br/>
                  <div className="addressControls">
                    <span onClick={()=> navigate(`/editaddress/${address.id}`)}>Edit</span> | <span onClick={()=> removeAddress(address.id)}>Remove</span> |{" "}
                    <span>Set as Default</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Addresses;
