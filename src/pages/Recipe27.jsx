import stamppot from "../assets/images/netherlands-images/stamppot.jpg";

const Recipe27 = () => {
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
                src={stamppot}
                alt="Stamppot"
                className="w-full h-[200px] sm:h-[330px] object-cover rounded-lg shadow-md mt-8 z-10"
              />
            </div>
          </div>

          {/* Right column - Title and Ingredients */}
          <div className="relative z-10 space-y-8">
            <div className="text-center sm:text-left">
              <h1 className="mb-2 text-2xl text-center font-serif text-custom-accent sm:text-2xl lg:text-4xl 2xl:text-5xl sm:ml-12 lg:ml-24 2xl:ml-20">
                Stamppot
              </h1>
              <p className="text-sm text-center italic text-gray-600 sm:text-md sm:ml-12 lg:ml-24 2xl:text-lg">
                Original recipe from{" "}
                <a
                  href="https://www.kitchenfrau.com/boerenkool-stamppot/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  kitchenfrau.com
                </a>
              </p>
            </div>

            <div>
              <h2 className="pl-20 mb-3 text-xl font-serif text-gray-800 sm:text-2xl 2xl:text-4xl 2xl:mb-4">
                Ingredients
              </h2>
              <ul className="pl-20 list-disc space-y-2 text-sm text-gray-700 sm:text-base lg:text-lg 2xl:text-2xl z-10">
               <li>8 medium potatoes (3lbs/1.4kg)</li>
               <li>1 large onion, diced (2 cups)</li>
               <li>1 bay leaf</li>
               <li>2 cups water</li>
               <li>2 bunches of kale (1lb/45ogms/12-14 large leaves), about 8 cups, stems removed, finely chopped, lightly packed</li>
               <li>1 lb (450gms) smoked sausage: rookworst, bratwurst, kielbassa, etc (gluten free, if necessary)</li>
               <li>¼ cup (115gms) butter</li>
               <li>¼ teaspoon pepper</li>
               <li>¼ teaspoon nutmeg (optional)</li>
               <li>¾ - 1 teaspoon salt</li>
               <li>2 cans (400ml/14 oz each) pear halves in light syrup, or home-canned pears</li>
               <li>mustard</li>
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
            This hearty Stamppot recipe (specifically Boerenkool Stamppot with kale) represents traditional Dutch comfort food at its finest. While various versions exist throughout the Netherlands, this recipe captures the essence of this beloved winter dish.
            </p>
            <p>
            Through making this dish many times, I've learned that the key to perfect stamppot lies in the details. The way you chop the kale matters - that technique of balling it up before slicing creates the perfect-sized bits that integrate well with the mashed potatoes. I've found that cooking the kale together with the potatoes, rather than separately, allows the flavors to meld beautifully while making the process more efficient.
            </p>
            <p>
            The addition of the smoked sausage (rookworst) on top during cooking infuses everything with its smoky flavor. A tip from my kitchen: don't skip the nutmeg - it's a subtle but essential element that gives stamppot its characteristic Dutch taste. I've also discovered that saving some of the cooking liquid is crucial for achieving the perfect consistency - you want it creamy but still substantial enough to hold its shape on the plate.
            </p>
            <p>
            The traditional serving with canned pears might seem unusual to non-Dutch diners, but this sweet-savory combination is what makes stamppot so special. The warm, hearty potatoes and kale contrast beautifully with the cool, sweet pears.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe27;
