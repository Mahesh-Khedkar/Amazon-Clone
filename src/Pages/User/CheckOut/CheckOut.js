import React from "react";
import "./CheckOut.css";
import Logo from "../../../Images/LoginLogo.png";
import LockIcon from "@mui/icons-material/Lock";
import { useLocation, useNavigate } from "react-router-dom";

const CheckOut = ({addAddress}) => {
  let navigate = useNavigate();

  const location = useLocation();
  const product = location.state ? location.state.productForOrder : null;

  // console.log(product)

//Total order summary-----------

// const totalOrderValue = product.reduce((total, item) => {
//   const itemTotal = (item.price * item.quantity).toFixed(2);
//   return (parseFloat(total) + parseFloat(itemTotal)).toFixed(2);
// }, "0.00");


  return (
    <div className="checkOutBody">
      <div className="topPannel">
        <div className="logo" onClick={() => navigate("/")}>
          <img src={Logo} />
        </div>
        <p><b>Checkout</b></p>
        <LockIcon style={{ color: "gray" }} />
      </div>
      <div className="checkoutBodyContent">
        <div className="leftContainer">
          <h3>1 <span style={{marginLeft:'20px'}}>Select a delivery address</span></h3>
          <div className="addresses">
            <h3 style={{ color: "black" }}>Your addresses</h3>
            <hr />
            <div className="addressCard">
              <p>
                <input type="radio" />
                <b>Khedkar Mahesh</b> Anna Stays, lane12,, Rajaram Patil Nagar,
                Vitthal Nagar, PUNE, MAHARASHTRA, 411014, India Edit address |
                Add delivery instructions
              </p>
            </div>
            <br/>
            <hr />
            <div className="confirmAddress">
              <button onClick={()=>navigate('/pay',{state : {product}})}>
                <b>Use this address</b>
              </button>
            </div>
          </div>
        </div>
        <div className="rightContainer">
          <div className="confirmAddress">
            <button style={{width:'100%'}} onClick={()=>navigate('/pay',{state : {product}})}>
              <b>Use this address</b>
            </button>
            <p style={{textAlign:'center'}}>
              Choose a shipping address and payment method to calculate shipping, handling and tax.
            </p>
            <hr/>
            <h3>
              Order Summary
            </h3>
            <p>
              Items: <span style={{marginLeft:'30px'}}>{product.length}</span>
            </p>
            <p>
              Delivery:
            </p>
            <hr/>
            <h3 style={{color:'rgb(219, 63, 36)'}}>
              Order Total: 
              ₹ {product.totalOrderPrice}
            </h3>
            <hr/>
            <br/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
