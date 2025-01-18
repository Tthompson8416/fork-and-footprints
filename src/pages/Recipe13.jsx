import classicCrepe from "../assets/images/france-images/crepe.png";

const Recipe13 = () => {
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
                src={classicCrepe}
                alt="Classic Crepes"
                className="w-full h-[200px] sm:h-[330px] object-cover rounded-lg shadow-md mt-8 z-10"
              />
              <p className="relative mt-2 text-xs text-center text-gray-500 sm:text-sm 2xl:text-lg sm:text-right italic">
                Image credit -{" "}
                <a
                  href="https://www.freepik.com/free-photo/pancakes-with-strawberries-chocolate-decorated-with-mint-leaf_7120667.htm#fromView=image_search_similar&page=1&position=4&uuid=a2f38bf8-7d09-41aa-9074-7c2c9b0c6a27&new_detail=true"
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
                Classic Crepes
              </h1>
              <p className="text-sm text-center italic text-gray-600 sm:text-md sm:ml-12 lg:ml-24 2xl:text-lg">
                Original recipe from{" "}
                <a
                  href="https://www.delish.com/cooking/recipe-ideas/a52114/easy-basic-crepe-recipe"
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
                <li>2 large eggs, room temperature</li>
                <li>1 1/4 c. whole milk, room temperature</li>
                <li>1 c. (120 g.) all-purpose flour</li>
                <li>4 tsp. granulated sugar</li>
                <li>1/2 tsp. kosher salt</li>
                <li>
                  3 Tbsp. unsalted butter, melted, cooled, plus 1/2 tsp. cold
                  unsalted butter
                </li>
                <li>
                  Fresh berries and confectioners' sugar, for serving (optional)
                </li>
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
              This classic French crepe recipe was inspired by Delish.com's Easy
              Basic Crepe Recipe. Here's my version that I've made countless
              times for weekend brunches.
            </p>
            <p>
              My version combines eggs, milk, flour, a touch of sugar, salt, and
              melted butter, blended until silky smooth. The key to success is
              letting the batter rest in the refrigerator for at least an hour
              (or up to two days if you want to prep ahead). To cook, I heat a
              9-inch nonstick skillet over medium heat with just a whisper of
              butter. The trick is pouring 1/4 cup of batter and quickly
              swirling the pan to create that signature thin crepe. Each side
              needs about 45 seconds until golden.
            </p>
            <p>
              I like to fold mine into quarters and serve them simply with fresh
              berries and a dusting of powdered sugar, though they're delicious
              with any sweet or savory filling you prefer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe13;
