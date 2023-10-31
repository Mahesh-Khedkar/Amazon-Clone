import React, { useState, useEffect } from "react";
import "./Edit.css";
import "./LoginAndSecurity.css";
import Navbar from "../../../../Components/Navbar/Navbar";
import Footer from "../../../../Components/Footer/Footer";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Edit = ({ userData, setUserData }) => {
  let navigate = useNavigate();

  let { edit } = useParams();

//Edit user Data--------------------


  let [change, setChange] = useState("");

  useEffect(() => {
    {
      userData.map((user) => {

        // updatedData["userName"] = user.userName;
        // updatedData["email"] = user.email; 
        // updatedData["mobileNumber"] = user.mobileNumber; 
        // updatedData["password"] = user.password; 

        // console.log(updatedData)

        if (edit === "userName") {
          setChange(user.userName);
        }

        if (edit === "email") {
          setChange(user.email);
        }
        if (edit === "mobileNumber") {
          setChange(user.mobileNumber);
        }
        if (edit === "password") {
          setChange(user.password);
        }
      });
    }
  }, []);

  let updatedData = {
    
  };
  
  function editUserData() {

    userData.map((user) => {

        updatedData["userName"] = user.userName;
        updatedData["email"] = user.email; 
        updatedData["mobileNumber"] = user.mobileNumber; 
        updatedData["password"] = user.password; 

    if (edit === "userName") {
        updatedData.userName = change;
    }

      if (edit === "email") {
        updatedData.email = change;
    }
      if (edit === "mobileNumber") {
        updatedData.mobileNumber = change;
    }
      if (edit === "password") {
        updatedData.password = change;
    }
    })

    axios
    .put(`http://localhost:8000/user/${sessionStorage.getItem("userId")}`, updatedData) // Changed to PUT
    .then((response) => {
      console.log("PUT request successful", response);
    // Update the state to reflect the changes
    setUserData((prevUserData) => {
      return prevUserData.map((item) => {
          return {
            userName: updatedData.userName,
            email: updatedData.email,
            mobileNumber: updatedData.mobileNumber,
            password: updatedData.password
          };   
      });
    });
      navigate("/login&security");
    })
    .catch((error) => {
      console.error("Error making PUT request", error);
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
          <span style={{ color: "rgb(22, 116, 133)" }}>
            Login & Security ›{" "}
          </span>
          <span style={{ color: "red" }}>Change {edit}</span>
          <br />
          <div style={{ lineHeight: "15px" }}>
            <h2>Change {edit}</h2>
          </div>
          {userData.map((user) => {
            return (
              <div className="editConatiner">
                <div className="editCard">
                  <p>
                    If you want to change the {edit} associated with your Amazon
                    customer account, you may do so below. Be sure to click the{" "}
                    <b>Save Changes</b> button when you are done.
                  </p>
                  <p>
                    <b>New {edit}</b>
                  </p>
                  <input
                    value={change}
                    type="text"
                    onChange={(e) => setChange(e.target.value)}
                  />
                  <br />
                  <div>
                    <button className="SaveBtn" onClick={()=> editUserData()}>
                        Save Changes
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

export default Edit;
