import belgianWaffle from "../assets/images/belgium-images/belgian-waffle.jpg";

const Recipe1 = () => {
  return (
    // Updated padding to be more consistent
    <div className="bg-custom-cream px-8 py-12 flex justify-center">
      {/* Adjusted max-width and padding */}
      <div className="bg-white rounded-lg shadow-lg w-full max-w-[95%] sm:max-w-4xl lg:max-w-5xl relative p-8">
        {/* New grid container for side-by-side layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Left column - Image section */}
          <div className="relative">
            {/* Moved decorative red bar inside image container */}
            <div className="hidden sm:block absolute left-4 w-24 lg:w-24 h-[400px] bg-red-600/80 z-0" />
            
            {/* Updated image styles for new layout */}
            <img
              src={belgianWaffle}
              alt="Belgian Waffles"
              className="relative top-4 rounded-lg shadow-md w-full h-[300px] sm:h-[400px] object-cover z-10"
            />
            
            {/* Moved image credit below image */}
            <p className="text-xs sm:text-sm text-gray-500 italic text-center mt-8">
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

          {/* Right column - Content section */}
          <div className="space-y-8">
            {/* Title and attribution section */}
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl font-serif mb-2 text-red-500 sm:text-yellow-500">
                Belgian Waffles
              </h1>
              <p className="text-sm sm:text-base text-gray-600 italic">
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

            {/* Ingredients section */}
            <div>
              <h2 className="text-xl sm:text-2xl font-serif text-gray-800 mb-3">
                Ingredients
              </h2>
              <ul className="space-y-2 text-sm sm:text-base text-gray-700">
                <li>2 cups all-purpose flour</li>
                <li>2 tablespoons sugar</li>
                <li>4 teaspoons baking powder</li>
                <li>1/2 teaspoon salt</li>
                <li>2 cups milk</li>
                <li>1/2 cup butter, melted, cooled</li>
                <li>3 eggs, separated</li>
              </ul>
            </div>

            {/* Preparation section */}
            <div>
              <h2 className="text-xl sm:text-2xl font-serif text-gray-800 mb-3">
                Preparation
              </h2>
              <div className="space-y-3 text-sm sm:text-base text-gray-700">
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
          </div>
        </div>

        {/* Decorative elements */}
          {/* Decorative red bar */}
          <div className="hidden sm:block absolute top-24 left-4 w-24 lg:w-24 h-[400px] bg-red-600/80 z-0" />
        <div className="hidden sm:block absolute top-24 right-0 w-8 lg:w-12 h-48 bg-custom-accent/60" />
        <div className="hidden sm:block absolute bottom-0 right-0 w-16 lg:w-24 h-24 bg-sage-green/20 rounded-br-lg" />
      </div>
    </div>
  );
};

export default Recipe1;