import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import Navbar from './Navbar';

function Layout({ children }) {
  const location = useLocation();

  // Define routes where background should be removed
  const noBackgroundRoutes = ['/recipes', '/worldmap'];
  const hasNoBackground = noBackgroundRoutes.includes(location.pathname);

  return (
    <div
      className={`relative flex flex-col min-h-screen font-sans m-0 p-0 ${
        hasNoBackground ? '' : 'bg-white'
      }`}
    >
      {/* Navbar at the top */}
      <Navbar className="absolute top-0 left-0 w-full z-50" />

      {/* Main content area */}
      <main className="flex-grow">{children}</main>

      {/* Footer at the bottom */}
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
