import poutine from "../assets/images/canada-images/poutine.jpg";

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
                src={poutine}
                alt="Sole Meunière"
                className="w-full h-[200px] sm:h-[330px] object-cover rounded-lg shadow-md mt-8 z-10"
              />
            </div>
          </div>

          {/* Right column - Title and Ingredients */}
          <div className="relative z-10 space-y-8">
            <div className="text-center sm:text-left">
              <h1 className="mb-2 text-2xl text-center font-serif text-custom-accent sm:text-2xl lg:text-4xl 2xl:text-5xl sm:ml-12 lg:ml-24 2xl:ml-20">
                Butter Tarts
              </h1>
              <p className="text-sm text-center italic text-gray-600 sm:text-md sm:ml-12 lg:ml-24 2xl:text-lg">
                Original recipe from{" "}
                <a
                  href="https://www.rockrecipes.com/best-classic-canadian-butter-tarts/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  rockrecipes.com
                </a>
              </p>
            </div>

            <div>
              <h2 className="pl-20 mb-3 text-xl font-serif text-gray-800 sm:text-2xl 2xl:text-4xl 2xl:mb-4">
                Ingredients
              </h2>
              <ul className="pl-20 space-y-2 text-sm text-gray-700 sm:text-base lg:text-lg 2xl:text-2xl z-10 list-disc">
                <p className="text-md font-bold">For the Pastry:</p>
                <li>
                  2 ¼ cups flour, pastry flour is best to use but all-purpose
                  will do
                </li>
                <li>1 tbsp brown sugar</li>
                <li>½ tsp salt</li>
                <li>1/2 cup shortening, very cold and cut in cubes</li>
                <li>1/2 cup butter, very cold and cut in cubes</li>
                <li>
                  6 tbsp ice water, approximately, enough to bring the dough
                  together
                </li>
                <p className="text-md font-bold">For the Filling:</p>
                <li>1/2 cup lightly packed brown sugar</li>
                <li>1/2 cup corn syrup</li>
                <li>1/4 cup butter, melted</li>
                <li>1 egg</li>
                <li>1 tsp vanilla extract</li>
                <li>1/4 tsp salt</li>
                <li>
                  ½ cup raisins, substituting, pecans, walnuts or chocolate
                  chips also make good variations
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
              This butter tart recipe represents my take on one of Canada's most
              beloved desserts. While many variations exist, this version
              delivers that perfect balance between a flaky crust and gooey
              filling: The secret to exceptional butter tarts lies in two key
              elements: the pastry temperature and filling consistency. The
              pastry must be cold when it hits the hot oven - this creates those
              flaky layers that contrast beautifully with the filling. Chilling
              the shaped tarts before filling them isn't just a suggestion, it's
              crucial for the final texture.
            </p>
            <p>
              For the filling, I've found that adding the raisins first ensures
              they stay distributed evenly rather than floating to the top. The
              filling should be runny when it goes into the oven - it will set
              as it bakes. How much it sets is a matter of preference; some
              prefer a firmer filling, others love it when it runs a bit when
              bitten into.
            </p>
            <p>
              A tip from my kitchen: watch the tarts carefully in the last few
              minutes of baking. You want the filling to bubble and the edges to
              brown, but overcooking will make the filling too firm.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe1;
