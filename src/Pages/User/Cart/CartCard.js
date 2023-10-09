import React from "react";
import "./CartCard.css";

const CartCard = ({ data, removeProduct }) => {
  return (
    <div className="cartCardBody">
      {data.map((item, index) => (
        <div>
          <div className="cartCard" key={index}>
            <div className="productImage">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="productDescription">
              <h3>{item.title}</h3>
              <p>Price ₹ {item.price}</p>
              <div className="cartCard-buttons">
                <button style={{ height: "30px", borderRadius: "3px" }}>
                  Qty:
                  <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
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
            {/* <div className="cartCard-buttons1">
              <button style={{ height: "30px", borderRadius: "3px" }}>
                Qty:
                <select>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </button>
              <section className="sectionButtons">
                <button onClick={() => removeProduct(item)}>Delete</button>
                <button>Save for later</button>
                <button>See more like this</button>
                <button>Share</button>
              </section>
            </div> */}
          </div>
          <br />
          <hr />
        </div>
      ))}
    </div>
  );
};

export default CartCard;
