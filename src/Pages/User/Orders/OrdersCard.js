import React from "react";
import './UserOrders.css';

const OrdersCard = () => {
  return (
    <div>
      <div className="ordersCard">
        <div className="orderDetails">
          <div className="leftPart">
            <span>
              ORDER PLACED <br />
              {"Date"}
            </span>
            <span>
              TOTAL <br />
              {"₹"}
            </span>
            <span>
              SHIP TO <br />
              <span style={{ color: "rgb(22, 116, 133)" }}>
                {sessionStorage.getItem("userName")}
              </span>
            </span>
          </div>
          <div className="rightPart">
            <span>
              ORDER # {"407-0790715"}
              <br />
            </span>
          </div>
        </div>
        <div className="orderedProductDetails">
          <div className="orderedProductDetailsLeft">
            <h3>
              Arriving
              <p>{"satus"}</p>
            </h3>
            <div className="orderedProduct">
              <div className="orderedProductImage">
                <img src="https://m.media-amazon.com/images/I/41WW5WJxc8L._SY180_.jpg" />
              </div>
              <div className="orderedProductDescription">
                {
                  "ASIAN SM-162 Walking Shoes,Casual Shoes,Canvas Shoes,Laceup Shoes,Sneakers for Men (UK-8, Black)"
                }
              </div>
            </div>
          </div>
          <div className="orderedProductDetailsRight">
            <button style={{ background: "rgb(236, 216, 2)" }}>
              Track package
            </button>
            <button>Cancel this delivery</button>
            <button>View or edit order</button>
          </div>
        </div>
        <hr />
        <div className="archiveOrder">
          <span style={{ marginLeft: "20px", color: "rgb(22, 116, 133)" }}>
            Archive Order
          </span>
        </div>
      </div>
    </div>
  );
};

export default OrdersCard;
