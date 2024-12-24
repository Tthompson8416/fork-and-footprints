import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css"; // Base Swiper styles
import "swiper/css/pagination"; // Pagination styles
import backgroundImage from "../assets/images/homepage-background.jpg"; // First slide's background
import backgroundImage2 from "../assets/images/spice-bowl.jpg";
import forkImage from "../assets/images/fork.png"; // Fork icon for the second slide

const Home = () => {
  const [isQuoteVisible, setIsQuoteVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsQuoteVisible(true);
    }, 500);

    return () => clearTimeout(timer);
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
            className="h-screen xs:h-[800px] xs:mb-48 mr-20 w-screen bg-cover bg-center text-white relative font-serif"
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
              className={`absolute bottom-10 right-0 w-[600px] left-36 text-xl xs:p-12 xs:mb-16 xs:w-[400px] xs:text-md sm:w-[450px] sm:p-12 md:w-[570px] md:text-1xl md:p-12 lg:w-[600px] xl:text-2xl 3xl:text-3xl 3xl:mb-36 xl:w-[710px] 3xl:w-[900px] font-thin italic opacity-80 transition-transform duration-700 ${
                isQuoteVisible ? "translate-x-0 xs:translate-x-[-35%] sm:translate-x-[20%] md:translate-x-[30%] lg:translate-x-[55%] xl:translate-x-[65%] 2xl:translate-x-[100%] 3xl:translate-x-[130%]" : "translate-x-[450%]"
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
              className="absolute top-3 right-2 bg-custom-accent p-4 rounded-full z-10 animate-pop-in"
              style={{ animationDelay: "1s" }}
            >
              <img
                src={forkImage} // Fork icon
                alt="Fork Icon"
                className="h-6 w-6"
              />
            </div>

            {/* Transparent Rectangle */}
            <div className="absolute max-w-[80%] w-[900px] h-[300px] top-72 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 border-4 border-gray-200 text-center rounded-lg xs:text-blue-700 sm:text-red-700 md:text-gray-600 lg:text-yellow-500 xl:text-green-600 2xl:text-pink-400 3xl:text-purple-900">
              <h2 className="xs:text-3xl uppercase tracking-wider mt-8">
                Explore Recipes
              </h2>
              <p className="text-2xl mt-8 px-10 pb-5 leading-relaxed">
                A collection of recipes inspired from the places I have visited.
              </p>
              {/* Button */}
              <button
                onClick={() => console.log("Navigate to recipes page")} // Update navigation logic
                className="xs:w-[130px] xs:h-[50px] px-2 py-2 mt-[-10px] bg-custom-accent text-white rounded-lg border-2 border-white hover:bg-opacity-90 whitespace-nowrap"
              >
                Explore Recipes
              </button>
            </div>
            {/* Quote in the Bottom Right 
            <div className="absolute bottom-24 right-0 pl-4 pr-4 mb-12 ml-60">
              <p className="text-white text-xl sm:text-green-400 pr-12 xl:pl-48 xl:ml-96 lg:ml-48 md:text-2xl md:ml-12 md:pl-24 2xl:text-3xl 2xl:pr-48 font-thin italic">
                {
                  "Travel far, taste deeply, and embrace every moment. Let us find more things to put here tomorrow after lunch."
                }
                <br />- Travis Scott
              </p>
            </div> */}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;
