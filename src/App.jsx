import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Order from "./Pages/Order/Order";
import Card from "./Pages/Card/Card";
import Allproduct from "./Pages/Allproducts/Allproduct";
import Dashboard from "./Pages/admin/Dashboard";
import Nopage from "./Pages/Nopage/Nopage";
import MyState from "./Context/data/myState";
import Login from "./Pages/Registration/Login";
import SignUp from "./Pages/Registration/SignUp";
import ProductInfo from "./Pages/ProductInfo/ProductInfo";


const App = () => {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/card" element={<Card />} />
          <Route path="/allproduct" element={<Allproduct />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          <Route path="/*" element={<Nopage />} />
        </Routes>
      </Router>
    </MyState>
  );
};

export default App;
