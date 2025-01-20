import schnitzel from "../assets/images/germany-images/schnitzel.jpeg";

const Recipe16 = () => {
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
                src={schnitzel}
                alt="Jaeger Schnitzel"
                className="w-full h-[200px] sm:h-[330px] object-cover rounded-lg shadow-md mt-8 z-10"
              />
              <p className="relative mt-2 text-xs text-center text-gray-500 sm:text-sm 2xl:text-lg sm:text-right italic">
                Image credit -{" "}
                <a
                  href="https://www.pexels.com/photo/schnitzel-with-baked-potatoes-and-arugula-salad-19396433/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Nadin Sh on Pexels
                </a>
              </p>
            </div>
          </div>

          {/* Right column - Title and Ingredients */}
          <div className="relative z-10 space-y-8">
            <div className="text-center sm:text-left">
              <h1 className="mb-2 text-2xl text-center font-serif text-custom-accent sm:text-2xl lg:text-4xl 2xl:text-5xl sm:ml-12 lg:ml-24 2xl:ml-20">
                Jaeger Schnitzel
              </h1>
              <p className="text-sm text-center italic text-gray-600 sm:text-md sm:ml-12 lg:ml-24 2xl:text-lg">
                Original recipe from{" "}
                <a
                  href="https://www.allrecipes.com/recipe/85935/jaeger-schnitzel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  allrecipes.com
                </a>
              </p>
            </div>

            <div>
              <h2 className="pl-20 mb-3 text-xl font-serif text-gray-800 sm:text-2xl 2xl:text-4xl 2xl:mb-4">
                Ingredients
              </h2>
              <ul className="pl-20 list-disc space-y-2 text-sm text-gray-700 sm:text-base lg:text-lg 2xl:text-2xl z-10">
                <li>2 pounds boneless pork chops, cubed</li>
                <li>oil for frying</li>
                <li>2 eggs, beaten</li>
                <li>plain bread crumbs</li>
                <li>3 (1 ounce) packages dry mushroom gravy mix</li>
                <li>1 pound fresh mushrooms, coarsely chopped</li>
                <li>1 (16 ounce) package dry egg noodles</li>
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
              Flatten the cubed pork with a meat mallet until evenly thin, then
              cut each piece in half. Heat oil in a large skillet or Dutch oven
              over medium heat.
            </p>
            <p>
              Coat the pork by dipping each piece first into the beaten egg,
              then into the bread crumbs. Place the breaded pork into the hot
              oil and cook until golden brown, flipping as needed. Transfer the
              cooked pork to a warm plate and set aside.
            </p>
            <p>
              Prepare the gravy according to the instructions on the package.
              Stir in the mushrooms and let them cook together with the gravy
              until heated through. While the gravy is cooking, bring a large
              pot of salted water to a boil. Add the egg noodles and cook until
              tender but firm to the bite, about 8-10 minutes. Drain the noodles
              well. To serve, place the pork over the cooked noodles and
              generously ladle the mushroom gravy on top.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe16;
