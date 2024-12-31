import { Link } from "react-router-dom";

const CountryCard = ({ name, image, recipeLinks, aosAnimation }) => {
  return (
    <div
      className="bg-white shadow-lg rounded-lg p-4 pb-12 mb-12 max-w-[clamp(280px, 90%, 350px)] mx-auto"
      data-aos={aosAnimation}
    >
      <img
        src={image}
        alt={name}
        className="w-[clamp(160px, 40vw, 700px)] h-[clamp(160px, 40vw, 600px)] object-contain sm:h-[150px] sm:object-cover sm:w-[300px] md:w-[375px] md:h-[230px] 2xl:w-[540px] 2xl:h-[300px] rounded-t-lg"
      />
      <h1 className="text-[clamp(1rem, 2.5vw, 2.5rem)] font-bold font-serif mt-4 text-center text-custom-accent text-[1.5rem] sm:text-[1.7rem] lg:text-[2rem]">
        {name}
      </h1>

       {/* Map over recipeLinks to create 3 buttons dynamically */}
       {recipeLinks.map((link, index) => (
        <Link
          key={index}
          to={link} // Using Link for navigation
          className="mt-8 fluid-padding fluid-width fluid-height text-center bg-blue-400 sm:bg-red-500 md:bg-yellow-500 lg:bg-purple-500 xl:bg-green-500 2xl:bg-black 3xl:bg-orange-600 text-white text-xl xl:text-2xl rounded hover:bg-blue-600 mx-auto block"
        >
          Recipe {index + 1} {/* Button text */}
        </Link>
      ))}
    </div>
  );
};

export default CountryCard;
