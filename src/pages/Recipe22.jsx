import asadaTacos from "../assets/images/mexico-images/asada-tacos.png";

const Recipe22 = () => {
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
                src={asadaTacos}
                alt="ASADA TACOS"
                className="w-full h-[200px] sm:h-[330px] object-cover rounded-lg shadow-md mt-8 z-10"
              />
              <p className="relative mt-2 text-xs text-center text-gray-500 sm:text-sm 2xl:text-lg sm:text-right italic">
                Image credit -{" "}
                <a
                  href="https://www.pexels.com/photo/sliced-beef-steak-and-green-vegetable-on-top-of-tortilla-7613555/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Los Muertos Crew on Pexels{" "}
                </a>
              </p>
            </div>
          </div>

          {/* Right column - Title and Ingredients */}
          <div className="relative z-10 space-y-8">
            <div className="text-center sm:text-left">
              <h1 className="mb-2 text-2xl text-center font-serif text-custom-accent sm:text-2xl lg:text-4xl 2xl:text-5xl sm:ml-12 lg:ml-24 2xl:ml-20">
                ASADA TACOS (Street Tacos)
              </h1>
              <p className="text-sm text-center italic text-gray-600 sm:text-md sm:ml-12 lg:ml-24 2xl:text-lg">
                Original recipe from{" "}
                <a
                  href="https://asimplepantry.com/wprm_print/carne-asada-mexican-street-tacos-recipe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  asimplepantry.com
                </a>
              </p>
            </div>

            <div>
              <h2 className="pl-20 mb-3 text-xl font-serif text-gray-800 sm:text-2xl 2xl:text-4xl 2xl:mb-4">
                Ingredients
              </h2>
              <ul className="pl-20 list-disc space-y-2 text-sm text-gray-700 sm:text-base lg:text-lg 2xl:text-2xl z-10">
                <li>2 lbs carne asada*</li>
                <li>1 tablespoon cumin</li>
                <li>1 tablespoon kosher salt</li>
                <li>2 teaspoon garlic powder</li>
                <li>1 teaspoon cracked pepper</li>
                <li>3 tablespoons canola oil</li>
                <li>1 serrano pepper sliced</li>
                <li>½ roma tomato diced</li>
                <li>½ white onion finely diced</li>
                <li>6-8 oz. dos equis beer</li>
                <li>32 street taco tortillas</li>
                <li>½ cup white onion diced, for garnish</li>
                <li>½ cup cilantro roughly chopped, for garnish</li>
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
              These Mexican street-style tacos showcase perfectly seasoned beef
              cooked until tender and caramelized. The marinade process, though
              brief, is essential.
            </p>
            <p>
              The combination of spices, fresh peppers, and beer tenderizes the
              meat while adding depth. Cooking until the liquid evaporates
              allows the meat to develop those coveted crispy edges while
              staying juicy inside.
            </p>
            <p>
              A tip from my kitchen: For the most authentic experience, warm
              your corn tortillas on a hot comal or skillet until they're
              pliable but still sturdy. Keep them wrapped in a clean kitchen
              towel to stay warm. And don't skip the classic onion-cilantro
              topping - this fresh garnish cuts through the rich meat perfectly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe22;
