import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Cart from './Pages/Home/Cart/Cart';
import Account from './Pages/User/UserAccount/Account';
import Login from './Pages/Forms/User/Login/Login';

const App = () => {
  return (
    <div>
      {/* <Home/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/account" element={<Account/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
