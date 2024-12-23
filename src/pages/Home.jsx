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
            className="h-screen mr-20 w-screen bg-cover bg-center text-white 3xl:text-blue-500 relative font-serif"
            style={{
              backgroundImage: `url(${backgroundImage})`,
            }}
          >
            {/* Transparent Rectangle */}
            <div className="absolute h-[300px] top-72 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 border-4 border-gray-200 mb-8 text-center rounded-lg max-w-[80%] w-[900px] 3xl:w-[1200px] 3xl:h-[650px] 3xl:mt-48">
              <h1 className="text-3xl xs:text-2xl 3xl:text-7xl 3xl:pt-24 lg:text-5xl uppercase tracking-wider mt-12">
                Fork & Footprints
              </h1>
              <p className="text-xl xs:text-lg xs:p-0 md:text-1xl lg:text-3xl 3xl:text-4xl 3xl:pt-24 font-thin mt-8 pr-12 pl-12 leading-relaxed">
                Explore the world, one bite at a time.
                <br />
                Come join me on my culinary journey across Europe as I show you
                beautiful places and their tasty cuisine.
              </p>
            </div>

            {/* Quote in the Bottom Right */}
            <div
              className={`absolute bottom-10 right-0 xs:left-12 xs:pr-48 xs:w-[500px] w-[600px] left-36 text-xl xs:text-md md:text-1xl xl:text-2xl 3xl:text-3xl md:left-96 md:w-[400px] md:pr-2 lg:w-[500px] xl:w-[600px] lg:ml-36 xl:ml-60 3xl:w-[900px] font-thin italic opacity-80 transition-transform duration-700 ${
                isQuoteVisible ? "translate-x-0 3xl:translate-x-[140%]" : "translate-x-[450%]"
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
              className="absolute top-10 left-10 bg-custom-accent p-4 rounded-full z-10 animate-pop-in"
              style={{ animationDelay: "1s" }}
            >
              <img
                src={forkImage} // Fork icon
                alt="Fork Icon"
                className="h-12 w-12"
              />
            </div>

            {/* Transparent Rectangle */}
            <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 border-4 border-gray-200 text-center rounded-lg max-w-[80%] w-[900px] h-[500px]">
              <h2 className="text-4xl uppercase tracking-wider mt-16">
                Explore Recipes
              </h2>
              <p className="text-2xl mt-10 px-10 pb-5 leading-relaxed">
                Embark on a culinary journey through the vibrant flavors I have
                discovered during my wanderlust-filled adventures across distant
                lands. I have gathered a collection of authentic recipes that
                capture the heart and soul of each destination. Let your taste
                buds be your compass as you discover the magic that happens when
                local ingredients meet time-honored techniques.
              </p>
              {/* Button */}
              <button
                onClick={() => console.log("Navigate to recipes page")} // Update navigation logic
                className="mt-8 px-8 py-4 bg-custom-accent text-white rounded-lg border-2 border-white hover:bg-opacity-90"
              >
                Explore Recipes
              </button>
            </div>
            {/* Quote in the Bottom Right */}
            <div className="absolute bottom-24 right-0 pl-4 pr-4 mb-12 ml-60">
              <p className="text-white text-xl sm:text-green-400 pr-12 xl:pl-48 xl:ml-96 lg:ml-48 md:text-2xl md:ml-12 md:pl-24 2xl:text-3xl 2xl:pr-48 font-thin italic">
                {
                  "Travel far, taste deeply, and embrace every moment. Let us find more things to put here tomorrow after lunch."
                }
                <br />- Travis Scott
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;
