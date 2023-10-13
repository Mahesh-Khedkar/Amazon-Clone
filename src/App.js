import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Cart from './Pages/Home/Cart/Cart';
import UserCart from './Pages/User/Cart/Cart';
import Account from './Pages/User/UserAccount/Account';
import Login from './Pages/Forms/User/Login/Login';
import Register from './Pages/Forms/User/Register/Register';
import Orders from './Pages/User/Orders/UserOrders';
import ShopByCategories from './Pages/Home/ShopByCategories';
import ProductDescription from './Pages/Home/ProductDescription/ProductDescription';
import axios from 'axios';


const App = () => {

//To fetch all products
const [products , setProducts] = useState();
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

//For search functionality
const[search,setSearch]= useState('');
// console.log(search);

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


  return (
    <div>
      {/* <Home/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/userCart" element={<UserCart/>} />
          <Route path="/account" element={<Account/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/orders" element={<Orders/>} />
          <Route path="/categories/:categoryName" element={<ShopByCategories />} />
          <Route path="/productdetails/:title" element={<ProductDescription products={products}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
