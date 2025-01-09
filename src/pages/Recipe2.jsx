import flemingStew from "../assets/images/belgium-images/fleming-stew.jpg";

const Recipe1 = () => {
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
                src={flemingStew}
                alt="Fleming Stew"
                className="w-full h-[200px] sm:h-[330px] object-cover rounded-lg shadow-md mt-8 z-10"
              />
              <p className="relative mt-2 text-xs text-center text-gray-500 sm:text-sm 2xl:text-lg sm:text-right italic">
                Image credit -{" "}
                <a
                  href="https://www.freepik.com/free-photo/delicious-goulash-ready-dinner_25178948.htm#fromView=search&page=1&position=9&uuid=5c97b44b-9c79-4801-adde-713c79c3a977&new_detail=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Freepik
                </a>
              </p>
            </div>
          </div>

          {/* Right column - Title and Ingredients */}
          <div className="relative z-10 space-y-8">
            <div className="text-center sm:text-left">
              <h1 className="mb-2 text-2xl text-center font-serif text-red-500 sm:text-2xl lg:text-4xl 2xl:text-5xl sm:ml-12 lg:ml-24 2xl:ml-20 sm:text-yellow-500 md:text-blue-700 lg:text-gray-600 xl:text-purple-700 2xl:text-green-700 3xl:text-orange-700">
                Fleming Stew
              </h1>
              <p className="text-sm text-center italic text-gray-600 sm:text-md sm:ml-12 lg:ml-24 2xl:text-lg">
                Original recipe from{" "}
                <a
                  href="https://leeksandhighheels.com/recipes/belgian-classics/belgian-classics-how-to-make-flemish-beef-stew/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  leeksandheels.com
                </a>
              </p>
            </div>

            <div>
              <h2 className="pl-12 mb-3 text-xl font-serif text-gray-800 sm:text-2xl 2xl:text-4xl 2xl:mb-4">
                Ingredients
              </h2>
              <ul className="pl-12 space-y-2 text-sm text-gray-700 sm:text-base lg:text-lg 2xl:text-2xl z-10">
                <ul>
                  <li>600 gr beef , chopped in 4 cm chunks</li>
                  <li>1 onion, roughly diced</li>
                  <li>1 slice bread</li>
                  <li>1 tablespoon mustard</li>
                  <li>2 tablespoon butter, unsalted</li>
                  <li>2 tablespoons flour</li>
                  <li>1 (33cl) bottle brown beer</li>
                  <li>100 ml beef stock (+ extra)</li>
                  <li>1 tablespoon red current jelly or brown sugar</li>
                  <li>1 teaspoon nutmeg</li>
                  <li>2 bay leaves</li>
                  <li>a sprig fresh thyme and rosemary</li>
                  <li>salt and pepper</li>
                </ul>
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
              This hearty Flemish Beef Stew (Carbonnade Flamande) recipe has
              evolved through my experiments with traditional Belgian cooking.
              While inspired by various authentic sources, I've developed my own
              version of this classic dish: The magic of this stew lies in its
              simplicity and the crucial role of Belgian beer.
            </p>
            <p>
              I've found that a dark Belgian ale works best, adding depth and a
              subtle sweetness that complements the caramelized onions and beef.
              The unconventional addition of mustard-slathered bread might raise
              eyebrows, but it's actually a traditional thickening technique
              that adds an incredible depth to the sauce. Through many winter
              Sunday afternoons of cooking, I've learned that patience is key -
              giving the meat enough space to properly sear, and allowing the
              stew to simmer slowly until the beef becomes meltingly tender.
            </p>
            <p>
              While it's tempting to dive in right away (and it's certainly
              delicious), I've discovered that letting it rest overnight
              transforms it into something even more special, as the flavors
              meld and deepen.
            </p>
            <p>
              A tip from my kitchen: I like to serve this with crispy Belgian
              fries and a good crusty bread to soak up every last drop of the
              rich sauce. And of course, serving it with the same type of beer
              you used in cooking makes for a perfect pairing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe1;
