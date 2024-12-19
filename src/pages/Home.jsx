import { useState, useEffect } from "react";
import backgroundImage from "../assets/images/homepage-background.jpg";

const Home = () => {
  const [isQuoteVisible, setIsQuoteVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
    setIsQuoteVisible(true);
  }, 500);

  return () => clearTimeout(timer);
}, []);

  return (
    <div
      className="h-screen mr-20 right-8 top-8 w-screen bg-cover bg-center text-white relative font-serif"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Transparent Rectangle */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 border-4 border-gray-200 mb-8 text-center rounded-lg max-w-[80%] w-[900px] h-[500px]">

        <h1 className="text-6xl font uppercase tracking-wider mt-28">Fork & Footprints</h1>
        <p className="text-3xl font-thin mt-16 pr-12 pl-12 leading-relaxed">
          Explore the world, one bite at a time.
          <br />
          Come join me on my culinary journey across Europe as I show you beautiful places and their tasty cuisine.
        </p>
      </div>

      {/* Quote in the Bottom Right */}
      <div
        className={`absolute bottom-10 right-5 pr-20 pb-20 w-[700px] text-3xl font-thin italic opacity-80 transition-transform duration-700 ${
          isQuoteVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <p>
          {"Travel far, taste deeply, and embrace every moment.Let us find more things to put here tomorrow after lunch."
          }
          <br />- Travis Scott
        </p>
      </div>
    </div>
  );
};

export default Home;
