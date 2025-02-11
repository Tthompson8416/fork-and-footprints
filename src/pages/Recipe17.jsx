import sausageKraut from "../assets/images/germany-images/sausage-kraut.jpg";

const Recipe17 = () => {
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
                src={sausageKraut}
                alt="Sausage and Sauerkraut"
                className="w-full h-[200px] sm:h-[330px] object-cover rounded-lg shadow-md mt-8 z-10"
              />
              <p className="relative mt-2 text-xs text-center text-gray-500 sm:text-sm 2xl:text-lg sm:text-right italic">
                Image credit -{" "}
                <a
                  href="https://www.freepik.com/free-photo/munich-sausages-with-fried-cabbage_6765897.htm#fromView=image_search_similar&page=1&position=0&uuid=527dad50-99d0-44c8-9355-1daeb229e1a6&new_detail=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Timolina on Freepik
                </a>
              </p>
            </div>
          </div>

          {/* Right column - Title and Ingredients */}
          <div className="relative z-10 space-y-8">
            <div className="text-center sm:text-left">
              <h1 className="mb-2 text-2xl text-center font-serif text-custom-accent sm:text-2xl lg:text-4xl 2xl:text-5xl sm:ml-12 lg:ml-24 2xl:ml-20">
                Sausage and Sauerkraut 
              </h1>
              <p className="text-sm text-center italic text-gray-600 sm:text-md sm:ml-12 lg:ml-24 2xl:text-lg">
                Original recipe from{" "}
                <a
                  href="https://www.delish.com/cooking/recipe-ideas/a39749166/sausages-and-sauerkraut-recipe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  delish.com
                </a>
              </p>
            </div>

            <div>
              <h2 className="pl-20 mb-3 text-xl font-serif text-gray-800 sm:text-2xl 2xl:text-4xl 2xl:mb-4">
                Ingredients
              </h2>
              <ul className="pl-20 list-disc space-y-2 text-sm text-gray-700 sm:text-base lg:text-lg 2xl:text-2xl z-10">
                <li>2 Tbsp. extra-virgin olive oil</li>
                <li>1 1/4 lb. bratwurst (about 5 links)</li>
                <li>1 large yellow onion, halved and thinly sliced</li>
                <li>1 1/2 lb. baby gold potatoes, halved if large</li>
                <li>1 Tbsp. caraway seeds</li>
                <li>1/2 tsp. ground nutmeg</li>
                <li>12 oz. lager or pilsner beer</li>
                <li>1 dried bay leaf</li>
                <li>2 1/2 c. drained sauerkraut (from a 24-oz. jar)</li>
                <li>1/2 c. apple juice</li>
                <li>Sliced fresh chives, for garnish</li>
                <li>Buttered brown bread, for serving</li>
                <li>Whole-grain mustard, for serving</li>
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
              This classic Dutch-German sausage and sauerkraut recipe combines
              the perfect balance of savory and tart flavors. The key is
              layering the ingredients to build depth.
            </p>
            <p>
              The initial browning of the sausages creates a flavorful base for
              the dish. The combination of beer, apple juice, and sauerkraut
              provides both acidity and sweetness that complement the rich
              sausages. Caraway and nutmeg are essential - they add warmth and
              cut through the richness.
            </p>
            <p>
              A tip from my kitchen: let the potatoes cook until just tender -
              they'll continue absorbing the flavorful liquid. Choose a beer
              that you'd enjoy drinking; its flavor concentrates as it cooks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe17;
