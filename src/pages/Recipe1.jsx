import belgianWaffle from "../assets/images/belgium-images/belgian-waffle.jpg";

const Recipe1 = () => {
  return (
    <div className="bg-custom-cream min-h-screen flex flex-col items-center px-6 py-24">
      <h1 className="text-4xl font-bold text-custom-accent mb-4 text-center">
        Belgian Waffles
      </h1>
      <p className="text-lg text-gray-700 italic text-center mb-8">
        Original recipe from -{""}
        <a
          href="https://www.krupsusa.com/Recipes/Classic-Belgian-Waffles/r/239758"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 underline"
        >
          krupusa.com
        </a>
      </p>

      {/* Recipe container */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row max-w-4xl">
        {/* Image */}
        <div className="md:w-12">
          <img
            src={belgianWaffle}
            alt="Waffles on a plate"
            className="object-cover w-full h-64 md:h-full"
          />
        </div>
        <p className="text-lg  text-gray-700 italic text-center mb-4">
          Image credit -{""}
          <a
          href="https://www.shopify.com/stock-photos"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 underline">
            Burst
          </a>
        </p>

        {/* Ingredients */}
        <div className="p-6 md:w-1/2 flex flex-col justify-between">
          <h2 className="text-2xl font-semibold text-custom-accent mb-4">
            Ingredients
          </h2>
          <ul>
            <li>2 cups all-purpose flour</li>
            <li>2 tablespoons sugar</li>
            <li>4 teaspoons baking powder</li>
            <li>1/2 teaspoon salt</li>
            <li>2 cups milk</li>
            <li>1/2 cup butter, melted, cooled</li>
            <li>3 eggs, separated</li>
          </ul>
          {/* Preparation steps */}
          <h2 className="text-2xl font-semibold text-custom-accent mb-4">
            Preparation
          </h2>
          <p className="mb-4">
            This Belgian waffle recipe has been adapted from my Krups Waffle
            Maker manual, which I've modified over countless weekend brunches to
            create the perfect golden, crispy waffle: I've discovered that the
            key to exceptional Belgian waffles lies in the technique rather than
            fancy ingredients.</p>
            <p className="mb-4">Starting with room temperature ingredients makes
            a noticeable difference in the texture. The real magic happens when
            you whip those egg whites to stiff peaks- this extra step creates
            that characteristic light, airy interior that Belgian waffles are
            famous for. Through much trial and error, I've found that letting
            the waffle maker preheat thoroughly is crucial- I usually give it an
            extra minute or two after the 'ready' light comes on.</p>
            <p>For the crispiest exterior, I actually let them cook just a few seconds
            longer than when the signal sounds. Don't worry if the first waffle
            isn't perfect- like pancakes, the first one is often the test run!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Recipe1;
