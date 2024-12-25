import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css"; // Base Swiper styles
import "swiper/css/pagination"; // Pagination styles
import backgroundImage from "../assets/images/homepage-background.jpg";
import backgroundImage2 from "../assets/images/spice-bowl.jpg";
import backgroundImage3 from "../assets/images/worldmap-food.jpg";
import forkImage from "../assets/images/fork.png";
import footImage from "../assets/images/footprints.png";
import { Link } from "react-router-dom";

const Home = () => {
  const [isQuoteVisible, setIsQuoteVisible] = useState(false);
  const [isForkVisible, setIsForkVisible] = useState(false); // New state for fork visibility

  // Control the quote visibility
  useEffect(() => {
    const quoteTimer = setTimeout(() => {
      setIsQuoteVisible(true);
    }, 1200);

    return () => clearTimeout(quoteTimer);
  }, []);

  // Control the fork visibility
  useEffect(() => {
    const forkTimer = setTimeout(() => {
      setIsForkVisible(true);
    }, 2500); // 10-second delay

    return () => clearTimeout(forkTimer);
  }, []);

  return (
    <div className="h-screen w-screen">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }} // Enable pagination
        className="h-screen w-screen right-8 top-8"
        slidesPerView={1}
        loop={true}
      >
        {/* Slide 1: Original Homepage Content */}
        <SwiperSlide>
          <div
            className="h-screen xs:mb-48 mr-20 w-screen bg-cover bg-center text-white relative font-serif"
            style={{
              backgroundImage: `url(${backgroundImage})`,
            }}
          >
            {/* Transparent Rectangle */}
            <div className="absolute max-w-[80%] w-[900px] h-[300px] top-72 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 border-4 border-gray-200 mb-8 text-center rounded-lg 3xl:w-[850px] 3xl:h-[450px] 3xl:mt-36">
              <h1 className="text-3xl text-white xs:text-2xl md:text-4xl 3xl:text-5xl 3xl:mt-0 3xl:pt-24 lg:text-5xl uppercase tracking-wider mt-12">
                Fork & Footprints
              </h1>
              <p className="text-xl xs:text-lg xs:p-0 md:text-3xl lg:text-3xl 2xl:p-2 2xl:pr-12 2xl:pl-12 3xl:text-4xl 3xl:pt-8 font-thin mt-8 pr-12 pl-12 leading-relaxed">
                Explore the world, one bite at a time.
                <br />
                Come join me on my culinary journey across Europe as I show you
                beautiful places and their tasty cuisine.
              </p>
            </div>

            {/* Quote in the Bottom Right */}
            <div
              className={`absolute bottom-10 right-0 w-[600px] left-36 text-xl xs:p-12 xs:mb-16 xs:w-[420px] xs:text-sm sm:w-[550px] sm:p-12 sm:text-lg md:w-[520px] md:text-1xl md:p-12 lg:w-[600px] xl:text-2xl 3xl:text-3xl  xl:w-[710px] 3xl:w-[900px] font-thin italic opacity-80 transition-transform duration-700 ease-in-out ${
                isQuoteVisible
                  ? "translate-x-0 xs:translate-x-[-35%] sm:translate-x-0 md:translate-x-[40%] lg:translate-x-[55%] xl:translate-x-[65%] 2xl:translate-x-[100%] 3xl:translate-x-[95%]"
                  : "translate-x-[450%]"
              }`}
            >
              <p>
                {
                  "Travel far, taste deeply, and embrace every moment. Let us find more things to put here tomorrow after lunch."
                }
                <br />- Travis Scott
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2: Updated Layout with Fork Icon */}
<SwiperSlide>
  <div
    className="h-screen w-screen bg-cover bg-center bg-no-repeat relative text-white font-serif"
    style={{
      backgroundImage: `url(${backgroundImage2})`,
    }}
  >
    {/* Fork Icon */}
    <div
      className={`absolute top-3 right-2 3xl:mr-12 bg-custom-accent p-4 sm:mr-3 rounded-full z-10 transition-all duration-500 ${
        isForkVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
      }`}
    >
      <img
        src={forkImage} // Fork icon
        alt="Fork Icon"
        className="h-6 w-6 sm:h-12 sm:w-12 xl:w-16 xl:h-16 3xl:w-24 3xl:h-24"
      />
    </div>

    {/* Overlay Content */}
    <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 px-8">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl uppercase tracking-wider text-center">
        Explore Recipes
      </h2>
      <p className="text-lg sm:text-xl lg:text-2xl mt-6 text-center leading-relaxed max-w-3xl">
        A collection of recipes inspired from the places I have visited.
      </p>
      {/* Button */}
      <Link to="/recipes">
      <button
  className="px-4 py-2 bg-custom-accent mt-8 text-white text-lg font-medium rounded-lg hover:bg-opacity-80 transition-all duration-300"
>
  Explore Recipes
</button>
      </Link>
    </div>
  </div>
</SwiperSlide>
        {/* Slide 3: Custom Design for Slide 3 */}
        <SwiperSlide>
          <div
            className="h-screen w-screen bg-cover bg-center relative text-white font-serif"
            style={{
              backgroundImage: `url(${backgroundImage3})`,
            }}
          >

             {/* Footprint Icon */}
    <div
      className={`absolute top-3 right-2 3xl:mr-12 bg-custom-accent p-4 sm:mr-3 rounded-full z-10 transition-all duration-500 ${
        isForkVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
      }`}
    >
      <img
        src={footImage} // Footprint icon
        alt="Footprint Icon"
        className="h-6 w-6 sm:h-12 sm:w-12 xl:w-16 xl:h-16 3xl:w-24 3xl:h-24"
      />
    </div>

            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 px-4 text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-wide">
                Discover Global Cuisine
              </h2>
              <p className="mt-4 text-lg sm:text-xl lg:text-2xl max-w-3xl leading-relaxed">
                From street food in Thailand to pasta in Italy, taste the world’s finest dishes and immerse yourself in the culture.
              </p>
              <Link to="/discover">
                <button className="mt-8 px-6 py-3 bg-custom-accent text-white text-lg rounded-md hover:bg-opacity-90">
                  Discover More
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;
