import churros from "../assets/images/spain-images/churros.jpg";

const Recipe31 = () => {
  return (
    <div className="flex justify-center bg-custom-cream px-8 py-12 md:py-16">
      <div className="relative w-full max-w-[95%] sm:max-w-4xl lg:max-w-5xl bg-white rounded-lg shadow-lg p-8 md:py-16 top-8">
        {/* Two-column grid for image and ingredients */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
          {/* Left column - Image section */}
          <div className="relative flex justify-center sm:block">
            <div className="absolute left-0 hidden w-24 h-[400px] bg-custom-accent/60 sm:block z-0" />
            <div className="relative w-[80%] sm:w-full sm:ml-12">
              <img
                src={churros}
                alt="Churros"
                className="w-full h-[200px] sm:h-[330px] object-cover rounded-lg shadow-md mt-8 z-10"
              />
              <p className="relative mt-2 text-xs text-center text-gray-500 sm:text-sm 2xl:text-lg sm:text-right italic">
                Image credit -{" "}
                <a
                  href="https://www.pexels.com/photo/churros-with-powdered-sugar-372851/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Pixabay
                </a>
              </p>
            </div>
          </div>

          {/* Right column - Title and Ingredients */}
          <div className="relative z-10 space-y-8">
            <div className="text-center sm:text-left">
              <h1 className="mb-2 text-2xl text-center font-serif text-custom-accent sm:text-2xl lg:text-4xl 2xl:text-5xl sm:ml-12 lg:ml-24 2xl:ml-20">
                Churros{" "}
              </h1>
              <p className="text-sm text-center italic text-gray-600 sm:text-md sm:ml-12 lg:ml-24 2xl:text-lg">
                Original recipe from{" "}
                <a
                  href="https://www.lamoraromagnola.it/en/2018/02/spanish-churros.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  gastroportugal.com
                </a>
              </p>
            </div>

            <div>
              <h2 className="pl-20 mb-3 text-xl font-serif text-gray-800 sm:text-2xl 2xl:text-4xl 2xl:mb-4">
                Ingredients
              </h2>
              <ul className="pl-20 list-disc space-y-2 text-sm text-gray-700 sm:text-base lg:text-lg 2xl:text-2xl z-10">
                <li>9 oz all purpose flour</li>
                <li>9 oz water</li>
                <li>1/2 lemon, zest only, in a single piece</li>
                <li>1/2 tsp kosher salt</li>
                <li>caster sugar for sprinkling</li>
                <li>frying oil</li>
                <li>hot chocolate or hot coffee for serving</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-3xl px-4 mx-auto">
          <h2 className="mb-6 text-xl font-serif text-center text-gray-800 sm:text-2xl 2xl:text-4xl">
            Preparation
          </h2>
          <div className="space-y-4 text-sm text-gray-700 sm:text-base lg:text-lg 2xl:text-2xl">
            <p>
              These iconic Spanish pastries achieve their signature crispy
              exterior and tender center through a simple but precise cooking
              process. The texture of the dough is crucial.
            </p>
            <p>
              The initial resting period allows the flour to fully hydrate,
              while the lemon zest adds a subtle brightness that balances the
              sweetness. Piping directly into hot oil might seem daunting, but
              it's actually the most traditional and efficient method.
            </p>
            <p>
              A tip from my kitchen: The oil temperature is critical - too hot
              and the exterior browns before the inside cooks; too cool and
              they'll become greasy. Aim for 375°F (190°C) and don't overcrowd
              the pan. For the most authentic experience, serve with
              Spanish-style hot chocolate, which is thick enough for dipping.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe31;
