import belgianWaffle from "../assets/images/belgium-images/belgian-waffle.jpg";

const Recipe1 = () => {
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
                src={belgianWaffle}
                alt="Belgian Waffles"
                className="w-full h-[200px] sm:h-[330px] object-cover rounded-lg shadow-md mt-8 z-10"
              />
              <p className="relative mt-2 text-xs text-center text-gray-500 sm:text-sm 2xl:text-lg sm:text-right italic">
                Image credit -{" "}
                <a
                  href="https://www.shopify.com/stock-photos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Burst
                </a>
              </p>
            </div>
          </div>

          {/* Right column - Title and Ingredients */}
          <div className="relative z-10 space-y-8">
            <div className="text-center sm:text-left">
              <h1 className="mb-2 text-2xl text-center font-serif text-red-500 sm:text-2xl lg:text-4xl 2xl:text-5xl sm:ml-12 lg:ml-24 2xl:ml-20 sm:text-yellow-500 md:text-blue-700 lg:text-gray-600 xl:text-purple-700 2xl:text-green-700 3xl:text-orange-700">
                Belgian Waffles
              </h1>
              <p className="text-sm text-center italic text-gray-600 sm:text-md sm:ml-12 lg:ml-24 2xl:text-lg">
                Original recipe from{" "}
                <a
                  href="https://www.krupsusa.com/Recipes/Classic-Belgian-Waffles/r/239758"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  krupusa.com
                </a>
              </p>
            </div>

            <div>
              <h2 className="pl-20 mb-3 text-xl font-serif text-gray-800 sm:text-2xl 2xl:text-4xl 2xl:mb-4">
                Ingredients
              </h2>
              <ul className="pl-20 list-disc space-y-2 text-sm text-gray-700 sm:text-base lg:text-lg 2xl:text-2xl z-10">
                <li>2 cups all-purpose flour</li>
                <li>2 tablespoons sugar</li>
                <li>4 teaspoons baking powder</li>
                <li>1/2 teaspoon salt</li>
                <li>2 cups milk</li>
                <li>1/2 cup butter, melted, cooled</li>
                <li>3 eggs, separated</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Full-width Preparation section */}
        <div className="max-w-3xl px-4 mx-auto">
          <h2 className="mb-6 text-xl font-serif text-center text-gray-800 sm:text-2xl 2xl:text-4xl">
            Preparation
          </h2>
          <div className="space-y-4 text-sm text-gray-700 sm:text-base lg:text-lg 2xl:text-2xl">
            <p>
              This Belgian waffle recipe has been adapted from my Krups Waffle
              Maker manual, which I've modified over countless weekend brunches
              to create the perfect golden, crispy waffle. I've discovered that
              the key to exceptional Belgian waffles lies in the technique
              rather than fancy ingredients.
            </p>
            <p>
              Starting with room temperature ingredients makes a noticeable
              difference in the texture. The real magic happens when you whip
              those egg whites to stiff peaks- this extra step creates that
              characteristic light, airy interior that Belgian waffles are
              famous for. Through much trial and error, I've found that letting
              the waffle maker preheat thoroughly is crucial- I usually give it
              an extra minute or two after the 'ready' light comes on.
            </p>
            <p>
              For the crispiest exterior, I actually let them cook just a few
              seconds longer than when the signal sounds. Don't worry if the
              first waffle isn't perfect- like pancakes, the first one is often
              the test run!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe1;
