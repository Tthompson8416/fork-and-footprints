import bitterBallen from "../assets/images/netherlands-images/bitterballen.jpg";

const Recipe25 = () => {
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
                src={bitterBallen}
                alt="Bitterballen"
                className="w-full h-[200px] sm:h-[330px] object-cover rounded-lg shadow-md mt-8 z-10"
              />
              <p className="relative mt-2 text-xs text-center text-gray-500 sm:text-sm 2xl:text-lg sm:text-right italic">
                Image credit -{" "}
                <a
                  href="https://www.freepik.com/free-photo/delicious-high-protein-meal-composition_18003154.htm#fromView=search&page=1&position=4&uuid=3a84637d-c4b6-4658-a32a-2e4a75afeef9&new_detail=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Image by Freepik{" "}
                </a>
              </p>
            </div>
          </div>

          {/* Right column - Title and Ingredients */}
          <div className="relative z-10 space-y-8">
            <div className="text-center sm:text-left">
              <h1 className="mb-2 text-2xl text-center font-serif text-custom-accent sm:text-2xl lg:text-4xl 2xl:text-5xl sm:ml-12 lg:ml-24 2xl:ml-20">
                Bitterballen{" "}
              </h1>
              <p className="text-sm text-center italic text-gray-600 sm:text-md sm:ml-12 lg:ml-24 2xl:text-lg">
                Original recipe from{" "}
                <a
                  href="https://www.jocooks.com/recipes/dutch-meatballs-bitterballen/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  jocooks.com
                </a>
              </p>
            </div>

            <div>
              <h2 className="pl-20 mb-3 text-xl font-serif text-gray-800 sm:text-2xl 2xl:text-4xl 2xl:mb-4">
                Ingredients
              </h2>
              <ul className="pl-20 list-disc space-y-2 text-sm text-gray-700 sm:text-base lg:text-lg 2xl:text-2xl z-10">
                <p>For Bitterballen</p>
                <li>8 tablespoon butter unsalted (1 stick)</li>
                <li>1 cup all-purpose flour</li>
                <li>3 cups beef broth</li>
                <li>2 tablespoon fresh parsley chopped</li>
                <li>1 small onion minced</li>
                <li>1 pound ground beef</li>
                <li>½ teaspoon salt</li>
                <li>1 teaspoon black pepper</li>
                <li>¼ teaspoon nutmeg</li>
                <p>For the Breading</p>
                <li>½ cup all-purpose flour</li>
                <li>3 eggs beaten</li>
                <li>1 cup breadcrumbs</li>
                <li>vegetable oil for frying</li>
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
              This traditional Dutch Bitterballen recipe has been refined
              through my attempts to recreate these beloved Dutch bar snacks at
              home. While inspired by authentic Dutch cooking techniques, I've
              adapted it to be more approachable for home cooks.
            </p>
            <p>
              The secret to perfect bitterballen lies in the roux - it needs to
              be thick enough to hold its shape when chilled, but not so dense
              that it becomes heavy. I've learned that patience is crucial here;
              adding the beef broth gradually while whisking prevents any lumps
              from forming. The addition of nutmeg might seem unusual, but it's
              this subtle spicing that gives bitterballen their distinctive
              Dutch flavor. Through trial and error, I've discovered that
              chilling overnight yields the best results - it makes the mixture
              much easier to shape into balls. When it comes to breading, I use
              the 'wet hand, dry hand' technique to prevent the dreaded
              breading-covered fingers. A small ice cream scoop is your best
              friend here, ensuring uniform size for even cooking.
            </p>
            <p>
              The frying temperature is critical - too hot and they'll brown
              before heating through, too cool and they'll become greasy. That
              perfect 375°F gives you the signature crispy exterior while
              keeping the inside creamy. When they float to the top with a
              golden-brown color, they're ready to serve.
            </p>
            <p>
              My favorite way to serve these is piping hot with a grainy Dutch
              mustard, though any good quality mustard works well. And a word of
              caution learned from experience - let them cool slightly before
              biting in, as the filling gets incredibly hot!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe25;
