import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css"; // Base Swiper styles
import "swiper/css/pagination"; // Pagination styles
import HeroImage2 from "../assets/images/globe.jpg";
import { Link } from "react-router-dom";

function WorldMap() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Explore the World Map</h2>
      <p className="text-lg mb-4">Click on a country to discover its culinary traditions, unique recipes, and travel stories.
      </p>
      <img 
      src={HeroImage2}
      alt="World Map"
      className="rounded-lg w-screen h-screen " 
      />
    </div>
  );
}
  
export default WorldMap;