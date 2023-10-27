import React, { useState, useEffect } from "react";
import "./ShoppingCart.css";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import CartCard from "./CartCard";
import axios from "axios";
import { json, useNavigate } from "react-router-dom";

const Cart = () => {
  let navigate = useNavigate();

//Get all products from cart of current user---------------------

  const [cartData, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // console.log(cartData)

  useEffect(() => {
    const apiUrl = `http://localhost:8000/cart?userId=${sessionStorage.getItem(
      "userId"
    )}`;

    axios
      .get(apiUrl)
      .then((response) => {
        // Set the data in state
        setData(response.data);
        sessionStorage.setItem("cartLength", response.data.length);
        setLoading(false);
      })
      .catch((err) => {
        // Handle errors
        setError(err);
        setLoading(false);
      });
  }, []);

  //Remove product from cart---------------------

  function removeProduct(product) {
    cartData.forEach((item) => {
      if (
        item.id === product.id &&
        item.userId === sessionStorage.getItem("userId")
      ) {
        axios
          .delete(`http://localhost:8000/cart/${item.id}`)
          .then((response) => {
            // Handle the response from the DELETE request
            console.log("DELETE request successful", response);
            // Redirect or perform any other action as needed
            // window.location.href = "/shoppingCart"; // Assuming 'navigate' is not defined
            // alert("Product Removed ..!");

            setData((prev)=>prev.filter((item)=> item.id !== product.id));
            sessionStorage.setItem("cartLength", cartData.length);

          })
          .catch((error) => {
            console.error("Error making DELETE request", error);
          });
      }
    });
  }

  // Selected product for order-----------
  const [productForOrder, setProductForOrder] = useState([]);

  const selectedProduct = (product) => {
    if (productForOrder.includes(product)) {
      // If the product is already selected, remove it
      const updatedProductForOrder = productForOrder.filter(
        (selectedProduct) => selectedProduct.id !== product.id
      );
      setProductForOrder(updatedProductForOrder);
    }
     else 
     {
      // If the product is not selected, add it
      setProductForOrder([...productForOrder, product]);
    }
  };


// Total order summary---------------
  const totalOrderValue = productForOrder.reduce((total, item) => {
  const itemTotal = (item.price * parseInt(item.quantity)).toFixed(2);
  return (parseFloat(total) + parseFloat(itemTotal)).toFixed(2);
  // return((itemTotal));
},0);

productForOrder["totalOrderPrice"]=totalOrderValue;

  return (
    <div className="userCartBody">
      <div>
        <Navbar/>
      </div>
      <div className="userCartContent">

{/* ---------billCard For Mobile View --------------*/}
<div className="BillCardForMobile">
          <div className="billCard">
            <p>
              Your order is eligible for FREE Delivery. Select this option at
              checkout. Details
            </p>
            <h3>
              Subtotal {"(" + productForOrder.length} item {")"}: <sup>₹ </sup>
              <b>{totalOrderValue}</b>
            </h3>
            <p>
              <input type="checkbox" name="" value="" />
              This order contains a gift
            </p>
            <button
              className="addToCartBtn"
              style={{ width: "98%" }}
              onClick={()=>navigate('/checkout',{state : {productForOrder}})}
            >
              Proceed to Buy
            </button>
          </div>
        </div>
{/* ------------------------------------------- */}
        <div className="shopingCart">
          <section>
            <h1>Shopping Cart</h1>
            {/* <p>
              <input type="checkbox" />
              Deselect all items
            </p> */}
            <hr />
            <br />
            <CartCard
              data={cartData}
              removeProduct={removeProduct}
              selectedProduct={selectedProduct}
            />
          </section>
        </div>
        <div className="RightContainer">
          <div className="billCard">
            <p>
              Your order is eligible for FREE Delivery. Select this option at
              checkout. Details
            </p>
            <h3>
              Subtotal {"(" + productForOrder.length} item {")"}: <sup>₹ </sup>
              <b>{totalOrderValue}</b>
            </h3>
            <p>
              <input type="checkbox" name="" value="" />
              This order contains a gift
            </p>
            <button
              className="addToCartBtn"
              style={{ width: "98%" }}
              onClick={()=>navigate('/checkout',{state : {productForOrder}})}
            >
              Proceed to Buy
            </button>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Cart;
