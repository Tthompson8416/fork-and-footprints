import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Fork & Footprints</h1>

        <ul className="flex gap-6">
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
