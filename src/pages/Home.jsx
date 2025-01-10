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
  const [isForkVisible, setIsForkVisible] = useState(false); // Fork visibility state
  const [isFootprintVisible, setIsFootprintVisible] = useState(false); // Footprint visibility state
  const [activeSlide, setActiveSlide] = useState(0); // Track the active slide

  // Control the quote visibility
  useEffect(() => {
    const quoteTimer = setTimeout(() => {
      setIsQuoteVisible(true);
    }, 1200);

    return () => clearTimeout(quoteTimer);
  }, []);

  // Handle slide change to trigger fork and footprint visibility
  const handleSlideChange = (swiper) => {
    const currentSlide = swiper.realIndex;
    setActiveSlide(currentSlide);

    clearTimeout(window.iconVisibilityTimer);

    if (currentSlide === 1) {
      window.iconVisibilityTimer = setTimeout(() => {
        setIsForkVisible(true);
      }, 1000);
    } else if (currentSlide === 2) {
      window.iconVisibilityTimer = setTimeout(() => {
        setIsFootprintVisible(true);
      }, 1000);
    } else {
      setIsForkVisible(false); // Hide fork if not on slide 2
      setIsFootprintVisible(false); // Hide footprint if not on slide 3
    }
  };

  return (
    <div className="h-screen w-screen overflow-hidden">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        className="h-full w-full"
        slidesPerView={1}
        loop={true}
        onSlideChange={handleSlideChange}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="h-full w-full bg-cover bg-center text-white relative font-serif"
            style={{
              backgroundImage: `url(${backgroundImage})`,
            }}
          >
            <div className="absolute max-w-[85%] w-[900px] h-[350px] xl:h-[400px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 border-4 border-gray-200 text-center rounded-lg">
              <h1 className="relative mt-8 mb-6 md:mt-12 md:mb-8 xl:mb-16 text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl uppercase tracking-wider">
                Fork & Footprints
              </h1>
              <p className="w-screen pr-24 pl-6 sm:pr-32 sm:pl-4 md:pl-2 md:pr-40 lg:ml-28 lg:w-[850px] text-md sm:text-xl md:text-2xl xl:text-3xl leading-relaxed">
                From sun-drenched Mediterranean markets to cozy Alpine kitchens,
                every meal tells a story of place and tradition. Join me as I share the
                hidden gems and mouthwatering discoveries that make each
                destination uniquely delicious.
              </p>
            </div>
            <div
              className={`absolute bottom-10 right-15 ml-12 mb-8 text-lg sm:text-xl md:text-2xl xl:text-3xl italic opacity-80 transition-transform duration-700 ease-in-out ${
                isQuoteVisible ? "translate-x-0" : "translate-x-[450%]"
              }`}
            >
              <p>
              “Life is short, and the world is wide. The sooner you start exploring it, the better”
                <br />– Simon Raven
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="h-full w-full bg-cover bg-center bg-no-repeat relative text-white font-serif"
            style={{
              backgroundImage: `url(${backgroundImage2})`,
            }}
          >
            <div
              className={`absolute top-24 right-10 xl:right-24 bg-custom-accent p-4 rounded-full z-10 transition-all duration-500 ${
                isForkVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
              }`}
            >
              <img
                src={forkImage}
                alt="Fork Icon"
                className="h-12 w-12 md:h-16 md:w-16 2xl:h-20 2xl:w-20"
              />
            </div>
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 px-8">
              <h2 className="text-3xl sm:text-4xl uppercase tracking-wider text-center">
                Explore Recipes
              </h2>
              <p className="text-lg sm:text-xl mt-6 text-center leading-relaxed max-w-3xl">
                A collection of recipes inspired by the places I have traveled.
              </p>
              <Link to="/recipes">
                <button className="px-4 py-2 bg-custom-accent mt-8 text-white text-lg font-medium rounded-lg hover:bg-opacity-80 transition-all duration-300">
                  Explore Recipes
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div
            className="h-full w-full bg-cover bg-center relative text-white font-serif"
            style={{
              backgroundImage: `url(${backgroundImage3})`,
            }}
          >
            <div
              className={`absolute top-24 right-10 xl:right-24 bg-custom-accent p-4 rounded-full z-10 transition-all duration-500 ${
                isFootprintVisible
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-50"
              }`}
            >
              <img
                src={footImage}
                alt="Footprint Icon"
                className="h-12 w-12 md:h-16 md:w-16 2xl:h-20 2xl:w-20"
              />
            </div>
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 px-4 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-wide">
                Discover Global Cuisine
              </h2>
              <p className="mt-4 text-lg sm:text-xl max-w-3xl leading-relaxed">
                Immerse yourself in the culture behind the world’s finest dishes.
              </p>
              <Link to="/worldmap">
                <button className="mt-8 px-6 py-3 ml-6 tracking-wider bg-custom-accent text-white text-lg rounded-md hover:bg-opacity-90">
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
