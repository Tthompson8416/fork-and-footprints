import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
}, []);


  return (
    <nav 
    className={`bg-custom-accent text-white text-3xl fixed top-0 left-0 w-full z-10 p-4 mt-0 flex items-center transition-transform duration-700 ${
    isVisible ? "translate-y-0" : "-translate-y-full"
  }`}
    style={{ height: "70px" }}
    >
      <div className="w-full flex items-center justify-between">
        {/* Left side */}
        <h1 className="text-3xl pl-10">Fork & Footprints</h1>

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
