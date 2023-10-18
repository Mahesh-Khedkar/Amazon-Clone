import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Cart from './Pages/Home/Cart/Cart';
import ShoppingCart from './Pages/User/Cart/ShoppingCart';
import Account from './Pages/User/UserAccount/Account';
import Login from './Pages/Forms/User/Login/Login';
import Register from './Pages/Forms/User/Register/Register';
import Orders from './Pages/User/Orders/UserOrders';
import ShopByCategories from './Pages/Home/ShopByCategories';
import ProductDescription from './Pages/Home/ProductDescription/ProductDescription';
import axios from 'axios';
import CheckOut from './Pages/User/CheckOut/CheckOut';


const App = () => {

//To fetch all products
const [products , setProducts] = useState();
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  // Define the API URL you want to fetch data from
  const apiUrl = 'http://localhost:8000/products';
  // Use Axios to fetch data from the API
  axios.get(apiUrl)
    .then((response) => {
      // Set the data in state
      setProducts(response.data);
      // console.log(response.data);
      setLoading(false);
    })
    .catch((err) => {
      // Handle errors
      setError(err);
      setLoading(false);
    });
}, []);

 //Get all products from cart of current user---------------------

 const [cartData , setData] = useState([]);
 const [loading1, setLoading1] = useState(true);
 const [error1, setError1] = useState(null);

 useEffect(() => {

   const apiUrl = `http://localhost:8000/cart?userId=${sessionStorage.getItem("userId")}`;

   axios.get(apiUrl)
     .then((response) => {
       // Set the data in state
       setData(response.data);
       sessionStorage.setItem("cartLength",response.data.length);
       setLoading1(false);
     })
     .catch((err) => {
       // Handle errors
       setError1(err);
       setLoading1(false);
     });
 }, []);
 // console.log(cartData);  


  return (
    <div>
      {/* <Home/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/shoppingCart" element={<ShoppingCart/>} />
          <Route path="/account" element={<Account/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/orders" element={<Orders/>} />
          <Route path="/categories/:categoryName" element={<ShopByCategories />} />
          <Route path="/productdetails" element={<ProductDescription products={products} cartData={cartData}/>} />
          <Route path="/checkout" element={<CheckOut/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
