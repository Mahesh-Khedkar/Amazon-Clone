import React, { useState } from "react";
import "./Pay.css";
import Logo from "../../../Images/LoginLogo.png";
import LockIcon from "@mui/icons-material/Lock";
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';

const Pay = () => {
  let navigate = useNavigate();

  const location = useLocation();
  const products = location.state ? location.state.product : null;

//   console.log(products)

//Review order---------------------------------------------------------------

  let [reviewOrder, setReviewOrder] = useState([]);
  const delivery = products.totalOrderPrice >= 499 ? 0 : 40;
  const total = delivery > 0 ? (parseFloat(products.totalOrderPrice) + delivery).toFixed(2) : parseFloat(products.totalOrderPrice).toFixed(2);
    

// Place order-----------------
function formatDate(date) {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  }
  const currentDate = new Date();
  const formattedDate = formatDate(currentDate);
  
//   console.log(formattedDate); // Outputs something like "9 October 2023"

function placeOrder(order){
    // Assuming order is an array of products
    const finalOrder = 
        {
        "data": order,
        "finalOrderPrice": total,
        "buyerAddress": "Pune - 411014",
        "userId": sessionStorage.getItem("userId"),
        "date":formattedDate
        }
    ;
    axios
    .post("http://localhost:8000/orders/", finalOrder)
    .then((response) => {
      console.log("POST request successful", response);
      // Redirect or perform any other action as needed
    //   window.location.href = "/orders";
      navigate('/orders');
    })
    .catch((error) => {
      console.error("Error making POST request", error);
    });
}


  return (
    <div className="checkOutBody">
      <div className="topPannel">
        <div className="logo" onClick={() => navigate("/")}>
          <img src={Logo} />
        </div>
        <p>
          <b>Checkout</b>
        </p>
        <LockIcon style={{ color: "gray" }} />
      </div>
      <div className="checkoutBodyContent">
        <div className="leftContainer">
          <h3 style={{ color: "black" }}>
            1 <span style={{ marginLeft: "20px" }}>Delivery address</span>
          </h3>
          <div>
            Anna Stays, lane12,, Rajaram Patil Nagar, Vitthal Nagar, PUNE,
            MAHARASHTRA, 411014, India Edit address | Add delivery instructions
          </div>
          <div className="addresses">
            <h3 style={{ color: "black" }}>Your available balance</h3>
            <hr />
            <div className="addressCard">
              <p>
                <input type="radio" />
                <b>Cash on Delivery/Pay on Delivery</b>
                <br />
                <span style={{ marginLeft: "20px" }}>
                  Cash, UPI and Cards accepted.Know more.
                </span>
              </p>
            </div>
            <br />
            <hr />
            <div className="confirmAddress">
            {reviewOrder.length <= 0? (
                <button
                  style={{ width: "30%" }}
                  onClick={() => setReviewOrder(products)}
                >
                  <b>Use this payment method</b>
                </button>
              ) : (
                <button
                  style={{ width: "30%" }}
                  onClick={() => placeOrder(reviewOrder)}
                >
                  <b>Place your order</b>
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="rightContainer">
          <div className="confirmAddress">
          {reviewOrder <= 0 ? (
              <button
                style={{ width: "100%" }}
                onClick={() => setReviewOrder(products)}
              >
                <b>Use this payment method</b>
              </button>
            ) : (
              <button
                style={{ width: "100%" }}
                onClick={() => placeOrder(reviewOrder)}
              >
                <b>Place your order</b>
              </button>
            )}
            <p style={{ textAlign: "center" }}>
              Choose a shipping address and payment method to calculate
              shipping, handling and tax.
            </p>
            <hr />
            <h3>Order Summary</h3>
            <p>
              Items:{" "}
              <span style={{ marginLeft: "50px" }}>
                ₹{products.totalOrderPrice}
              </span>
            </p>
            <p>
              Delivery:{" "}
              <span style={{ marginLeft: "30px" }}>
                ₹{delivery}
              </span>
            </p>
            <p>
              Total:{" "}
              <span style={{ marginLeft: "50px" }}>
                ₹{total}
              </span>
            </p>
            <hr />
            <h3 style={{ color: "rgb(219, 63, 36)" }}>
              Order Total: ₹ {total}
            </h3>
            <hr />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pay;
