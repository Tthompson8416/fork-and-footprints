import { Link } from 'react-router-dom';


const CountryCard = ({ name, image, pageLink, aosAnimation }) => {

  const handlebuttonClick = () => {
    const url = `/recipes/country#${name.toLowerCase()}`;
    window.open(url, "_blank");
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 pb-12 mb-12 max-w-[clamp(280px, 90%, 350px)] mx-auto"
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
      
      <button
        className="mt-8 px-[clamp(0.5rem, 1.5vw, 1rem)] py-[clamp(0.3rem, 1vw, 0.5rem)] py-[1rem] px-[2rem] bg-blue-400 text-white text-xl xl:text-2xl rounded hover:bg-blue-600 mx-auto block"
        onClick={handlebuttonClick}
      >
        Learn More
      </button>
    </div>
  );
};

export default CountryCard;
