import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Cart from './Pages/Home/Cart/Cart';
import UserCart from './Pages/User/Cart/Cart';
import Account from './Pages/User/UserAccount/Account';
import Login from './Pages/Forms/User/Login/Login';
import Register from './Pages/Forms/User/Register/Register';
import Orders from './Pages/Orders/Orders';
import ShopByCategories from './Pages/Home/ShopByCategories';

const App = () => {

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
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
