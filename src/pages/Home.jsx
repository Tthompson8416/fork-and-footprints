import "../pages/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="content-box">
        <h1 className="app-name">Fork & Footprints</h1>
        <p className="subtitle">Explore the world, one bite at a time.</p>
      </div>

      <div className="quote">
        <p>
          {"Travel far, taste deeply, and embrace every moment."} - Travis Scott
        </p>
      </div>
    </div>
  );
};

export default Home;
