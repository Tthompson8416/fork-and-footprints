import soleMeuniere from "../assets/images/belgium-images/sole-meuniere.jpg";

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
                src={soleMeuniere}
                alt="Sole Meunière"
                className="w-full h-[200px] sm:h-[330px] object-cover rounded-lg shadow-md mt-8 z-10"
              />
              <p className="relative mt-2 text-xs text-center text-gray-500 sm:text-sm 2xl:text-lg sm:text-right italic">
                Image credit -{" "}
                <a
                  href="https://www.freepik.com/free-photo/top-half-view-chicken-with-cheese-platter-parsley-half-lemon-cherry-tomatoes-grey-table_13844607.htm#fromView=image_search_similar&page=1&position=12&uuid=f9d1f921-40b5-4a8a-aee7-40f40447005e&new_detail=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Kamran Aydinov on Freepik
                </a>
              </p>
            </div>
          </div>

          {/* Right column - Title and Ingredients */}
          <div className="relative z-10 space-y-8">
            <div className="text-center sm:text-left">
              <h1 className="mb-2 text-2xl text-center font-serif text-red-500 sm:text-2xl lg:text-4xl 2xl:text-5xl sm:ml-12 lg:ml-24 2xl:ml-20 sm:text-yellow-500 md:text-blue-700 lg:text-gray-600 xl:text-purple-700 2xl:text-green-700 3xl:text-orange-700">
                Sole Meunière
              </h1>
              <p className="text-sm text-center italic text-gray-600 sm:text-md sm:ml-12 lg:ml-24 2xl:text-lg">
                Original recipe from{" "}
                <a
                  href="https://noseychef.com/2021/10/20/sole-meuniere/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  noseychef.com
                </a>
              </p>
            </div>

            <div>
              <h2 className="pl-12 mb-3 text-xl font-serif text-gray-800 sm:text-2xl 2xl:text-4xl 2xl:mb-4">
                Ingredients
              </h2>
              <ul className="pl-12 space-y-2 text-sm text-gray-700 sm:text-base lg:text-lg 2xl:text-2xl z-10">
                <li>All-purpose flour, for dredging (about 1/2cup)</li>
                <li>
                  1 1/2 pounds (680g) thin boneless, skinless sole or other
                  white-fleshed fish fillets
                </li>
                <li>Kosher salt</li>
                <li>
                  4 tablespoons (60g) homemade or store-bought clarified butter,
                  plus more if needed
                </li>
                <li>
                  6 tablespoons (90g) unsalted butter, cut into 1-tablespoon
                  pieces
                </li>
                <li>1 lemon, cut into wedges, plus more for serving</li>
                <li>
                  1 1/2 tablespoons (1/4 ounce; 8g) flat-leaf parsley leaves and
                  tender stems
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
              This classic Sole Meunière recipe has become my go-to method for
              preparing this elegant French fish dish. Through many attempts at
              perfecting this seemingly simple but technique-driven recipe, I've
              learned that success lies in the details: The key is starting with
              high-quality, fresh Dover sole (though you can also use other
              delicate white fish). I've found that patting the fish completely
              dry before dredging in flour makes a huge difference in achieving
              that perfect golden crust.
            </p>
            <p>
              The flour coating should be light - just a whisper, really - shake
              off any excess or you'll end up with a gummy coating instead of
              that signature crisp exterior. The magic happens in the basting
              step - it's a technique that requires attention but rewards you
              with perfectly cooked fish.
            </p>
            <p>
              When making the sauce, that moment when the butter starts foaming
              and turns slightly nutty is crucial - the French call this 'beurre
              noisette' (brown butter), and it's what gives this dish its
              characteristic flavor. The splash of lemon juice not only cuts
              through the richness but also creates a beautiful emulsion with
              the butter.
            </p>
            <p>
              A personal tip: I like to warm the plates before serving, as this
              dish is best enjoyed immediately while the butter sauce is still
              warm and the fish is at its crispiest.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe1;
