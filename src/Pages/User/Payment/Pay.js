import React, { useState } from "react";
import "./Pay.css";
import Logo from "../../../Images/LoginLogo.png";
import LockIcon from "@mui/icons-material/Lock";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Pay = () => {
  let navigate = useNavigate();

  const location = useLocation();
  const products = location.state ? location.state.product : null;

  // console.log(products)
  let productForOrder = products;
  //Review order---------------------------------------------------------------

  let [reviewOrder, setReviewOrder] = useState([]);
  const delivery = products.totalOrderPrice >= 499 ? 0 : 40;
  const total =
    delivery > 0
      ? (parseFloat(products.totalOrderPrice) + delivery).toFixed(2)
      : parseFloat(products.totalOrderPrice).toFixed(2);

  // Place order-----------------

  let[selectedPayment, setPayment] = useState();
  // console.log(selectedAddress.length)

  function selectPayment(){
    if(selectedPayment)
    {
      setReviewOrder(products);
    }
    else
    {
      alert("Please select Payment Method");
    }
  }

  function formatDate(date) {
    const options = { day: "numeric", month: "long", year: "numeric" };
    return date.toLocaleDateString(undefined, options);
  }
  const currentDate = new Date();
  const formattedDate = formatDate(currentDate);

  //   console.log(formattedDate); // Outputs something like "9 October 2023"

  function placeOrder(order) {
    // Assuming order is an array of products
    const finalOrder = {
      products: order,
      finalOrderPrice: total,
      buyersAddress: order.buyersAddress,
      userId: sessionStorage.getItem("userId"),
      date: formattedDate,
    };
    axios
      .post("http://localhost:8000/orders/", finalOrder)
      .then((response) => {
        console.log("POST request successful", response);
        // Redirect or perform any other action as needed
        //   window.location.href = "/orders";
        navigate("/orders");
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
        <div className="payLeftContainer">
          <div className="deliveryAddress">
            <h3 style={{ color: "black" }}>1 Delivery address</h3>
            <div className="deliveryAddressCard">
              <p>{products.buyersAddress.name}</p>
              <p>
                {products.buyersAddress.city}, {products.buyersAddress.state},{" "}
                {products.buyersAddress.pincode}
              </p>
              <span>Add delivery instructions</span>
            </div>
            <span
              onClick={() =>
                navigate("/checkout", { state: { productForOrder } })
              }
            >
              Change
            </span>
          </div>
          <hr />
          <h3 style={{ color: "rgb(188, 70, 2)" }}>
            2{" "}
            <span style={{ marginLeft: "20px" }}>Selected Payment method</span>
          </h3>
          <div className="checkoutAddresses">
            <h3 style={{ color: "black" }}>Your available balance</h3>
            <hr />
            <div className="addressCard">
              <p>
                <input type="radio" onClick={()=> setPayment("cod")}/>
                <b>Cash on Delivery/Pay on Delivery</b>
                <br />
                <section style={{ marginLeft: "20px", fontWeight: "10px" }}>
                  Cash, UPI and Cards accepted.
                  <span>
                    <b> Know more</b>
                  </span>
                  .
                </section>
              </p>
            </div>
            <br />
            <hr />
            <div className="confirmAddress">
              {reviewOrder.length <= 0 ? (
                <button
                  style={{ width: "30%" }}
                  onClick={() => selectPayment()}
                >
                  <b>Use this payment method</b>
                </button>
              ) : (
                <div className="reviewPay">
                  <div>
                  <button
                    style={{ width: "100%" }}
                    onClick={() => placeOrder(reviewOrder)}
                  >
                    <b>Place your order</b>
                  </button>
                  </div>
                  <div className="confirmOrderToPay">
                  <h3 style={{ color: "rgb(219, 63, 36)" }}>
              Order Total: ₹ {total}
            </h3>
                  <p style={{ textAlign: "center" }}>
                    By placing your order, you agree to Amazon's privacy notice
                    and conditions of use.
                  </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="rightContainer">
          <div className="confirmAddress">
            {reviewOrder <= 0 ? (
              <>
                <button
                  style={{ width: "100%" }}
                  onClick={() => selectPayment()}
                >
                  <b>Use this payment method</b>
                </button>
                <p style={{ textAlign: "center" }}>
                  Choose a payment method to continue checking out. You will
                  still have a chance to review and edit your order before it is
                  final.
                </p>
              </>
            ) : (
              <>
                <button
                  style={{ width: "100%" }}
                  onClick={() => placeOrder(reviewOrder)}
                >
                  <b>Place your order</b>
                </button>
                <p style={{ textAlign: "center" }}>
                  By placing your order, you agree to Amazon's privacy notice
                  and conditions of use.
                </p>
              </>
            )}
            <hr />
            <h3>Order Summary</h3>
            <p>
              Items:{" "}
              <span style={{ marginLeft: "50px" }}>
                ₹{products.totalOrderPrice}
              </span>
            </p>
            <p>
              Delivery: <span style={{ marginLeft: "30px" }}>₹{delivery}</span>
            </p>
            <p>
              Total: <span style={{ marginLeft: "50px" }}>₹{total}</span>
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
