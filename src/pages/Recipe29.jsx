import caldoVerde from "../assets/images/portugal-images/caldo-verde.jpg";

const Recipe29 = () => {
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
                src={caldoVerde}
                alt="Caldo verde"
                className="w-full h-[200px] sm:h-[330px] object-cover rounded-lg shadow-md mt-8 z-10"
              />
            </div>
          </div>

          {/* Right column - Title and Ingredients */}
          <div className="relative z-10 space-y-8">
            <div className="text-center sm:text-left">
              <h1 className="mb-2 text-2xl text-center font-serif text-custom-accent sm:text-2xl lg:text-4xl 2xl:text-5xl sm:ml-12 lg:ml-24 2xl:ml-20">
                Caldo verde{" "}
              </h1>
              <p className="text-sm text-center italic text-gray-600 sm:text-md sm:ml-12 lg:ml-24 2xl:text-lg">
                Original recipe from{" "}
                <a
                  href="https://www.seriouseats.com/caldo-verde-portuguese-potato-kale-soup-recipe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  seriouseats.com
                </a>
              </p>
            </div>

            <div>
              <h2 className="pl-20 mb-3 text-xl font-serif text-gray-800 sm:text-2xl 2xl:text-4xl 2xl:mb-4">
                Ingredients
              </h2>
              <ul className="pl-20 list-disc space-y-2 text-sm text-gray-700 sm:text-base lg:text-lg 2xl:text-2xl z-10">
                <li>2 tablespoons (30g) unsalted butter</li>
                <li>1 medium yellow onion or large leek, finely diced (about 8 ounces; 225g)</li>
                <li>3 medium cloves garlic, sliced (about 1 tablespoon; 15g)</li>
                <li>Kosher salt and freshly ground black pepper</li>
                <li>About 6 tablespoons (90ml) extra-virgin olive oil</li>
                <li>1 large russet potato, peeled, quartered, and cut into 1/4-inch slices (about 1/2 pound; 225g)</li>
                <li>2 medium Yukon Gold potatoes, peeled, quartered, and cut into 1/4-inch slices (about 1/2 pound; 225g)</li>
                <li>6 cups (1.4L) homemade or store-bought low-sodium chicken stock (see note)</li>
                <li>1 bunch curly or lacinato kale, tough stems removed, leaves finely chopped (about 3/4 pound; 340g)</li>
                <li>12 ounces (340g) cooked linguiça or other garlicky pork sausage, cut into 1/4- to 1/2-inch slices (see note)</li>
                <li>Minced fresh chives, for garnish (optional)</li>
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
              This soul-warming Portuguese soup transforms humble ingredients
              into a hearty, satisfying meal. The cooking method creates
              remarkable depth.
            </p>
            <p>
              The slow softening of onions and garlic builds the flavor base,
              while the gradual breakdown of russet potatoes naturally thickens
              the broth. The contrast between the creamy soup and tender kale
              creates that signature caldo verde texture.
            </p>
            <p>
              A tip from my kitchen: Let the potatoes break down naturally -
              resist the urge to mash them too early. The slow dissolution
              creates a silkier texture. And while chorizo or linguiça are
              traditional, any smoky sausage will work beautifully.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe29;
