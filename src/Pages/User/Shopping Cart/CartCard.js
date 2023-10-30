import React from "react";
import "./CartCard.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CartCard = ({ data, removeProduct, selectedProduct }) => {

  let navigate = useNavigate();

  let [qty, setQty] = useState(1);

  //Change quantity ---------
  function changeQuantity(item, quantity) {
    // Check if the item has a 'quantity' property before modifying it
    if (item && item.hasOwnProperty("quantity")) {
      // console.log(item);

      // Update the quantity property
      item.quantity = quantity;

      // Send a PUT request to update the item on the server
      // axios.put(`http://localhost:8000/cart?userId=${sessionStorage.getItem("userId")}&pId=${item.pId}`, item)
      //   .then(response => {
      //     // Handle the successful response here
      //     console.log("Item updated successfully:", response.data);
      //     data((prev)=>prev.filter((item1)=> item1.id !== item.id));
      //   })
      //   .catch(error => {
      //     // Handle any errors that occurred during the request
      //     console.error("Error updating item:", error);
      //   });
    } else {
      console.error("Invalid item object or missing 'quantity' property.");
    }
  }

  return (
    <div className="cartCardBody">
      {data.map((item, index) => (
        <div>
          <div className="cartCard" key={index}>
            <div className="cardDescription">
              <input
                id="checkbox1"
                style={{ margin: "30px" }}
                type="checkbox"
                onClick={() => selectedProduct(item)}
              />

              <div className="productImage">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="productDescription">
                <h3 
                style={{cursor:'pointer'}}
                onClick={()=>navigate('/productdetails',{state : {item}})}
                >
                  {item.title}
                </h3>
                <p>
                  Price ₹{" "}
                  <big>
                    <b>{item.price}</b>
                  </big>
                </p>
                <p>Rating : {item.rating.rate} ⭐</p>
                <div className="cartCard-Actions">
                  <button
                    id="qty0"
                    style={{ height: "30px", borderRadius: "3px" }}
                  >
                    Qty:
                    {/* <select
                      value={item.quantity} // Set the value to track the quantity
                      onChange={(e) => {
                        const newQuantity = parseInt(e.target.value, 10);
                        // Handle the quantity change here, you may want to update your state accordingly.
                      }}
                    > */}
                    <select
                      value={item.quantity}
                      onChange={(e) => changeQuantity(item, e.target.value)}
                    >
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                    </select>
                  </button>
                  <section className="sectionButtons">
                    <button onClick={() => removeProduct(item)}>Delete</button>
                    <button>Save for later</button>
                    <button>See more like this</button>
                    <button>Share</button>
                  </section>
                </div>
              </div>
            </div>

            {/*--------------- cartCard-buttons-mobile-view--------------- */}

            <div className="cartCard-buttons-mobile-view">
            <button
                    id="qty0"
                    style={{ height: "30px", borderRadius: "3px" }}
                  >
                    Qty:
                    {/* <select
                      value={item.quantity} // Set the value to track the quantity
                      onChange={(e) => {
                        const newQuantity = parseInt(e.target.value, 10);
                        // Handle the quantity change here, you may want to update your state accordingly.
                      }}
                    > */}
                    <select
                      value={item.quantity}
                      onChange={(e) => changeQuantity(item, e.target.value)}
                    >
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                    </select>
                  </button>
              <div>
                <button>Delete</button>
              </div>
              <div>
                <button>Share</button>
              </div>
            </div>
            {/* --------------------------------------------------- */}
          </div>
          <br />
          <hr />
        </div>
      ))}
    </div>
  );
};

export default CartCard;
