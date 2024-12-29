import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const RecipesPage = () => {
  const countries = [
    { id: 1, name: "Belgium" },
    { id: 2, name: "Belize" },
    { id: 3, name: "Canada" },
    { id: 4, name: "Croatia" },
    { id: 5, name: "France" },
    { id: 6, name: "Germany" },
    { id: 7, name: "Italy" },
    { id: 8, name: "Mexico" },
    { id: 9, name: "Netherlands" },
    { id: 10, name: "Portugal" },
    { id: 11, name: "Spain" },
  ];

  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace("#", ""); // Remove the # from the hash
    if (hash) {
      const section = document.getElementById(hash); // Get the section by ID
      if (section) {
        section.scrollIntoView({ behavior: "smooth" }); // Scroll to the section
      }
    }
  }, [location]);

  return (
    <div className="bg-white min-h-screen">
      {countries.map((country, index) => (
        <div
          key={country.id}
          id={country.name.toLowerCase()} // Set the ID to the lowercase country name
          className="py-16 px-8"
        >
          <h2 className="text-2xl font-bold text-black text-center">
            {country.name}
          </h2>
          {index < countries.length - 1 && (
            <div className="border-t border-gray-300 my-8"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default RecipesPage;
