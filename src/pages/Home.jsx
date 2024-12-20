import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css"; // Base Swiper styles
import "swiper/css/pagination"; // Pagination styles
import backgroundImage from "../assets/images/homepage-background.jpg"; // First slide's background
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
        pagination={{ clickable: true }}
        className="h-screen w-screen right-8 top-8"
        slidesPerView={1}
        loop={true}
      >
        {/* Slide 1: Original Homepage Content */}
        <SwiperSlide>
          <div
            className="h-screen mr-20 right-8 top-8 w-screen bg-cover bg-center text-white relative font-serif"
            style={{
              backgroundImage: `url(${backgroundImage})`,
            }}
          >
            {/* Transparent Rectangle */}
            <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 border-4 border-gray-200 mb-8 text-center rounded-lg max-w-[80%] w-[900px] h-[500px]">
              <h1 className="text-6xl uppercase tracking-wider mt-28">Fork & Footprints</h1>
              <p className="text-3xl font-thin mt-16 pr-12 pl-12 leading-relaxed">
                Explore the world, one bite at a time.
                <br />
                Come join me on my culinary journey across Europe as I show you
                beautiful places and their tasty cuisine.
              </p>
            </div>

            {/* Quote in the Bottom Right */}
            <div
              className={`absolute bottom-10 right-5 pr-20 pb-20 w-[700px] text-3xl font-thin italic opacity-80 transition-transform duration-700 ${
                isQuoteVisible ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <p>
                {"Travel far, taste deeply, and embrace every moment. Let us find more things to put here tomorrow after lunch."}
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
              backgroundImage: `url('/src/assets/images/your-second-slide-image.jpg')`, // Update path
            }}
          >
            {/* Fork Icon */}
            <div
              className="absolute top-10 left-10 bg-custom-accent p-4 rounded-full animate-pop-in"
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
              <h2 className="text-5xl uppercase tracking-wider mt-16">Explore Recipes</h2>
              <p className="text-2xl font-thin mt-10 px-10 leading-relaxed">
                Discover culinary delights from around the world. Click below to
                start your journey.
              </p>
              {/* Button */}
              <button
                onClick={() => console.log("Navigate to recipes page")} // Update navigation logic
                className="mt-8 px-8 py-4 bg-custom-accent text-white rounded-lg border-2 border-white hover:bg-opacity-90"
              >
                Click Here
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;
