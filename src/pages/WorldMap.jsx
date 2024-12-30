import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css"; // Base Swiper styles
import "swiper/css/pagination"; // Pagination styles
import HeroImage3 from "../assets/images/wm-placeholder.png";
import { Link } from "react-router-dom";

function WorldMap() {
  return (
    
    <div>
      <h2 className="text-3xl font-bold mb-4">Explore the World Map</h2>
      <img 
      src={HeroImage3}
      alt="World Map"
      className="rounded-lg w-screen h-screen object-contain" 
      />
    </div>
  );
}
  
export default WorldMap;