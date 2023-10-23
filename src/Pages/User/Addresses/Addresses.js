import React, { useState, useEffect } from "react";
import "./Addresses.css";
import axios from "axios";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import AddIcon from "@mui/icons-material/Add";

const Addresses = () => {
  //Get all addresses from cart of current user---------------------

  const [addressData, setAddressData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //   addressData.map((address)=>{
  //     return(
  //         console.log(address.address)
  //     )
  //   })

  useEffect(() => {
    const apiUrl = `http://localhost:8000/user?id=${sessionStorage.getItem(
      "userId"
    )}`;

    axios
      .get(apiUrl)
      .then((response) => {
        // Set the data in state
        setAddressData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        // Handle errors
        setError(err);
        setLoading(false);
      });
  }, []);

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
          <div className="addressContainer">
                <div className="addAddress">
                <AddIcon style={{ fontSize: "70px", color: "lightGrey" }} />
                <h2>Add Address</h2>
                </div>
                <div className="addressesContainer">
                {addressData.map((item) => {
                    return (
                    <div key={item.id} className="addressesContainer">
                        {item.address.map((address, index) => {
                        return (
                            <div className="addresses">
                            <p>
                                <b>{address.name}</b>
                            </p>
                            <p key={index}>{address.city}</p>
                            </div>
                        );
                        })}
                    </div>
                    );
                })}
                </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Addresses;
