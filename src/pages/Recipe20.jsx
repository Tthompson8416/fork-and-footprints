import capreseSalad from "../assets/images/italy-images/caprese.png";

const Recipe20 = () => {
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
                src={capreseSalad}
                alt="Caprese Salad"
                className="w-full h-[200px] sm:h-[330px] object-cover rounded-lg shadow-md mt-8 z-10"
              />
            </div>
          </div>

          {/* Right column - Title and Ingredients */}
          <div className="relative z-10 space-y-8">
            <div className="text-center sm:text-left">
              <h1 className="mb-2 text-2xl text-center font-serif text-custom-accent sm:text-2xl lg:text-4xl 2xl:text-5xl sm:ml-12 lg:ml-24 2xl:ml-20">
                Caprese Salad
              </h1>
              <p className="text-sm text-center italic text-gray-600 sm:text-md sm:ml-12 lg:ml-24 2xl:text-lg">
                Original recipe from{" "}
                <a
                  href="https://www.thekitchn.com/caprese-salad-260312"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  thekitchn.com
                </a>
              </p>
            </div>

            <div>
              <h2 className="pl-20 mb-3 text-xl font-serif text-gray-800 sm:text-2xl 2xl:text-4xl 2xl:mb-4">
                Ingredients
              </h2>
              <ul className="pl-20 list-disc space-y-2 text-sm text-gray-700 sm:text-base lg:text-lg 2xl:text-2xl z-10">
                <li>
                  3 to 4 medium ripe tomatoes (about 1 1/2 pounds), sliced
                  1/4-inch thick
                </li>
                <li>
                  1 pound fresh mozzarella cheese, sliced into 1/4-inch-thick
                  rounds
                </li>
                <li>1/2 cup packed fresh basil leaves</li>
                <li>Flaky sea salt</li>
                <li>Freshly ground black pepper</li>
                <li>2 tablespoons extra-virgin olive oil</li>
                <li>2 tablespoons balsamic glaze</li>
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
              This bright Mediterranean starter celebrates the pure flavors of
              peak-season ingredients. The presentation is as important as the
              components.
            </p>
            <p>
              The key is creating an eye-catching pattern that alternates the
              white mozzarella with vibrant tomatoes. Use room-temperature
              ingredients - cold mutes their flavors. The flaky salt and fresh
              cracked pepper should be added just before serving.
            </p>
            <p>
              A tip from my kitchen: Choose tomatoes and mozzarella of similar
              thickness for the most appealing presentation. For the best
              flavor, use high-quality extra-virgin olive oil and aged balsamic
              glaze.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe20;
