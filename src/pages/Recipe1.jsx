const Recipe1 = () => {
  return (
    <div className="bg-green-50 min-h-screen flex flex-col items-center px-6 py-10">
      {/* Header */}
      <h1 className="mt-24 text-5xl font-bold text-green-900 mb-2">
        Belgian Waffles
      </h1>
      <p className="text-3xl text-gray-700 italic mb-6">
        Original recipe from -{" "}
        <a
          href="https://www.krupsusa.com/Recipes/Classic-Belgian-Waffles/r/239758"
          target="_blank"
          className="text-blue-700 underline"
        >
          krupusa.com
        </a>
      </p>

      {/* Content Container */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row w-[275px] h-[600px]">
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src="path-to-crepe-image.jpg"
            alt="Crepes on a plate"
            className="object-cover h-full w-full"
          />
        </div>

        {/* Text Section*/}
        <div className="p-6 md:w-12">
          {/* Ingredients */}
          <h2 className="text-2xl font-semibold text-green-800 mb-4">
            Ingredients
          </h2>
          <ul className="list-disc list inside text-gray-700 mb-6">
            <li>2 cups water</li>
            <li> 2 cups flour</li>
            <li>1 Tbs salt</li>
            <li>1/2 cup milk</li>
          </ul>

          {/* Steps */}
          <h2 className="text-2xl font-semibold text-green-800 mb-4">Steps</h2>
          <ol className="list-decimsl list-inside text-gray-700 space-y-2">
            <li>Add water to a bowl.</li>
            <li>Add flour, salt, and milk.</li>
            <li>Mix well and serve!</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Recipe1;
