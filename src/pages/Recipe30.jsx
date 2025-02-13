import octopusPotatoes from "../assets/images/portugal-images/octopus-potatoes.jpg";

const Recipe30 = () => {
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
                src={octopusPotatoes}
                alt="Polvo á Lagareiro"
                className="w-full h-[200px] sm:h-[330px] object-cover rounded-lg shadow-md mt-8 z-10"
              />
              <p className="relative mt-2 text-xs text-center text-gray-500 sm:text-sm 2xl:text-lg sm:text-right italic">
                Image credit -{" "}
                <a
                  href="https://www.unsplash.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Unsplash
                </a>
              </p>
            </div>
          </div>

          {/* Right column - Title and Ingredients */}
          <div className="relative z-10 space-y-8">
            <div className="text-center sm:text-left">
              <h1 className="mb-2 text-2xl text-center font-serif text-custom-accent sm:text-2xl lg:text-4xl 2xl:text-5xl sm:ml-12 lg:ml-24 2xl:ml-20">
                Polvo á Lagareiro{" "}
              </h1>
              <p className="text-sm text-center italic text-gray-600 sm:text-md sm:ml-12 lg:ml-24 2xl:text-lg">
                Original recipe from{" "}
                <a
                  href="https://gastroportugal.com/polvo-a-lagareiro/"
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
                <li>1 Medium Size Frozen Octopus - Thawed</li>
                <li>8 Garlic Cloves</li>
                <li>2 Small Onions</li>
                <li>1/2 Cup Extra Virgin Olive Oil</li>
                <li>3 Plum Tomatoes - 450g</li>
                <li>900g Baby Potatoes - Skin On</li>
                <li>Fresh Rosemary</li>
                <li>Fresh Thyme</li>
                <li>1 Bay Leaf</li>
                <li>Fresh Parsley</li>
                <li>Fresh Coriander</li>
                <li>Black Pepper</li>
                <li>Salt</li>
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
              This elegant Portuguese octopus dish combines slow-cooked
              tenderness with a final crispy finish. The cooking process, though
              lengthy, is essential for perfect results.
            </p>
            <p>
              The gentle oven-braising with aromatics ensures the octopus
              becomes tender while absorbing the flavors of herbs and
              vegetables. The finale under the grill creates those prized crispy
              edges while maintaining the meat's succulence. The smashed
              potatoes, basted in garlic-infused olive oil, become the perfect
              companion.
            </p>
            <p>
              A tip from my kitchen: When crushing the potatoes, don't
              completely flatten them - you want plenty of craggy edges to catch
              the flavorful oil. Save the strained cooking liquid - it's liquid
              gold for seafood rice dishes or future seafood stocks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe30;
