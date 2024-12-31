import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import CountryCard from "./CountryCard";
import HeroImage1 from "../assets/images/recipes-hero.png";

import belgiumFlag from '../assets/flags/belgium.svg';
import belizeFlag from '../assets/flags/belize.svg';
import canadaFlag from '../assets/flags/canada.svg';
import croatiaFlag from '../assets/flags/croatia.svg';
import franceFlag from '../assets/flags/france.svg';
import germanyFlag from '../assets/flags/germany.svg';
import italyFlag from '../assets/flags/italy.svg';
import mexicoFlag from '../assets/flags/mexico.svg';
import netherlandsFlag from '../assets/flags/netherlands.svg';
import portugalFlag from '../assets/flags/portugal.svg';
import spainFlag from '../assets/flags/spain.svg';

const RecipeCollection = () => {
  // Updated countries array with pageLink for 3 buttons per country
  const countries = [
    {
      id: 1,
      name: 'Belgium',
      image: belgiumFlag,
      recipeLinks: [
        '/fork-and-footprints/recipes/belgium/recipe1',
        '/fork-and-footprints/recipes/belgium/recipe2',
        '/fork-and-footprints/recipes/belgium/recipe3',
      ],
    },
    {
      id: 2,
      name: 'Belize',
      image: belizeFlag,
      recipeLinks: [
        '/fork-and-footprints/recipes/belize/recipe1',
        '/fork-and-footprints/recipes/belize/recipe2',
        '/fork-and-footprints/recipes/belize/recipe3',
      ],
    },
    {
      id: 3,
      name: 'Canada',
      image: canadaFlag,
      recipeLinks: [
        '/fork-and-footprints/recipes/canada/recipe1',
        '/fork-and-footprints/recipes/canada/recipe2',
        '/fork-and-footprints/recipes/canada/recipe3',
      ],
    },
    {
      id: 4,
      name: 'Croatia',
      image: croatiaFlag,
      recipeLinks: [
        '/fork-and-footprints/recipes/croatia/recipe1',
        '/fork-and-footprints/recipes/croatia/recipe2',
        '/fork-and-footprints/recipes/croatia/recipe3',
      ],
    },
    {
      id: 5,
      name: 'France',
      image: franceFlag,
      recipeLinks: [
        '/fork-and-footprints/recipes/france/recipe1',
        '/fork-and-footprints/recipes/france/recipe2',
        '/fork-and-footprints/recipes/france/recipe3',
      ],
    },
    {
      id: 6,
      name: 'Germany',
      image: germanyFlag,
      recipeLinks: [
        '/fork-and-footprints/recipes/germany/recipe1',
        '/fork-and-footprints/recipes/germany/recipe2',
        '/fork-and-footprints/recipes/germany/recipe3',
      ],
    },
    {
      id: 7,
      name: 'Italy',
      image: italyFlag,
      recipeLinks: [
        '/fork-and-footprints/recipes/italy/recipe1',
        '/fork-and-footprints/recipes/italy/recipe2',
        '/fork-and-footprints/recipes/italy/recipe3',
      ],
    },
    {
      id: 8,
      name: 'Mexico',
      image: mexicoFlag,
      recipeLinks: [
        '/fork-and-footprints/recipes/mexico/recipe1',
        '/fork-and-footprints/recipes/mexico/recipe2',
        '/fork-and-footprints/recipes/mexico/recipe3',
      ],
    },
    {
      id: 9,
      name: 'Netherlands',
      image: netherlandsFlag,
      recipeLinks: [
        '/fork-and-footprints/recipes/netherlands/recipe1',
        '/fork-and-footprints/recipes/netherlands/recipe2',
        '/fork-and-footprints/recipes/netherlands/recipe3',
      ],
    },
    {
      id: 10,
      name: 'Portugal',
      image: portugalFlag,
      recipeLinks: [
        '/fork-and-footprints/recipes/portugal/recipe1',
        '/fork-and-footprints/recipes/portugal/recipe2',
        '/fork-and-footprints/recipes/portugal/recipe3',
      ],
    },
    {
      id: 11,
      name: 'Spain',
      image: spainFlag,
      recipeLinks: [
        '/fork-and-footprints/recipes/spain/recipe1',
        '/fork-and-footprints/recipes/spain/recipe2',
        '/fork-and-footprints/recipes/spain/recipe3',
      ],
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="bg-custom-cream min-h-screen w-full overflow-hidden p-0">
      <img
        src={HeroImage1}
        alt="recipes-text-on-cutting-board"
        className="relative mt-20 left-0 w-full fluid-height-hero object-cover"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-0 3xl:mt-36 mb-24 p-4">
        {countries.map((country) => (
          <CountryCard
            key={country.id}
            name={country.name}
            image={country.image}
            // Pass the recipeLinks array as a prop
            recipeLinks={country.recipeLinks}
            aosAnimation="fade-up"
          />
        ))}
      </div>
    </div>
  );
};

export default RecipeCollection;
