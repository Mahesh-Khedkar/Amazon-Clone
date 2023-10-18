import React from "react";
import "./CartCard.css";
import { useState } from "react";

const CartCard = ({ data, removeProduct, selectedProduct }) => {
  let [qty, setQty] = useState(1);

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
                <h3>{item.title}</h3>
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
                    <select
                      value={item.quantity} // Set the value to track the quantity
                      onChange={(e) => {
                        const newQuantity = parseInt(e.target.value, 10);
                        // Handle the quantity change here, you may want to update your state accordingly.
                      }}
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
            <div className="cartCard-buttons-mobile-view">
              <div className="qtyBtn">
                <button onClick={() => setQty(qty - 1)}>-</button>
                <input id="qty1" type="text" value={qty} />
                <button onClick={() => setQty(qty + 1)}>+</button>
              </div>
              <div>
                <button>Delete</button>
              </div>
              <div>
                <button>Share</button>
              </div>
            </div>
          </div>
          <br />
          <hr />
        </div>
      ))}
    </div>
  );
};

export default CartCard;
