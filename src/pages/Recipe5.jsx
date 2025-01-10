import ceviche from "../assets/images/belize-images/ceviche.jpg";

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
                src={ceviche}
                alt="Sole Meunière"
                className="w-full h-[200px] sm:h-[330px] object-cover rounded-lg shadow-md mt-8 z-10"
              />
              <p className="relative mt-2 text-xs text-center text-gray-500 sm:text-sm 2xl:text-lg sm:text-right italic">
                Image credit -{" "}
                <a
                  href="https://www.freepik.com/free-photo/top-view-bowl-seafood-with-lime-avocado_28741951.htm#fromView=image_search_similar&page=1&position=0&uuid=841667ff-5a2b-4317-9bd3-233e62983775&new_detail=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  wirestock on Freepik
                </a>
              </p>
            </div>
          </div>

          {/* Right column - Title and Ingredients */}
          <div className="relative z-10 space-y-8">
            <div className="text-center sm:text-left">
              <h1 className="mb-2 text-2xl text-center font-serif text-red-500 sm:text-2xl lg:text-4xl 2xl:text-5xl sm:ml-12 lg:ml-24 2xl:ml-20 sm:text-yellow-500 md:text-blue-700 lg:text-gray-600 xl:text-purple-700 2xl:text-green-700 3xl:text-orange-700">
                Ceviche
              </h1>
              <p className="text-sm text-center italic text-gray-600 sm:text-md sm:ml-12 lg:ml-24 2xl:text-lg">
                Original recipe from{" "}
                <a
                  href="https://www.cookingclassy.com/ceviche/#jump-to-recipe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  cookingclassy.com
                </a>
              </p>
            </div>

            <div>
              <h2 className="pl-20 mb-3 text-xl font-serif text-gray-800 sm:text-2xl 2xl:text-4xl 2xl:mb-4">
                Ingredients
              </h2>
              <ul className="pl-20 list-disc space-y-2 text-sm text-gray-700 sm:text-base lg:text-lg 2xl:text-2xl z-10">
                <li>
                  1 1/4 lbs. medium shrimp, peeled, deveined and tails removed
                </li>
                <li>1/3 cup fresh lime juice</li>
                <li>1/3 cup fresh lemon juice</li>
                <li>2 medium roma o matoes, diced (1 cup)</li>
                <li>3/4 cup chopped red onion</li>
                <li>1/2 cup chopped cilantro</li>
                <li>
                  1 medium jalapeno pepper,* seeded if preferred for less heat,
                  diced
                </li>
                <li>Salt and pepper, to taste</li>
                <li>1/2 medium cucumber, peeled and diced (about 1 cup)</li>
                <li>1 medium avocado, diced</li>
                <li>
                  Transfer to refrigerator and let rest 30 minutes to 1 hour.
                </li>
                <li>
                  Toss in cucumber and avocado and serve (if desired you can
                  strain off some of the juices). It's delicious with tortilla
                  chips or over tostada shells.
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
              This refreshing ceviche recipe has been adapted from both Belizean
              and Mexican coastal traditions. While ceviche variations can be
              found throughout Latin America, this version balances the bright
              citrus flavors with perfectly cooked seafood.
            </p>
            <p>
              A key discovery I've made is that briefly pre-cooking the shrimp
              provides both food safety and perfect texture. While traditional
              ceviche often 'cooks' the seafood in citrus juice alone, this
              method gives you more control over the final texture while
              maintaining that fresh, bright flavor.
            </p>
            <p>
              The ratio of lime to lemon juice is crucial - too much of either
              can overwhelm the delicate seafood. I've found that letting the
              mixture marinate for just 30 minutes to an hour allows the flavors
              to meld while keeping the vegetables crisp. Any longer and the
              acidity can start to break down the tender shrimp.
            </p>
            <p>
              A tip from my kitchen: add the avocado just before serving to
              prevent browning, and if you're serving with chips, choose thick
              tortilla chips that can hold up to the substantial texture. While
              some prefer to drain off excess juice, I love serving it with a
              bit of the citrus marinade - it makes for fantastic dipping!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe1;
