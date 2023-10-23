import React from "react";
import "./UserOrders.css";

const OrdersCard = (ordersData) => {
  // console.log(ordersData);

  return (
    <div>
      {ordersData.ordersData.map((item) => {
        return (
          <div>
            {/* <h1>order details: {item.data[0].category}</h1> */}
            <div className="ordersCard">
              <div className="orderDetails">
                <div className="leftPart">
                  <span>
                    ORDER PLACED <br />
                    {item.date}
                  </span>
                  <span>
                    TOTAL <br />
                    {"₹ " + (item.data[0].price * parseFloat(item.data[0].quantity))}
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
                      <img src={item.data[0].image}/>
                    </div>
                    <div className="orderedProductDescription">
                    {item.data[0].title}
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
                <span
                  style={{ marginLeft: "20px", color: "rgb(22, 116, 133)" }}
                >
                  Archive Order
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OrdersCard;
