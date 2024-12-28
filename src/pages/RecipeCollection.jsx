import { useState, useEffect } from "react";
import { Pagination } from "swiper/modules";
import "swiper/css"; // Base Swiper styles
import "swiper/css/pagination"; // Pagination styles
import { Link } from "react-router-dom";
import { countries } from "./recipe-cards";
import CountryCard from "./CountryCard";
import HeroImage1 from "../assets/images/recipes-hero.png";

const RecipeCollection = () => {
  return (
    <div className="bg-custom-cream min-h-screen w-full overflow-hidden p-0">
      <img
        src={HeroImage1}
        alt="recipes-text-on-cutting-board"
        className="relative left-0 w-full h-[clamp(300px, 50vw, 550px)] object-contain sm:h-[270px] sm:object-cover sm:mt-8 md:object-cover md:mt-12 lg:mt-16 xl:h-[320px] 2xl:h-[375px] 3xl:h-[550px]"
      />

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
