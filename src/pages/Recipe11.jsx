import squidInkRisotto from "../assets/images/croatia-images/squid-ink-risotto.jpeg";

const Recipe11 = () => {
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
                src={squidInkRisotto}
                alt="Squid Ink Risotto"
                className="w-full h-[200px] sm:h-[330px] object-cover rounded-lg shadow-md mt-8 z-10"
              />
              <p className="relative mt-2 text-xs text-center text-gray-500 sm:text-sm 2xl:text-lg sm:text-right italic">
                Image credit -{" "}
                <a
                  href="https://www.pexels.com/photo/gourmet-squid-ink-risotto-with-skewered-seafood-29629192/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Nhi Tran on Pexels
                </a>
              </p>
            </div>
          </div>

          {/* Right column - Title and Ingredients */}
          <div className="relative z-10 space-y-8">
            <div className="text-center sm:text-left">
              <h1 className="mb-2 text-2xl text-center font-serif text-custom-accent sm:text-2xl lg:text-4xl 2xl:text-5xl sm:ml-12 lg:ml-24 2xl:ml-20">
                Squid Ink Risotto
              </h1>
              <p className="text-sm text-center italic text-gray-600 sm:text-md sm:ml-12 lg:ml-24 2xl:text-lg">
                Original recipe from{" "}
                <a
                  href="https://honest-food.net/squid-ink-risotto/#wprm-recipe-container-38347"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  honest-food.net
                </a>
              </p>
            </div>

            <div>
              <h2 className="pl-20 mb-3 text-xl font-serif text-gray-800 sm:text-2xl 2xl:text-4xl 2xl:mb-4">
                Ingredients
              </h2>
              <ul className="pl-20 list-disc space-y-2 text-sm text-gray-700 sm:text-base lg:text-lg 2xl:text-2xl z-10">
                <li>3 tablespoons olive oil</li>
                <li>3 cloves garlic cloves, minced</li>
                <li>1 1/2 cups risotto rice</li>
                <li>1/4 cup white wine</li>
                <li>1 quart fish broth, or chicken or vegetable broth</li>
                <li>1 packet squid ink, about 4 grams</li>
                <li>1/2 pound calamari, cut into rings</li>
                <li>Salt</li>
                <li>Lemon zest</li>
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
              This squid ink risotto recipe reflects my exploration of Venetian
              cuisine, where this dramatic black dish originated.
            </p>
            <p>
              The key to perfect nero di seppia risotto lies in timing - both
              with the calamari and the rice. A quick 30-second blanch keeps the
              calamari tender, while the slow addition of hot stock creates that
              signature creamy texture without making the rice mushy.
            </p>
            <p>
              I've found that adding the squid ink at the end preserves its
              briny flavor while still achieving that intense black color. The
              bright lemon zest isn't just garnish - it cuts through the
              richness and brings all the flavors into focus.
            </p>
            <p>
              A tip from my kitchen: have all ingredients ready before starting,
              as proper risotto demands constant attention. The stock should be
              kept at a steady simmer, never boiling, to maintain the perfect
              cooking temperature.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe11;
