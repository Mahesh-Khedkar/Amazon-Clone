import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Cart from './Pages/Home/Cart/Cart';
import ShoppingCart from './Pages/User/Shopping Cart/ShoppingCart';
import Account from './Pages/User/UserAccount/Account';
import Login from './Pages/Forms/User/Login/Login';
import Register from './Pages/Forms/User/Register/Register';
import Orders from './Pages/User/Orders/UserOrders';
import ShopByCategories from './Pages/Home/ShopByCategories';
import ProductDescription from './Pages/Home/ProductDescription/ProductDescription';
import axios from 'axios';
import CheckOut from './Pages/User/CheckOut/CheckOut';
import Pay from './Pages/User/Payment/Pay';
import Addresses from './Pages/User/Addresses/Addresses';
import AddAddress from './Pages/User/Addresses/AddAddress';
import EditAddress from './Pages/User/Addresses/EditAddress';
import Search from './Pages/Search/Search';


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


 // User Data 
 const [userData , setUserData] = useState([]);
 const [loading3, setLoading3] = useState(true);
 const [error3, setError3] = useState(null);

 useEffect(() => {
   // Define the API URL you want to fetch data from
   const apiUrl = `http://localhost:8000/user?id=${sessionStorage.getItem("userId")}`
   // Use Axios to fetch data from the API

   // const userData =`http://localhost:8000/user?userName=${userId}`;

   axios.get(apiUrl)
     .then((response) => {
       // Set the data in state
       setUserData(response.data);
       setLoading3(false);
     })
     .catch((err) => {
       // Handle errors
       setError3(err);
       setLoading3(false);
     });
 }, []);

//Get all addresses from cart of current user---------------------

  const [addressData, setAddressData] = useState([]);
  const [loading4, setLoading4] = useState(true);
  const [erro4r, setError4] = useState(null);

  useEffect(() => {
    const apiUrl = `http://localhost:8000/useraddress?userId=${sessionStorage.getItem(
      "userId"
    )}`;

    axios
      .get(apiUrl)
      .then((response) => {
        // Set the data in state
        setAddressData(response.data);
        setLoading4(false);
      })
      .catch((err) => {
        // Handle errors
        setError4(err);
        setLoading4(false);
      });
  }, []);

// Add address-----------
// function addAddress(address) {
//   // Create a copy of the userData to avoid directly modifying the state
//   const updatedUserData = { ...userData };
  
//   // Add the new address to the user data's "address" array
//   if (!updatedUserData.address) {
//     updatedUserData.address = [];
//   }
//   updatedUserData.address.push(address);

//   // Perform the PUT request to update the user data
//   axios.put(`http://localhost:8000/user/${sessionStorage.getItem("userId")}`, updatedUserData)
//     .then((response) => {
//       // Handle the response if needed
//       console.log("User data updated:", response.data);
//     })
//     .catch((error) => {
//       // Handle errors
//       console.error("Error updating user data:", error);
//     });
// } 

  return (
    <div>
      {/* <Home/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home addressData={addressData}/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/shoppingCart" element={<ShoppingCart/>} />
          <Route path="/account" element={<Account/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/orders" element={<Orders/>} />
          <Route path="/categories/:categoryName" element={<ShopByCategories />} />
          <Route path="/productdetails" element={<ProductDescription products={products} cartData={cartData}/>} />
          <Route path="/checkout" element={<CheckOut addressData={addressData}/>} />
          <Route path="/pay" element={<Pay/>} />
          <Route path="/addresses" element={<Addresses addressData={addressData} setAddressData={setAddressData}/>} />
          <Route path="/addaddress" element={<AddAddress/>} />
          <Route path="/editaddress/:id" element={<EditAddress addressData={addressData} setAddressData={setAddressData}/>} />
          <Route path="/search/:name" element={<Search products={products}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
