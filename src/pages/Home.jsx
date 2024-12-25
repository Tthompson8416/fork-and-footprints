import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css"; // Base Swiper styles
import "swiper/css/pagination"; // Pagination styles
import backgroundImage from "../assets/images/homepage-background.jpg";
import backgroundImage2 from "../assets/images/spice-bowl.jpg";
import backgroundImage3 from "../assets/images/worldmap-food.jpg";
import forkImage from "../assets/images/fork.png";
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

        {/* Slide 2: Custom Design for Slide 2 */}
        <SwiperSlide>
          {/* Slide Background */}
          <div
            className="h-screen w-screen bg-cover bg-center relative text-white font-serif"
            style={{
              backgroundImage: `url(${backgroundImage2})`, // Update path
            }}
          >
            {/* Fork Icon */}
            <div
              className={`absolute top-3 right-2 3xl:mr-12 bg-custom-accent p-4 sm:mr-3 rounded-full z-10 transition-all duration-500 ${
                isForkVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
              }`}
            >
              <img
                src={forkImage} // Fork icon
                alt="Fork Icon"
                className="h-6 w-6 sm:h-12 sm:w-12 xl:w-16 xl:h-16 3xl:w-24 3xl:h-24"
              />
            </div>

            {/* Transparent Rectangle */}
            <div className="absolute max-w-[80%] w-[900px] h-[320px] md:max-w-[60%] 3xl:h-[350px] top-72 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 border-4 border-gray-200 text-center rounded-lg xs:text-blue-700 sm:text-red-700 md:text-gray-600 lg:text-yellow-500 xl:text-green-600 2xl:text-pink-400 3xl:text-purple-900">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl 3xl:text-5xl uppercase tracking-wider mt-8">
                Explore Recipes
              </h2>
              <p className="text-xl sm:text-2xl lg:text-3xl 3xl:text-4xl mt-8 md:mt-12 px-10 pb-12 xs:pb-8 leading-relaxed">
                A collection of recipes inspired from the places I have visited.
              </p>
              {/* Button */}
              <Link to="/recipes">
                <button
                  onClick={() => console.log("Navigate to recipes page")}
                  className="w-[130px] h-[50px] xs:h-[40px] lg:w-[150px] 3xl:w-[170px] 3xl:h-[60px] lg:text-lg 3xl:text-xl sm:mt-4 lg:mt-8 lg:pb-8 3xl:pb-2 px-2 py-2 mt-[-10px] bg-custom-accent text-white text-sm rounded-lg border-2 border-white hover:bg-opacity-90 whitespace-nowrap"
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
