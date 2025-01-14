import dagnj from "../assets/images/croatia-images/dagnj.png";

const Recipe10 = () => {
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
                src={dagnj}
                alt="DAGNJE NA BUZARU"
                className="w-full h-[200px] sm:h-[330px] object-cover rounded-lg shadow-md mt-8 z-10"
              />
              <p className="relative mt-2 text-xs text-center text-gray-500 sm:text-sm 2xl:text-lg sm:text-right italic">
                Image credit -{" "}
                <a
                  href="https://www.pexels.com/photo/serving-of-muscles-and-glass-of-champagne-6213757/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Vladimir Gladkov on Pexels
                </a>
              </p>
            </div>
          </div>

          {/* Right column - Title and Ingredients */}
          <div className="relative z-10 space-y-8">
            <div className="text-center sm:text-left">
              <h1 className="mb-2 text-2xl text-center font-serif text-custom-accent sm:text-2xl lg:text-4xl 2xl:text-5xl sm:ml-12 lg:ml-24 2xl:ml-20">
                Dagnje Na Buzaru
              </h1>
              <p className="text-sm text-center italic text-gray-600 sm:text-md sm:ml-12 lg:ml-24 2xl:text-lg">
                Original recipe from{" "}
                <a
                  href="https://www.thespruceeats.com/easy-croatian-mussels-recipe-1135889"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  thespruceeats.com
                </a>
              </p>
            </div>

            <div>
              <h2 className="pl-20 mb-3 text-xl font-serif text-gray-800 sm:text-2xl 2xl:text-4xl 2xl:mb-4">
                Ingredients
              </h2>
              <ul className="pl-20 list-disc space-y-2 text-sm text-gray-700 sm:text-base lg:text-lg 2xl:text-2xl z-10">
                <li>4 pounds mussels</li>
                <li>3/4 cup olive oil</li>
                <li>1/4 cup chopped parsley</li>
                <li>8 cloves garlic, or to taste, chopped</li>
                <li>1 1/4 cups dry white wine</li>
                <li>1 dash coarse sea salt, or to taste</li>
                <li>1 dash freshly ground black pepper, or to taste</li>
                <li>1/2 to 3/4 cup fresh breadcrumbs</li>
                <li>1 baguette, optional for serving</li>
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
              This recipe for Dagnje na Buzaru reflects my version of this
              classic Croatian seafood dish, a simple but elegant preparation of
              mussels in wine and garlic.
            </p>
            <p>
              The magic lies in timing - the mussels need to open gradually to
              release their briny juices into the sauce. Starting with high heat
              creates an initial burst of steam, then reducing the heat allows
              the flavors to meld without overcooking the delicate mussels. I've
              found that the breadcrumbs aren't just a garnish - they thicken
              the sauce slightly while still keeping it brothy enough for bread
              dipping. Fresh breadcrumbs work best here, as they absorb the
              flavors without becoming pasty.
            </p>
            <p>
              A tip from my kitchen: choosing fresh mussels is crucial - they
              should be tightly closed and smell like the ocean. If any are open
              and don't close when tapped, discard them before cooking.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe10;
