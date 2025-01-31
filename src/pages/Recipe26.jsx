import poffertjes from "../assets/images/netherlands-images/poffertjes.jpg";

const Recipe26 = () => {
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
                src={poffertjes}
                alt="Poffertjes"
                className="w-full h-[200px] sm:h-[330px] object-cover rounded-lg shadow-md mt-8 z-10"
              />
              <p className="relative mt-2 text-xs text-center text-gray-500 sm:text-sm 2xl:text-lg sm:text-right italic">
                Image credit -{" "}
                <a
                  href="https://www.vecteezy.com/free-photos/stack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Image by Vecteezy{" "}
                </a>
              </p>
            </div>
          </div>

          {/* Right column - Title and Ingredients */}
          <div className="relative z-10 space-y-8">
            <div className="text-center sm:text-left">
              <h1 className="mb-2 text-2xl text-center font-serif text-custom-accent sm:text-2xl lg:text-4xl 2xl:text-5xl sm:ml-12 lg:ml-24 2xl:ml-20">
                Poffertjes
              </h1>
              <p className="text-sm text-center italic text-gray-600 sm:text-md sm:ml-12 lg:ml-24 2xl:text-lg">
                Original recipe from{" "}
                <a
                  href="https://www.wandercooks.com/poffertjes-dutch-mini-pancakes/#recipe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  wandercooks.com
                </a>
              </p>
            </div>

            <div>
              <h2 className="pl-20 mb-3 text-xl font-serif text-gray-800 sm:text-2xl 2xl:text-4xl 2xl:mb-4">
                Ingredients
              </h2>
              <ul className="pl-20 list-disc space-y-2 text-sm text-gray-700 sm:text-base lg:text-lg 2xl:text-2xl z-10">
                <li>
                  1 1/2 cups milk 375ml / 12.68floz very warm but not hot (1 1/2
                  minutes on high in microwave), sub oat or almond milk
                </li>
                <li>2 1/2 tsp instant yeast 7g slightly heaped</li>
                <li>
                  2 cups plain flour / all purpose flour 280g / 9.87oz sub
                  buckwheat flour or half and half
                </li>
                <li>1 egg</li>
                <li>¼ cup sugar</li>
                <li>2 tbsp butter 25g, softened or melted to grease pan</li>
                <li>1/2 tbsp icing sugar / powdered sugar to dust</li>
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
              This recipe for Poffertjes, those delightful little Dutch pancake
              puffs, comes from my journey exploring traditional Dutch treats.
              While these mini pancakes may look simple, achieving that perfect
              fluffy texture has been a delightful learning experience.
            </p>
            <p>
              The secret, I've discovered, lies in the yeast and proper rising
              time. Unlike regular pancakes, these tiny treats need that extra
              time to develop their characteristic light, airy texture. I've
              learned that placing the bowl in a warm spot (I use my oven with
              just the light on) helps achieve that perfect rise, especially on
              cooler days.
            </p>
            <p>
              A traditional poffertjes pan is ideal, but don't let that stop you
              - I started making these with a regular frying pan before
              investing in the special pan. The chopstick flip technique might
              feel awkward at first, but after a few batches, you'll develop a
              rhythm that makes the process almost meditative.
            </p>
            <p>
              My favorite tip: keep the butter handy while cooking. A light
              brush between batches not only prevents sticking but adds that
              lovely golden color. And while a dusting of powdered sugar is
              traditional, I sometimes drizzle them with Dutch stroop (syrup) or
              add a small pat of butter that melts beautifully into the warm
              puffs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe26;
