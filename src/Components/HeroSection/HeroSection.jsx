import { React, useContext, useState } from "react";
import myContext from "../../Context/data/myContext";
// import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
// import { useState } from "react";

const images = [
  "https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T2/images/G/31/img22/Toys/HTL2023/GW/Homepage_DesktopHeroTemplate_3000x1200_Unrec._CB570906581_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T2/images/G/31/img15/4th/sept/unrechero/8thslot/Tws_Tallhero_3000x1200._CB596103422_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T2/images/G/31/img23/Beauty/GW/Dec/unrecatf/AU/PC-3._CB586616255_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T2/images/G/31/img23/Beauty/GW/Dec/unrecatf/AU/PC-1._CB586616255_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T2/images/G/31/2023/GateWay/December/Rec_Unrec/PC_3000x1200_1_3._CB586205297_.jpg",
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const context = useContext(myContext)
  const { mode } = context
  return (
    <div className="flex justify-evenly item-center">
      <div className="leftArrow pt-[18%] cursor-pointer" style={{
              backgroundColor: mode === "dark" ? "#282c34" : "",
              color: mode === "dark" ? "white" : "",
            }} onClick={prevSlide}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 font-bold"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </div>
      <div className="image pr-5 pl-5">
        {images.map(
          (items, index) =>
            current === index && (
              <div className="flex justify-center">
                <img className="w-[100%]" key={index} src={items} alt="img" />
              </div>
            )
        )}
      </div>
      <div className="rightArrow pt-[18%] cursor-pointer" style={{
              backgroundColor: mode === "dark" ? "#282c34" : "",
              color: mode === "dark" ? "white" : "",
            }} onClick={nextSlide}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-16"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </div>
  );
};
export default HeroSection;
