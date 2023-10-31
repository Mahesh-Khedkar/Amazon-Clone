import React, { useState, useEffect } from "react";
// import "./AddAddress.css";
import "./LoginAndSecurity.css";
import Navbar from "../../../../Components/Navbar/Navbar";
import Footer from "../../../../Components/Footer/Footer";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const LoginAndSecurity = ({ userData, setUserData }) => {

  let navigate = useNavigate();

  return (
    <div className="addAddressBody">
      <div>
        <Navbar />
      </div>
      <div className="addAddressContent">
        <div className="userOrdersContentLeft">
          <span style={{ color: "rgb(22, 116, 133)" }}>Your Account › </span>
          {/* <span style={{ color: "rgb(22, 116, 133)" }}>Your Addresses › </span> */}
          <span style={{ color: "red" }}>Login & Security</span>
          <br />
          <div style={{ lineHeight: "15px" }}>
            <h2>Login & Security</h2>
          </div>
          {userData.map((user) => {
            return (
              <div className="securityConatiner">
                <div className="securityCard">
                  <div>
                    <b>Name:</b>
                    <p>{user.userName}</p>
                  </div>
                  <div>
                    <button onClick={()=> navigate('/edit/userName')}>
                      Edit
                    </button>
                  </div>
                </div>
                <hr color="lightGrey" />
                <div className="securityCard">
                  <div>
                    <b>E-mail:</b>
                    <p>{user.email}</p>
                  </div>
                  <div>
                    <button onClick={()=> navigate('/edit/email')}>
                      Edit
                    </button>
                  </div>
                </div>
                <hr color="lightGrey" />
                <div className="securityCard">
                  <div>
                    <b>Primary mobile number:</b>
                    <p>{user.mobileNumber}</p>
                  </div>
                  <div>
                    <button onClick={()=> navigate('/edit/mobileNumber')}>
                      Edit
                    </button>
                  </div>
                </div>
                <hr color="lightGrey" />
                <div className="securityCard">
                  <div>
                    <b>Password:</b>
                    <p>{user.password}</p>
                  </div>
                  <div>
                    <button onClick={()=> navigate('/edit/password')}>
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default LoginAndSecurity;
