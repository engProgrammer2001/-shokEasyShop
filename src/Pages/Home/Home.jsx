import React, { useContext } from "react";
import HeroSection from "../../Components/HeroSection/HeroSection";
import Filter from "../../Components/Filter/Filter";
import ProductCard from "../../Components/ProductCard/ProductCard";
import Testimonial from "../../Components/Testimonial/Testimonial";
import Layout from "../../components/layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../Redux/CartSlice";
import { Link } from "react-router-dom";
import Track from "../../Components/track/track";

const Home = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state)=> state.cart)

  console.log(cartItem)

  const addCart = () => {
    dispatch(addToCart("shirt"));
  }

  const deleteCart = () => {
    dispatch(deleteFromCart("shirt"));
  }
  return (
    <Layout>
     {/* <div className="flex gap-5 justify-center">
        <button className=' bg-gray-300 p-5' onClick={()=> addCart()}>add</button>
        <button className=' bg-gray-300 p-5' onClick={()=> deleteCart()}>del</button>
      </div> */}
      <HeroSection />
      <Filter />
      <ProductCard />
      <div className="flex justify-center -mt-10 mb-4 pt-5">
        <Link to={'/allproducts'}>
          <button className=' bg-gray-300 px-5 py-2 rounded-xl'>See more</button>
        </Link>
      </div>
      <Track />
      <Testimonial />
    </Layout>
  );
};

export default Home;
