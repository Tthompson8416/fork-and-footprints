import backgroundImage from "../assets/images/homepage-background.jpg";

const Home = () => {
  return (
    <div
      className="h-screen mr-20 right-8 w-screen bg-cover bg-center text-white relative font-sans overflow-hidden pl-55"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Transparent Rectangle */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 border-4 border-gray-200 p-10 text-center rounded-lg max-w-[80%] w-[900px] h-[300px]">
        <h1 className="text-4xl font-bold uppercase tracking-wider mb-4">Fork & Footprints</h1>
        <p className="text-2xl leading-relaxed">
          Explore the world, one bite at a time.
          <br />
          Come join me on my culinary journey across Europe.
        </p>
      </div>

      {/* Quote in the Bottom Right */}
      <div className="absolute bottom-5 right-5 text-xl italic opacity-80">
        <p>
          {"Travel far, taste deeply, and embrace every moment."} - Travis Scott
        </p>
      </div>
    </div>
  );
};

export default Home;
