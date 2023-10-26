import React, { useState, useEffect } from "react";
import "./AddAddress.css";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AmazonHub from '../../../Images/AmazonHub.png'

const AddAddress = ({userData}) => {

  let navigate = useNavigate();

  //Add a new address--------------------

  let [country, setCountry] = useState("");
  let [fullName, setFullName] = useState("");
  let [mobileNumber, setMobileNumber] = useState("");
  let [pinCode, setPinCode] = useState("");
  let [house, setHouse] = useState("");
  let [area, setArea] = useState("");
  let [landMark, setLandMark] = useState("");
  let [city, setCity] = useState("");
  let [state, setState] = useState("");


  let [usersData, setUserData] = useState({userData});

  function addAddress() {
    // Assuming order is an array of products
    const address = {
      name: fullName,
      city: city,
      state: state,
      country: country,
      pincode: pinCode,
      area: area,
      house: house,
      landMark: landMark,
      mobileNumber: mobileNumber
    };

    // Create a copy of userData and add the new address to it
    const updatedUserData = { ...usersData };
    updatedUserData.address.push(address);

    // Update the state with the new userData
    setUserData(updatedUserData);

    // Send the updated userData to the server
    axios
      .put(`http://localhost:8000/user/id=${sessionStorage.getItem("userId")}`, updatedUserData)
      .then((response) => {
        console.log("POST request successful", response);
        navigate("/addresses");
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
          <span style={{ color: "rgb(22, 116, 133)" }}>Your Addresses › </span>
          <span style={{ color: "red" }}>New Address</span>
          <br />
          <div style={{ lineHeight: "15px" }}>
            <h2>Add a new address</h2>
            <p>
              <span className="amazonHub">
                <img src={AmazonHub}/>
              </span>
            Or find an Amazon collection location near you</p>
          </div>
          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault(); // Prevents default form submission
                addAddress();
              }}
              method="post"
            >
              <div className="addInputCard">
                <div className="addressLabel">
                  <label>
                    <b>Country/Region</b>
                  </label>
                </div>
                <div className="addressInput">
                  <select className="selectCountry" onChange={(e) => setCountry(e.target.value)}>
                    <option value={"India"}>India</option>
                    <option value={"Iraq"}>Iraq</option>
                    <option value={"Indonesia"}>Indonesia</option>
                    <option value={"USA"}>USA</option>
                    <option value={"China"}>China</option>
                    <option value={"Pakistan"}>Pakistan</option>
                    <option value={"Bangladesh"}>Bangladesh</option>
                    <option value={"Israel"}>Israel</option>
                  </select>
                </div>
              </div>
              <div className="addInputCard">
                <div className="addressLabel">
                  <label>
                    <b>Full name (First and Last name)</b>
                  </label>
                </div>
                <div className="addressInput">
                  <input
                    type="text"
                    placeholder="First and last name"
                    onChange={(e) => setFullName(e.target.value)}
                  ></input>
                </div>
              </div>
              <div className="addInputCard">
                <div className="addressLabel">
                  <label>
                    <b>Mobile number</b>
                  </label>
                </div>
                <div className="addressInput">
                  <input
                    type="text"
                    onChange={(e) => setMobileNumber(e.target.value)}
                  ></input>
                </div>
                <span style={{ fontSize: "14px" }}>
                  May be used to assist delivery
                </span>
              </div>
              <div className="addInputCard">
                <div className="addressLabel">
                  <label>
                    <b>Pincode</b>
                  </label>
                </div>
                <div className="addressInput">
                  <input
                    type="text"
                    placeholder="6 digits [0-9] PIN code"
                    onChange={(e) => setPinCode(e.target.value)}
                  ></input>
                </div>
              </div>

              <div className="addInputCard">
                <div className="addressLabel">
                  <label>
                    <b>Flat, House no., Building, Company, Apartment</b>
                  </label>
                </div>
                <div className="addressInput">
                  <input
                    type="text"
                    onChange={(e) => setHouse(e.target.value)}
                  ></input>
                </div>
              </div>
              <div className="addInputCard">
                <div className="addressLabel">
                  <label>
                    <b>Area, Street, Sector, Village</b>
                  </label>
                </div>
                <div
                  className="addressInput"
                  placeholder="At least 6 characters"
                  onChange={(e) => setArea(e.target.value)}
                >
                  <input type="text"></input>
                </div>
              </div>
              <div className="addInputCard">
                <div className="addressLabel">
                  <label>
                    <b>Landmark</b>
                  </label>
                </div>
                <div
                  className="addressInput"
                  placeholder="E.g. near apollo hospital"
                  onChange={(e) => setLandMark(e.target.value)}
                >
                  <input type="text"></input>
                </div>
              </div>

              <div className="townStateCard">
              <div className="town">
                  <div className="addressLabel">
                    <label>
                      <b>Town/City</b>
                    </label>
                  </div>
                    <div
                      className="addressInput"
                      onChange={(e) => setCity(e.target.value)}
                      style={{ width: "100%" }}
                    >
                      <input type="text"></input>
                    </div>
                </div>

                <div className="state">
                  <div className="addressLabel">
                    <label>
                      <b>State</b>
                    </label>
                  </div>
                  <div>
                  <select onChange={(e) => setState(e.target.value)}>
                  <option value={""}>Choose a state</option>
                    <option value={"Andhrapradesh"}>Andhrapradesh</option>
                    <option value={"Asam"}>Asam</option>
                    <option value={"Arunachal Pradesh"}>Arunachal Pradesh</option>
                    <option value={"Bihar"}>Bihar</option>
                    <option value={"Chhattisgad"}>Chhattisgarh</option>
                    <option value={"Delhi"}>Delhi</option>
                    <option value={"Goa"}>Goa</option>
                    <option value={"Gujrat"}>Gujrat</option>
                    <option value={"Hariyana"}>Haryana</option>
                    <option value={"Himachal Pradesh"}>Himachal Pradesh</option>
                    <option value={"Jammu and Kashmir"}>Jammu and Kashmir</option>
                    <option value={"Jharkhand"}>Jharkhand</option>
                    <option value={"Karnataka"}>Karnataka</option>
                    <option value={"Kerala"}>Kerala</option> 
                    <option value={"Ladakh"}>Ladakh</option>
                    <option value={"Madhya pradesh"}>Madhya pradesh</option>
                    <option value={"Maharashtra"}>Maharashtra</option>
                    <option value={"Manipur"}>Manipur</option>
                    <option value={"Mizoram"}>Mizoram</option>
                    <option value={"Odisha"}>Odisha</option>
                    <option value={"Panjab"}>Panjab</option>
                    <option value={"Rajsthan"}>Rajsthan</option>
                    <option value={"Sikkim"}>Sikkim</option>
                    <option value={"Tamil Nadu"}>Tamil Nadu</option>
                    <option value={"Telangana"}>Telangana</option>
                    <option value={"Tripura"}>Tripura</option>
                    <option value={"Uttar Pradesh"}>Uttar Pradesh</option>
                    <option value={"UttaraKhand"}>UttaraKhand</option>
                    <option value={"West Bangol"}>West Bangol</option>
                  </select>
                  </div>
                </div>

              </div>
              <p>
                <span style={{ marginRight: "10px" }}>
                  <input type="checkbox" />
                </span>{" "}
                Make this my default address
              </p>
              <div className="addressInstructions">
                <b>Delivery instructions (optional)</b>
                <div>
                  <KeyboardArrowDownIcon style={{color:'black'}}/>
                  <p className="preferences">
                    Add preferences, notes, access codes and more
                  </p>
                </div>
              </div>
              <br/>
              <input
                type="submit"
                className="addAddressButton"
                name="addAddressButton"
                value="Add Address"
              />
            </form>
            <br/>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default AddAddress;
