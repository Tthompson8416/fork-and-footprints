import conchFritters from "../assets/images/belize-images/conch-fritters.jpg";

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
                src={conchFritters}
                alt="Sole Meunière"
                className="w-full h-[200px] sm:h-[330px] object-cover rounded-lg shadow-md mt-8 z-10"
              />
              <p className="relative mt-2 text-xs text-center text-gray-500 sm:text-sm 2xl:text-lg sm:text-right italic">
                Image credit -{" "}
                <a
                  href="https://www.freepik.com/free-photo/high-angle-bowl-with-delicious-boneless-chicken_35022701.htm#fromView=image_search_similar&page=1&position=0&uuid=0e239c4c-f5ea-4462-8850-82cd8b5d9ec7&new_detail=true"
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
                Belizean Conch Fritters
              </h1>
              <p className="text-sm text-center italic text-gray-600 sm:text-md sm:ml-12 lg:ml-24 2xl:text-lg">
                Original recipe from{" "}
                <a
                  href="https://belize-travel-blog.chaacreek.com/2015/01/learn-how-to-make-belizean-conch-fritters/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  belize-travel-blog.chaacreek.com
                </a>
              </p>
            </div>

            <div>
              <h2 className="pl-20 mb-3 text-xl font-serif text-gray-800 sm:text-2xl 2xl:text-4xl 2xl:mb-4">
                Ingredients
              </h2>
              <ul className="pl-20 list-disc space-y-2 text-sm text-gray-700 sm:text-base lg:text-lg 2xl:text-2xl z-10">
                <li>1 1/2 pounds of Belizean conch</li>
                <li>1 sweet pepper (medium size)</li>
                <li>1 onion (medium size)</li>
                <li>1 1/4 cup of flour</li>
                <li>1 1/2 cup of water</li>
                <li>5 leaves of your choice of herb (cilantro, basil, etc…)</li>
                <li>1 celery stalk</li>
                <li>1/4 teaspoon of salt</li>
                <li>1/4 teaspoon of pepper</li>
                <li>1/4 of Habanero chili pepper (optional)</li>
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
              This recipe for Belizean Conch Fritters has been adapted from my
              experiences with Caribbean coastal cuisine. While conch fritters
              are popular throughout the Caribbean, this Belizean version has
              its own special character.
            </p>
            <p>
              I've learned that the secret to exceptional conch fritters lies in
              the preparation of the conch itself. The texture needs to be just
              right - chopping too fine makes the fritters rubbery, while too
              coarse means they won't hold together well. The quick pulses in
              the blender help achieve that perfect consistency, where you can
              still taste distinct pieces of conch in each bite.
            </p>
            <p>
              Through trial and error, I've found that the batter consistency is
              crucial - it should be like cake batter, but not too thin. The
              vegetables need to be chopped before blending to ensure they're
              evenly distributed without becoming too mushy. A tip from my
              kitchen: if your oil isn't hot enough, the fritters will absorb
              too much oil and become heavy. Test the oil with a tiny drop of
              batter - it should sizzle immediately.
            </p>
            I love serving these golden-brown fritters with a squeeze of fresh
            lime and some Caribbean-style hot sauce. They're best enjoyed
            immediately while crispy and hot, preferably with a view of the
            ocean (though my kitchen view works too!).
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe1;
