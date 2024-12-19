import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav className="bg-custom-accent text-white text-3xl fixed top-0 left-0 w-full z-10 p-4 flex items-center" style={{ height: "60px" }}>
      <div className="w-full flex items-center justify-between">
        {/* Left side */}
        <h1 className="text-3xl pl-10">Fork & Footprints</h1>

        {/* Center logo 
        <div className="flex justify-center items-center mt-56">
          <img
            src={logo}
            alt="Fork & Footprints Logo"
            className="mx-auto"
            style={{
              height: "100%", // Control logo height explicitly
              width: "30%",  // Maintain aspect ratio
              maxHeight: "100%", // Prevent overflow within the navbar
            }}
          />
        </div> */}

        {/* Right side */}
        <ul className="flex gap-10 pr-10 font-thin">
          <li>
            <Link to="/" className="hover:text-yellow-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/worldmap" className="hover:text-yellow-300">
              World Map
            </Link>
          </li>
          <li>
            <Link to="/recipes" className="hover:text-yellow-300">
              Recipes
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
