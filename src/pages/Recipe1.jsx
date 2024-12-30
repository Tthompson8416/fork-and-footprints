import belgianWaffle from "../assets/images/belgian-waffle.jpg";

const Recipe1 = () => {
  return (
    <div className="bg-green-50 min-h-screen flex flex-col items-center px-6 py-10">
      {/* Header */}
      <h1 className="mt-24 text-5xl font-bold text-green-900 mb-2">
        Belgian Waffles
      </h1>
      <p className="text-2xl text-gray-700 italic mb-6">
        Original recipe from -{" "}
        <a
          href="https://www.krupsusa.com/Recipes/Classic-Belgian-Waffles/r/239758"
          target="_blank"
          className="text-blue-700 text-2xl underline"
        >
          krupusa.com
        </a>
      </p>

      {/* Content Container */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row w-[275px] h-[600px]">
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src={belgianWaffle}
            alt="Waffles on a plate"
            className="object-cover h-full w-full"
          />
        </div>

        {/* Text Section*/}
        <div className="p-6 md:w-12">
          {/* Ingredients */}
          <h2 className="text-2xl font-semibold text-green-800 mb-4">
            Ingredients
          </h2>
          <ul className="list-disc list inside text-gray-700 mb-6">
            <li>2 cups all-purpose flour </li>
            <li>2 tablespoons sugar</li>
            <li>4 teaspoons baking powder</li>
            <li>1/2 teaspoon salt</li>
            <li>2 cups milk</li>
            <li>1/2 cup butter, melted, cooled</li>
            <li>3 eggs, separated</li>
          </ul>

          {/* Steps */}
          <h2 className="text-2xl font-semibold text-green-800 mb-4">
            Preparation:
          </h2>
          <p>
            This Belgian waffle recipe has been adapted from my Krups Waffle
            Maker manual, which I've modified over countless weekend brunches to
            create the perfect golden, crispy waffle: I've discovered that the
            key to exceptional Belgian waffles lies in the technique rather than
            fancy ingredients. Starting with room temperature ingredients makes
            a noticeable difference in the texture. The real magic happens when
            you whip those egg whites to stiff peaks - this extra step creates
            that characteristic light, airy interior that Belgian waffles are
            famous for. Through much trial and error, I've found that letting
            the waffle maker preheat thoroughly is crucial - I usually give it
            an extra minute or two after the 'ready' light comes on. For the
            crispiest exterior, I actually let them cook just a few seconds
            longer than when the signal sounds. Don't worry if the first waffle
            isn't perfect - like pancakes, the first one is often the test run!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Recipe1;
