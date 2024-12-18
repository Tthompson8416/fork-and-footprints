import PropTypes from "prop-types";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <Navbar />
      <main className="p-8">{children}</main>
      <footer className="p-4 bg-gray-100 text-center">
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
