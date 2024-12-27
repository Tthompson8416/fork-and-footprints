import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css"; // Base Swiper styles
import "swiper/css/pagination"; // Pagination styles
import { Link } from "react-router-dom";
import { countries } from "./recipe-cards";
import CountryCard from "./recipe-card-container";
import HeroImage1 from "../assets/images/recipes-hero.png";

const RecipeCollection = () => {
  return (
    <div className="bg-green-100 min-h-screen w-full overflow-hidden p-0">
      <div>
        <img
          src={HeroImage1}
          alt="recipes-text-on-cutting-board"
          className="relative left-0 w-full h-[550px] object-contain
          xs:h-[300px] 3xl:object-cover"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-0 3xl:mt-36 mb-24 p-4">
        {countries.map((country) => (
          <CountryCard
            key={country.id}
            name={country.name}
            image={country.image}
            pageLink={country.pageLink}
          />
        ))}
      </div>
    </div>
  );
};

export default RecipeCollection;
