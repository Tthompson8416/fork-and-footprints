import backgroundImage from "../assets/images/homepage-background.jpg";
import logo from "../assets/images/logo.png"; // Adjust the path to your logo file


const Home = () => {
  return (
    <div
      className="h-screen mr-20 right-8 w-screen bg-cover bg-center text-white relative font-serif"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Transparent Rectangle */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 border-4 border-gray-200 mb-8 text-center rounded-lg max-w-[80%] w-[900px] h-[500px]">

      {/* Center logo */}
      <div className="flex justify-center items-center pb-2">
          <img
            src={logo}
            alt="Fork & Footprints Logo"
            className="mx-auto mb-2"
            style={{
              height: "100%", // Control logo height explicitly
              width: "28%",  // Maintain aspect ratio
              maxHeight: "100%", // Prevent overflow within the navbar
            }}
          />
        </div> 
        <h1 className="text-5xl font uppercase tracking-wider mb-4">Fork & Footprints</h1>
        <p className="text-3xl font-thin pt-5 leading-relaxed">
          Explore the world, one bite at a time.
          <br />
          Come join me on my culinary journey across Europe.
        </p>
      </div>

      {/* Quote in the Bottom Right */}
      <div className="absolute bottom-10 right-5 pr-20 pb-20 w-[700px] text-3xl font-thin italic opacity-80">
        <p>
          {"Travel far, taste deeply, and embrace every moment.Let us find more things to put here tomorrow after lunch."}<br/> - Travis Scott
        </p>
      </div>
    </div>
  );
};

export default Home;
