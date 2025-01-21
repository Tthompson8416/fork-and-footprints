import softPretzel from "../assets/images/germany-images/pretzel.png";

const Recipe18 = () => {
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
                src={softPretzel}
                alt="SOFT GERMAN PRETZELS"
                className="w-full h-[200px] sm:h-[330px] object-cover rounded-lg shadow-md mt-8 z-10"
              />
              <p className="relative mt-2 text-xs text-center text-gray-500 sm:text-sm 2xl:text-lg sm:text-right italic">
                Image credit -{" "}
                <a
                  href="https://www.pexels.com/photo/close-up-of-a-pretzel-18529797/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Martii Tolentino on Pexels
                </a>
              </p>
            </div>
          </div>

          {/* Right column - Title and Ingredients */}
          <div className="relative z-10 space-y-8">
            <div className="text-center sm:text-left">
              <h1 className="mb-2 text-2xl text-center font-serif text-custom-accent sm:text-2xl lg:text-4xl 2xl:text-5xl sm:ml-12 lg:ml-24 2xl:ml-20">
                SOFT GERMAN PRETZELS (BREZELN)
              </h1>
              <p className="text-sm text-center italic text-gray-600 sm:text-md sm:ml-12 lg:ml-24 2xl:text-lg">
                Original recipe from{" "}
                <a
                  href=" https://www.savorynothings.com/wprm_print/homemade-german-soft-pretzels"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  savorynothings.com
                </a>
              </p>
            </div>

            <div>
              <h2 className="pl-20 mb-3 text-xl font-serif text-gray-800 sm:text-2xl 2xl:text-4xl 2xl:mb-4">
                Ingredients
              </h2>
              <ul className="pl-20 list-disc space-y-2 text-sm text-gray-700 sm:text-base lg:text-lg 2xl:text-2xl z-10">
                <p>For the Dough</p>
                <li>4 cups flour</li>
                <li>1 tablespoon instant dried yeast</li>
                <li>1 tablespoon sugar</li>
                <li>1 teaspoon salt</li>
                <li>4 tablespoons butter softened</li>
                <li>1 ¼ cups milk preferably at room temperature</li>
                <p>For the Brine</p>
                <li>1 quart water</li>
                <li>½ cup baking soda</li>
                <li>1 tablespoon salt</li>
                <p>To Garnish</p>
                <li>
                  coarse sea salt or sesame seeds, poppy seeds, cheese... for
                  topping
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
              Prepare the Dough: 1. Combine the flour, yeast, sugar, and salt in
              a stand mixer bowl equipped with a dough hook. Mix briefly to
              blend. 2. Add the butter, then start the mixer on low speed.
              Gradually pour in the milk while the mixer runs. Continue kneading
              on low for about 5 minutes until the dough is smooth and elastic.
            </p>
            <p>
              Let It Rise: 3. Shape the dough into a ball and return it to the
              mixing bowl. Cover with a clean kitchen towel and let it rise at
              room temperature for 40 minutes to 1 hour, or until it has doubled
              in size.
            </p>
            <p>
              Shape the Pretzels: 4. Punch down the dough to remove air and
              divide it into 12 equal portions. 5. Roll each portion into a
              20-inch-long rope, leaving the center slightly thicker. Twist the
              ends together three times, then fold them down to form a classic
              pretzel shape. 6. Arrange the shaped pretzels on two lined baking
              sheets. Cover with towels and let them rise again for 20 minutes,
              or until slightly puffed.
            </p>
            <p>
              Prepare the Brine and Bake: 7. Preheat the oven to 360°F. 8. In a
              pot, mix 1 quart of water with baking soda and salt. Bring the
              mixture to a boil, then remove it from heat. 9. Using a slotted
              spoon, dip each pretzel into the brine for 15-20 seconds, ensuring
              it is fully submerged. Allow the excess liquid to drain before
              placing the pretzels back on the baking sheets. 10. Sprinkle the
              pretzels with coarse salt, seeds, or your preferred toppings, and
              bake them for about 20 minutes until they turn a deep golden
              brown. Finishing Touches: 11. For a shiny finish, immediately
              brush the hot pretzels with water, milk, or half-and-half
              (optional). 12. Transfer the pretzels to a wire rack and let them
              cool completely before serving.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe18;
