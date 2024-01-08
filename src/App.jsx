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
            <ProtectedRoute>
              <Order />
            </ProtectedRoute>
          } />
          <Route path="/card" element={<Card />} />
          <Route path="/allproduct" element={<Allproduct />} />
          <Route path="/dashboard" element={
            <ProtectedRouteForAdmin>
              <Dashboard />
            </ProtectedRouteForAdmin>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          <Route path="/addproduct" element={
            <ProtectedRouteForAdmin>
              <AddProduct />
            </ProtectedRouteForAdmin>
          } />
          <Route path="/updateproduct" element={
            <ProtectedRouteForAdmin>
              <UpdateProduct />
            </ProtectedRouteForAdmin>
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
export const ProtectedRoute = ({children}) => {
  const user = localStorage.getItem('user')
  if(user){
    return children
  }
  else{
    return <Navigate to={'/login'} />
  }
}

// Admin
const ProtectedRouteForAdmin = (children) => {
  const admin = JSON.parse(localStorage.getItem('user'))
  if(admin.user.email === 'askushwaha613@gmail.com'){
    return children
  }
  else{
    return <Navigate to={'/login'} />
  }
}