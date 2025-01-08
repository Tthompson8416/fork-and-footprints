import belgianWaffle from "../assets/images/belgium-images/belgian-waffle.jpg";

const Recipe1 = () => {
  return (
    <div className="bg-custom-cream px-8 py-12 md:py-48 flex justify-center">
      <div className="bg-white rounded-lg md:py-24 shadow-lg top-12 w-full max-w-[95%] sm:max-w-4xl lg:max-w-5xl relative p-8">
        {/* Two-column grid for image and ingredients */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
          {/* Left column - Image section */}
          <div className="relative flex justify-center sm:block">
            <div className="hidden sm:block absolute left-0 w-24 lg:w-24 h-[400px] bg-custom-accent/60 z-0" />
            <div className="relative w-[80%] sm:w-full sm:ml-12">
              <img
                src={belgianWaffle}
                alt="Belgian Waffles"
                className="rounded-lg shadow-md mt-8 w-full h-[200px] sm:h-[330px] object-cover z-10"
              />
              <p className="text-xs text-center sm:text-sm 2xl:text-lg text-gray-500 italic sm:text-right mt-2 relative">
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
          <div className="space-y-8">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-serif mb-2 md:ml-16 lg:ml-24 2xl:ml-20 text-red-500 sm:text-yellow-500 md:text-blue-700 lg:text-gray-600 xl:text-purple-700 2xl:text-green-700 3xl:text-orange-700">
                Belgian Waffles
              </h1>
              <p className="text-sm sm:text-base md:ml-12 lg:ml-24 2xl:text-lg text-gray-600 italic">
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
              <h2 className="text-xl sm:text-2xl 2xl:text-4xl font-serif text-gray-800 mb-3 2xl:mb-4 pl-12">
                Ingredients
              </h2>
              <ul className="space-y-2 text-sm sm:text-base lg:text-lg 2xl:text-2xl text-gray-700 pl-12">
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
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl sm:text-2xl 2xl:text-4xl font-serif text-gray-800 mb-6 text-center">
            Preparation
          </h2>
          <div className="space-y-4 text-sm sm:text-base lg:text-lg 2xl:text-2xl text-gray-700">
            <p>
              This Belgian waffle recipe has been adapted from my Krups Waffle
              Maker manual, which I've modified over countless weekend brunches to
              create the perfect golden, crispy waffle. I've discovered that the
              key to exceptional Belgian waffles lies in the technique rather than
              fancy ingredients.
            </p>
            <p>
              Starting with room temperature ingredients makes a noticeable
              difference in the texture. The real magic happens when you whip
              those egg whites to stiff peaks- this extra step creates that
              characteristic light, airy interior that Belgian waffles are famous
              for. Through much trial and error, I've found that letting the
              waffle maker preheat thoroughly is crucial- I usually give it an
              extra minute or two after the 'ready' light comes on.
            </p>
            <p>
              For the crispiest exterior, I actually let them cook just a few
              seconds longer than when the signal sounds. Don't worry if the first
              waffle isn't perfect- like pancakes, the first one is often the
              test run!
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="hidden sm:block absolute top-48 2xl:top-72 right-0 w-16 lg:w-24 h-16 lg:h-20 bg-custom-accent/60" />
        <div className="hidden sm:block absolute bottom-0 right-0 w-16 lg:w-24 h-24 bg-sage-green/20 rounded-br-lg" />
      </div>
    </div>
  );
};

export default Recipe1;