import paella from "../assets/images/spain-images/paella.jpg";

const Recipe33 = () => {
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
                src={paella}
                alt="Paella"
                className="w-full h-[200px] sm:h-[330px] object-cover rounded-lg shadow-md mt-8 z-10"
              />
              <p className="relative mt-2 text-xs text-center text-gray-500 sm:text-sm 2xl:text-lg sm:text-right italic">
                Image credit -{" "}
                <a
                  href="https://www.vecteezy.com/free-photos/paella"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Vecteezy{" "}
                </a>
              </p>
            </div>
          </div>

          {/* Right column - Title and Ingredients */}
          <div className="relative z-10 space-y-8">
            <div className="text-center sm:text-left">
              <h1 className="mb-2 text-2xl text-center font-serif text-custom-accent sm:text-2xl lg:text-4xl 2xl:text-5xl sm:ml-12 lg:ml-24 2xl:ml-20">
                Paella{" "}
              </h1>
              <p className="text-sm text-center italic text-gray-600 sm:text-md sm:ml-12 lg:ml-24 2xl:text-lg">
                Original recipe from{" "}
                <a
                  href="https://tastesbetterfromscratch.com/paella/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  tastesbetterfromscratch.com
                </a>
              </p>
            </div>

            <div>
              <h2 className="pl-20 mb-3 text-xl font-serif text-gray-800 sm:text-2xl 2xl:text-4xl 2xl:mb-4">
                Ingredients
              </h2>
              <ul className="pl-20 list-disc space-y-2 text-sm text-gray-700 sm:text-base lg:text-lg 2xl:text-2xl z-10">
                <li>1/4 cup Extra virgin olive Oil (Spanish EVOO if you have it)</li>
                <li>1 Onion , diced</li>
                <li>1 bell pepper , diced (I like to use ½ red and ½ green)</li>
                <li>4 cloves Garlic</li>
                <li>3 roma tomatoes , very finely diced (or 8 oz. tomato sauce)</li>
                <li>Bay leaf</li>
                <li>1 teaspoon paprika , sweet or smoked</li>
                <li>1 pinch saffron threads*</li>
                <li>Salt and pepper</li>
                <li>¼ cup white wine</li>
                <li>4 boneless , skinless chicken thighs , cut into pieces*</li>
                <li>¼ cup fresh chopped parsley chopped, divided</li>
                <li>2 cups Spanish Rice*</li>
                <li>5 cups Chicken Broth*</li>
                <li>1/2 cup frozen peas</li>
                <li>½ lb Jumbo Shrimp or prawns , about 12 – peeled, tail on</li>
                <li>1/2 lb Mussels (about 10-12), cleaned properly (beards off)</li>
                <li>8 oz calamari rings</li>
                <li>Lemons , for garnish</li>
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
              This iconic Spanish rice dish is all about building layers of
              flavor and achieving that coveted crispy bottom. The technique
              requires patience and restraint.
            </p>
            <p>
              The initial sofrito of vegetables creates the flavor foundation,
              while the saffron and paprika add color and depth. The key is
              resisting the urge to stir once the rice is added - this
              undisturbed cooking creates the prized socarrat, that
              golden-crispy layer at the bottom.
            </p>
            <p>
              A tip from my kitchen: Use a wide, shallow pan to maximize the
              surface area for the socarrat to form. And pay attention to the
              sound - when you hear a subtle crackling near the end of cooking,
              that's the socarrat developing. The 10-minute rest at the end
              isn't optional - it allows the rice to finish cooking and flavors
              to settle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe33;
