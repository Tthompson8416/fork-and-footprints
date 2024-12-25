import PropTypes from "prop-types";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="relative h-screen bg-custom-accent text-gray-800 font-sans">
      <Navbar className="absolute top-0 left-0 w-full z-50" />
      <main className="p-8">{children}</main>
      <footer className="p-4 bg-custom-accent text-center text-white xs:text-sm text-xl lg:text-lg 2xl:text-xl whitespace-nowrap">
        <p>&copy; 2024 Fork & Footprints. All rights reserved.</p>
      </footer>
    </div>
  );
}

// Add PropTypes validation
Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
