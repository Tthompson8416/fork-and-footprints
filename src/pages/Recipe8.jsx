import poutine from "../assets/images/canada-images/poutine.jpg";

const Recipe8 = () => {
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
                src={poutine}
                alt="Poutine"
                className="w-full h-[200px] sm:h-[330px] object-cover rounded-lg shadow-md mt-8 z-10"
              />
            </div>
          </div>

          {/* Right column - Title and Ingredients */}
          <div className="relative z-10 space-y-8">
            <div className="text-center sm:text-left">
              <h1 className="mb-2 text-2xl text-center font-serif text-custom-accent sm:text-2xl lg:text-4xl 2xl:text-5xl sm:ml-12 lg:ml-24 2xl:ml-20">
                Poutine
              </h1>
              <p className="text-sm text-center italic text-gray-600 sm:text-md sm:ml-12 lg:ml-24 2xl:text-lg">
                Original recipe from{" "}
                <a
                  href="https://www.seasonsandsuppers.ca/authentic-canadian-poutine-recipe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  seasonsandsuppers.ca
                </a>
              </p>
            </div>

            <div>
              <h2 className="pl-20 mb-3 text-xl font-serif text-gray-800 sm:text-2xl 2xl:text-4xl 2xl:mb-4">
                Ingredients
              </h2>
              <ul className="pl-20 space-y-2 text-sm text-gray-700 sm:text-base lg:text-lg 2xl:text-2xl z-10 list-disc">
                <p className="text-md font-bold">Poutine Gravy:</p>
                <li>3 Tbsp cornstarch</li>
                <li>2 Tbsp water</li>
                <li>6 Tbsp unsalted butter</li>
                <li>¼ cup unbleached all purpose flour</li>
                <li>20 oz beef broth</li>
                <li>10 oz chicken broth</li>
                <li>Pepper, to taste</li>
                <p className="text-md font-bold">For Deep Fried Fries::</p>
                <li>2 lbs Russet potatoes, (3-4 medium potatoes)</li>
                <li>Peanut or other frying oil</li>
                <p className="text-md font-bold">Toppings:</p>
                <li>1 - 1 ½ cups white cheddar cheese curds</li>
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
              This classic Poutine recipe has been adapted through my journey of
              recreating this iconic Canadian comfort food at home. While it
              might seem simple - just fries, gravy, and cheese curds -
              achieving that perfect poutine is all in the details.
            </p>
            <p>
              I've discovered that the key to exceptional poutine lies in the
              double-frying process for the fries. That initial fry at a lower
              temperature cooks the potato through, while the second
              higher-temperature fry creates that crucial crispy exterior that
              can stand up to the gravy. The soaking step might seem fussy, but
              it removes excess starch and is essential for achieving that
              perfect crispy exterior.
            </p>
            <p>
              The gravy is where this dish really shines - it needs to be rich
              enough to complement the fries but not so thick that it becomes
              gluey. Using both beef and chicken broth creates a more complex
              flavor than either alone. I've found that adding the cornstarch
              mixture gradually gives you better control over the final
              consistency - you want it thick enough to cling to the fries but
              still fluid enough to work its way through the dish.
            </p>
            <p>
              A tip from my kitchen: authentic cheese curds are crucial - they
              should be at room temperature and squeak when you bite them! The
              layering process matters too - you want to work quickly while
              everything is hot so the curds get slightly melted but still
              maintain their signature squeak.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe8;
