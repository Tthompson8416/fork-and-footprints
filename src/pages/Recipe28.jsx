import fishCroquettes from "../assets/images/portugal-images/fish-croquettes.jpg";

const Recipe28 = () => {
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
                src={fishCroquettes}
                alt="Bolinhos de Bacalhau"
                className="w-full h-[200px] sm:h-[330px] object-cover rounded-lg shadow-md mt-8 z-10"
              />
              <p className="relative mt-2 text-xs text-center text-gray-500 sm:text-sm 2xl:text-lg sm:text-right italic">
                Image credit -{" "}
                <a
                  href="https://www.freepik.com/free-photo/bowl-with-croquettes-napkin-defused-background_25066904.htm#fromView=image_search_similar&page=1&position=1&uuid=03fac7f8-b7dc-446a-a619-870b341822d1&new_detail=true"
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
              <h1 className="mb-2 text-2xl text-center font-serif text-custom-accent sm:text-2xl lg:text-4xl 2xl:text-5xl sm:ml-12 lg:ml-24 2xl:ml-20">
                Bolinhos de Bacalhau
              </h1>
              <p className="text-sm text-center italic text-gray-600 sm:text-md sm:ml-12 lg:ml-24 2xl:text-lg">
                Original recipe from{" "}
                <a
                  href="https://lizzylovesfood.com/wprm_print/portuguese-fish-cakes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  lizzylovesfood.com
                </a>
              </p>
            </div>

            <div>
              <h2 className="pl-20 mb-3 text-xl font-serif text-gray-800 sm:text-2xl 2xl:text-4xl 2xl:mb-4">
                Ingredients
              </h2>
              <ul className="pl-20 list-disc space-y-2 text-sm text-gray-700 sm:text-base lg:text-lg 2xl:text-2xl z-10">
                <li>1.5 lb salt cod fish</li>
                <li>1.5 lb potatoes</li>
                <li>1 ½ cup onion finely chopped</li>
                <li>1 cup parsley chopped</li>
                <li>¼ cup garlic finely chopped</li>
                <li>2 eggs lightly beaten</li>
                <li>Vegetable oil for deep frying</li>
                <li>Lemons sliced</li>
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
              These beloved Portuguese salt cod croquettes transform humble
              ingredients into crispy, golden morsels of comfort. The technique
              demands attention to detail.
            </p>
            <p>
              The key lies in achieving the perfect texture - hand-mashing
              ensures the ideal consistency, while removing excess moisture
              prevents the croquettes from becoming soggy. The torpedo shape
              isn't just traditional - it ensures even cooking and maximum
              crispiness.
            </p>
            <p>
              A tip from my kitchen: When shaping the bolinhos, keep a bowl of
              cold water nearby to dip your spoons - this prevents sticking and
              helps create that classic smooth exterior. And don't skip the
              final squeeze of lemon - its brightness perfectly balances the
              rich, salty filling.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe28;
