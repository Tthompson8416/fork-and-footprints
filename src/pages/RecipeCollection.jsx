import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css"; // Base Swiper styles
import "swiper/css/pagination"; // Pagination styles
import HeroImage from "../assets/images/recipes-hero.png";
import forkImage from "../assets/images/fork.png";
import { Link } from "react-router-dom";


function RecipeCollection() {
  return (
    <div className="bg-white w-screen h-screen">
      <img src={HeroImage} alt="Hero Image" className="w-full h-auto max-h-[600px] object-contain mb-8 bg-white" />
      <p className="text-lg mb-4">Discover recipes inspired by global cuisines. From Italian pasta to Thai curry, find something to cook and enjoy!</p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Classic French Ratatouille</li>
        <li>Authentic Japanese Ramen</li>
        <li>Spicy Indian Butter Chicken</li>
      </ul>
    </div>
  );
}

export default RecipeCollection;
  