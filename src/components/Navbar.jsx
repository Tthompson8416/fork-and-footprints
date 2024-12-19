import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-custom-accent text-white text-3xl fixed top-0 left-0 w-full z-10 p-4">
      <div className="w-full flex justify-between items-center">
        <h1 className="text-3xl  pl-10">Fork & Footprints</h1>

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