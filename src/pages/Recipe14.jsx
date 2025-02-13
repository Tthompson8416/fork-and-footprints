import coqAuVin from "../assets/images/france-images/coq-au-vin.jpg";

const Recipe14 = () => {
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
                src={coqAuVin}
                alt="Coq au Vin"
                className="w-full h-[200px] sm:h-[330px] object-cover rounded-lg shadow-md mt-8 z-10"
              />
              <p className="relative mt-2 text-xs text-center text-gray-500 sm:text-sm 2xl:text-lg sm:text-right italic">
                Image credit -{" "}
                <a
                  href="https://www.freepik.com/free-photo/duck-breast-steak-white-plate_1144612.htm#fromView=image_search_similar&page=1&position=1&uuid=e041e8a3-7544-4b35-ada1-70461ee82f69&new_detail=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Mrsiraphol on Freepik
                </a>
              </p>
            </div>
          </div>

          {/* Right column - Title and Ingredients */}
          <div className="relative z-10 space-y-8">
            <div className="text-center sm:text-left">
              <h1 className="mb-2 text-2xl text-center font-serif text-custom-accent sm:text-2xl lg:text-4xl 2xl:text-5xl sm:ml-12 lg:ml-24 2xl:ml-20">
                Coq au Vin
              </h1>
              <p className="text-sm text-center italic text-gray-600 sm:text-md sm:ml-12 lg:ml-24 2xl:text-lg">
                Original recipe from{" "}
                <a
                  href="https://www.delish.com/cooking/recipe-ideas/a30875984/coq-au-vin-recipe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  delish.com
                </a>
              </p>
            </div>

            <div>
              <h2 className="pl-20 mb-3 text-xl font-serif text-gray-800 sm:text-2xl 2xl:text-4xl 2xl:mb-4">
                Ingredients
              </h2>
              <ul className="pl-20 list-disc space-y-2 text-sm text-gray-700 sm:text-base lg:text-lg 2xl:text-2xl z-10">
                <li>8-oz. pearl onions, peeled</li>
                <li>6 strips bacon, cut into 1" pieces</li>
                <li>
                  3 lb. bone-in, combination of skin-on chicken thighs and
                  drumsticks
                </li>
                <li>Kosher salt</li>
                <li>Freshly ground black pepper</li>
                <li>8 oz. baby bella mushrooms, quartered</li>
                <li>1 large carrot, peeled and chopped</li>
                <li>2 cloves garlic, minced</li>
                <li>1 Tbsp. tomato paste</li>
                <li>2 Tbsp. all-purpose flour</li>
                <li>2 c. red wine</li>
                <li>1 c. low-sodium chicken broth</li>
                <li>1 Tbsp. brandy</li>
                <li>Small bunch thyme</li>
                <li>3 Tbsp. butter</li>
                <li>Freshly chopped parsley, for serving</li>
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
              This classic French Coq au Vin recipe was inspired by Delish.com's
              version. I've adapted it to share my experience with this rustic
              chicken dish that's perfect for special occasions.
            </p>
            <p>
              Here's my take on this beautiful braised chicken in wine sauce:
              The magic starts with pearl onions, briefly blanched to make
              peeling easier. While traditional, you can substitute regular
              diced onions if pearl onions are hard to find. The base of the
              dish builds flavor with crispy bacon, which adds a wonderful
              smokiness to the final sauce.
            </p>
            <p>
              I've found the key to success is getting a beautiful golden-brown
              sear on the chicken skin - don't rush this step! The vegetables
              are then cooked in the same pot, soaking up all those delicious
              flavors. The sauce comes together with a careful blend of wine,
              broth, and a touch of brandy, creating that signature rich,
              burgundy-colored sauce. The dish finishes in the oven, where the
              chicken becomes tender and the sauce develops its complex flavor.
              I like to reduce the sauce at the end until it's silky and coats
              the back of a spoon. A sprinkle of fresh parsley and the reserved
              crispy bacon adds the perfect finishing touch.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe14;
