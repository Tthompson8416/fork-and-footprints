import React from "react";

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

  return (
    <div className="bg-white min-h-screen">
      {countries.map((country, index) => (
        <div key={index} className="py-16 px-8">
          <h2 className="text-2xl font-bold text-black text-center">
            {country}
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
