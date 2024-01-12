import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Order from "./Pages/Order/Order";
import Card from "./Pages/Card/Card";
import Allproduct from "./Pages/Allproducts/Allproduct";
import Nopage from "./Pages/Nopage/Nopage";
import MyState from "./Context/data/myState";
import Login from "./Pages/Registration/Login";
import SignUp from "./Pages/Registration/SignUp";
import ProductInfo from "./Pages/ProductInfo/ProductInfo";
import Dashboard from "./Pages/admin/Dashboard/Dashboard";
import AddProduct from "./Pages/admin/Pages/AddProduct";
import UpdateProduct from "./Pages/admin/Pages/UpdateProduct"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={
            <ProtectedRoutes>
              <Order />
            </ProtectedRoutes>
          } />
          <Route path="/card" element={<Card />} />
          <Route path="/allproduct" element={<Allproduct />} />
          <Route path="/dashboard" element={
            <ProtectedRoutesForAdmin>
              <Dashboard />
            </ProtectedRoutesForAdmin>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          <Route path="/addproduct" element={
            <ProtectedRoutesForAdmin>
              <AddProduct />
            </ProtectedRoutesForAdmin>
          } />
          <Route path="/updateproduct" element={
            <ProtectedRoutesForAdmin>
              <UpdateProduct />
            </ProtectedRoutesForAdmin>
          } />
          <Route path="/*" element={<Nopage />} />
        </Routes>
        <ToastContainer />
      </Router>
    </MyState>
  );
};

export default App;


// User 
export const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem('user')) {
    return children;
  }
  else {
    return <Navigate to='/login' />
  }
}


// Admin
export const ProtectedRoutesForAdmin = ({children}) => {
  const admin = JSON.parse(localStorage.getItem('user'))
  console.log(admin.user.email)
  if (admin.user.email === 'askushwaha613@gmail.com') {
    return children;
  }
  else {
    return <Navigate to='/login' />
  }
}