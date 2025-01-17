import zagorski from "../assets/images/croatia-images/zagorski-strukli.png";

const Recipe12 = () => {
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
                src={zagorski}
                alt="Zagorski Štrukli"
                className="w-full h-[200px] sm:h-[330px] object-cover rounded-lg shadow-md mt-8 z-10"
              />
              <p className="relative mt-2 text-xs text-center text-gray-500 sm:text-sm 2xl:text-lg sm:text-right italic">
                Image credit -{" "}
                <a
                  href="https://www.pexels.com/photo/cooked-food-on-black-bowl-688804/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Valeria Boltneva on Pexels
                </a>
              </p>
            </div>
          </div>

          {/* Right column - Title and Ingredients */}
          <div className="relative z-10 space-y-8">
            <div className="text-center sm:text-left">
              <h1 className="mb-2 text-2xl text-center font-serif text-custom-accent sm:text-2xl lg:text-4xl 2xl:text-5xl sm:ml-12 lg:ml-24 2xl:ml-20">
                Zagorski Štrukli
              </h1>
              <p className="text-sm text-center italic text-gray-600 sm:text-md sm:ml-12 lg:ml-24 2xl:text-lg">
                Original recipe from{" "}
                <a
                  href="https://www.curiouscuisiniere.com/croatian-strukli-soup/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  curiouscuisine.com
                </a>
              </p>
            </div>

            <div>
              <h2 className="pl-20 mb-3 text-xl font-serif text-gray-800 sm:text-2xl 2xl:text-4xl 2xl:mb-4">
                Ingredients
              </h2>
              <ul className="pl-20 list-disc space-y-2 text-sm text-gray-700 sm:text-base lg:text-lg 2xl:text-2xl z-10">
                <p className="text-md font-bold">For the Dough:</p>
                <li>50 dkg (4 cups) pastry flour</li>
                <li>Pinch of salt</li>
                <li>3 dcl (1 ½ cups) warm milk</li>
                <li>0.5 dcl (1/2 cup) oil</li>
                <li>1 egg</li>
                <li>1 Tablespoon white vinegar</li>
                <p className="text-md font-bold">For the Filling:</p>
                <li>
                  50 dkg (1 lb) fresh cheese (ricotta or goat cheese are good
                  options)
                </li>
                <li>1 (180 g / 6 oz) container sour cream</li>
                <li>2 eggs</li>
                <li>Pinch of salt</li>
                <p className="text-md font-bold">For the Soup:</p>
                <li>1 L (4 ¼ cups) water</li>
                <li>1 Tablespoon oil</li>
                <li>Pinch of salt</li>
                <li>Pinch of Vegeta (or bouillon powder)</li>
                <li>Toasted breadcrumbs (optional)</li>
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
              This Zagorski Štrukli recipe captures the essence of Croatian
              comfort food, a dish that's particularly beloved in the Zagorje
              region. Through making this dish, I've learned that success lies
              in mastering two crucial elements.
            </p>
            <p>
              First, the dough needs to be worked until it's elastic enough to
              stretch paper-thin without tearing. The resting period isn't just
              a suggestion - it allows the gluten to relax, making the dough
              easier to stretch. I've found that using the backs of your hands
              to stretch the dough gives you better control than trying to roll
              it. The filling is equally important - the mixture of fresh cheese
              and sour cream should be creamy but not too wet. When rolling the
              dough, maintaining even pressure helps create uniform štrukli. The
              traditional plate-cutting method isn't just for show - it helps
              seal the edges properly.
            </p>
            <p>
              A tip from my kitchen: when cooking the štrukli in soup, resist
              the urge to stir too much as they're delicate. The toasted
              breadcrumbs aren't optional in my view - they add a wonderful
              textural contrast to the tender dumplings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe12;
