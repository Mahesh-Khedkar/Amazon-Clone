import React, { useState, useEffect } from "react";
import "./ProductDescription.css";
import Navbar from "../../../Components/Navbar/Navbar";
import { useLocation } from "react-router-dom";
import Footer from "../../../Components/Footer/Footer";
import PlaceIcon from "@mui/icons-material/Place";
import axios from 'axios';
import LockIcon from '@mui/icons-material/Lock';

const ProductDescription = ({cartData}) => {
  const location = useLocation();
  const product = location.state ? location.state.item : null;

// Function to add a product to the cart
  function addToCart(product) {
    const isLoggedIn = sessionStorage.getItem("userId");

    // let quantity = document.getElementById("quantity").value;
    // product["quantity"] = quantity;

    if (isLoggedIn) {
      // Check if the product is already in the cart
      const isProductInCart = cartData.some((item) => item.pId === product.pId);

      if (isProductInCart) {
        alert("Product already exists in your cart...!");
        window.location.href = "/shoppingCart";
      } 
      else 
      {
        product.userId = sessionStorage.getItem("userId");
        axios
          .post("http://localhost:8000/cart/", product)
          .then((response) => {
            console.log("POST request successful", response);
            // Redirect or perform any other action as needed
            window.location.href = "/shoppingCart";
          })
          .catch((error) => {
            console.error("Error making POST request", error);
          });
      }
    } 
    else 
    {
      window.location.href = "/login";
    }
  }

  return (
    <div className="productDescriptionBody">
      <div>
        <Navbar />
      </div>
      <div className="productDescriptionContent">
        <nav className="productDescriptionNav">
          <div>
            <h2>{product.category}</h2>
          </div>
          <div className="productDescriptionNavCenter">
            <div>
              Women
            </div>
            <div>
              Men
            </div>
            <div>
              Kids
            </div>
            <div>
              Bags & Luggage
            </div>
            <div>
              Sportswear
            </div>
          </div>
          <div className="returnPolicy">
            <a href="https://www.amazon.in/gp/help/customer/display.html/?ie=UTF8&nodeId=201149900&ref_=sv_top_ap_mega_7">
              <img src="https://m.media-amazon.com/images/G/31/img17/Fashion/150-x-50._CB485918503_.jpg"></img>
            </a>
          </div>
        </nav>

        {product ? (
          <div className="productDescriptionContent-Container">
            <div className="description">
            <div className="productDetailsImage">
              <img src={product.image} />
            </div>
            <div className="productDetailsDescription">
              <h2>{product.title}</h2>
              <p>{product.rating.rate} ⭐</p>
              <hr />
              <h3>
                <sup>₹</sup> {product.price}
              </h3>
              <p>Inclusive of all taxes</p>
              <hr />
              <p>{product.description}</p>
            </div>

            </div>
            <div className="productActions">
              <h3>
                M.R.P. <sup>₹</sup> {product.price}
              </h3>
              <p><span>FREE delivery</span> Thursday, 19 October. <span>Details</span></p>
              <p>
                Or fastest delivery Tomorrow, 15 October. Order within 2 hrs 27
                mins. <span>Details</span>
              </p>
              <p>
                <PlaceIcon style={{ color: "red" }} />
                <span>Deliver to {sessionStorage.getItem("userName")} - Pune 411014‌</span>
              </p>
              <p>Sold by <span>{"   "}</span> and <span>Fulfilled by Amazon</span>.</p>
              Quantity:
              <select id="quantity" value={product.quantity} onChange={(e) => product.quantity = e.target.value}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
              <button
                className="addToCartBtn"
                style={{width:'98%',margin:'10px'}}
                onClick={() => addToCart(product)}
              >
                Add to cart
              </button>
              <button
                className="buyNowBtn"
                style={{ width: '98%', backgroundColor: 'orange', margin: '10px' }}
                // onClick={() => addToCart(product)}
              >
                Buy Now
              </button>
              <p><LockIcon/> <span>Secure transaction</span></p>
              <div className="dialogBox">
                <p><b>Your transaction is secure</b></p>
                <p>We work hard to protect your security and privacy. Our payment security system encrypts your information during transmission. We don’t share your credit card details with third-party sellers, and we don’t sell your information to others. <span>Learn more</span></p>
              </div>
              <input type="checkbox"/>
              Add gift options
              <hr/>
              <select className="addToWishlist">
                <option>Add to wishlist</option>
              </select>

            </div>
          </div>
        ) : (
          <p>Product not found</p>
        )}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ProductDescription;
