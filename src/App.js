import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Cart from './Pages/Home/Cart/Cart';
import Account from './Pages/User/UserAccount/Account';

const App = () => {
  return (
    <div>
      {/* <Home/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/account" element={<Account/>} />
          {/* <Route element={NotFound} /> */}
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
