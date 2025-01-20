import ratatouille from "../assets/images/france-images/ratatouille.png";

const Recipe15 = () => {
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
                src={ratatouille}
                alt="Ratatouille"
                className="w-full h-[200px] sm:h-[330px] object-cover rounded-lg shadow-md mt-8 z-10"
              />
            </div>
          </div>

          {/* Right column - Title and Ingredients */}
          <div className="relative z-10 space-y-8">
            <div className="text-center sm:text-left">
              <h1 className="mb-2 text-2xl text-center font-serif text-custom-accent sm:text-2xl lg:text-4xl 2xl:text-5xl sm:ml-12 lg:ml-24 2xl:ml-20">
                Ratatouille
              </h1>
              <p className="text-sm text-center italic text-gray-600 sm:text-md sm:ml-12 lg:ml-24 2xl:text-lg">
                Original recipe from{" "}
                <a
                  href="https://feelgoodfoodie.net/recipe/ratatouille/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  feelgoodfoodie.com
                </a>
              </p>
            </div>

            <div>
              <h2 className="pl-20 mb-3 text-xl font-serif text-gray-800 sm:text-2xl 2xl:text-4xl 2xl:mb-4">
                Ingredients
              </h2>
              <ul className="pl-20 list-disc space-y-2 text-sm text-gray-700 sm:text-base lg:text-lg 2xl:text-2xl z-10">
                <li>1 onion chopped</li>
                <li>4 garlic cloves minced</li>
                <li>1 (15-ounce) can fire roasted diced tomatoes</li>
                <li>2 tablespoons fresh thyme</li>
                <li>½ teaspoon salt divided</li>
                <li>½ teaspoon black pepper divided</li>
                <li>¼ teaspoon crushed red pepper or to taste</li>
                <li>1 small eggplant trimmed and very thinly sliced</li>
                <li>1 zucchini trimmed and very thinly sliced</li>
                <li>1 red bell pepper cored and very thinly sliced</li>
                <li>1 yellow squash trimmed and very thinly sliced</li>
                <li>½ teaspoon oregano</li>
                <li>1 tablespoon red wine vinegar</li>
                <li>2 tablespoons Parmesan cheese for serving</li>
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
              This beautiful layered Ratatouille recipe was inspired by Feel
              Good Foodie's version. I've made this colorful vegetable dish
              multiple times and love how it brings together the best of summer
              produce.
            </p>
            <p>
              This elegant yet simple preparation starts with a flavorful tomato
              base. I arrange the vegetables in a spiral pattern - it not only
              looks stunning but ensures even cooking. The key is slicing the
              vegetables to a similar thickness so they cook uniformly. What I
              love about this version is how the vegetables retain their
              individual flavors while melding into a harmonious dish. The
              covered baking creates a gentle steam bath, while the final
              uncovered cooking adds a lovely roasted quality. A splash of red
              wine vinegar at the end brightens all the flavors, and a sprinkle
              of Parmesan adds a savory finish.
            </p>
            <p>
              Pro tip: I find this dish even better the next day, after the
              flavors have had time to develop.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe15;
