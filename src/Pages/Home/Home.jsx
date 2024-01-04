import React, { useContext } from "react";
import HeroSection from "../../Components/HeroSection/HeroSection";
import Filter from "../../Components/Filter/Filter";
import ProductCard from "../../Components/ProductCard/ProductCard";
import Testimonial from "../../Components/Testimonial/Testimonial";
import Layout from "../../components/layout/Layout";


const Home = () => {
  return (
      <Layout>
      <HeroSection />
      <Filter />
      <ProductCard />
      <Testimonial />
      </Layout>
  );
};

export default Home;
