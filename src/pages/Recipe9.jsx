import peaSoup from "../assets/images/canada-images/pea-soup.jpg";

const Recipe9 = () => {
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
                src={peaSoup}
                alt="Slit pea soup"
                className="w-full h-[200px] sm:h-[330px] object-cover rounded-lg shadow-md mt-8 z-10"
              />
              <p className="relative mt-2 text-xs text-center text-gray-500 sm:text-sm 2xl:text-lg sm:text-right italic">
                Image credit -{" "}
                <a
                  href="https://www.freepik.com/free-photo/top-view-winter-peas-soup_10555542.htm#fromView=image_search_similar&page=1&position=8&uuid=a4717cbd-a257-48e0-90b2-d9bde88af45e&new_detail=true"
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
                Split Pea Soup
              </h1>
              <p className="text-sm text-center italic text-gray-600 sm:text-md sm:ml-12 lg:ml-24 2xl:text-lg">
                Original recipe from{" "}
                <a
                  href="https://downshiftology.com/recipes/split-pea-soup/#wprm-recipe-container-66380"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  downshiftology.com
                </a>
              </p>
            </div>

            <div>
              <h2 className="pl-20 mb-3 text-xl font-serif text-gray-800 sm:text-2xl 2xl:text-4xl 2xl:mb-4">
                Ingredients
              </h2>
              <ul className="pl-20 list-disc space-y-2 text-sm text-gray-700 sm:text-base lg:text-lg 2xl:text-2xl z-10">
                <li>2 tablespoons extra-virgin olive oil</li>
                <li>1 medium onion diced</li>
                <li>3 carrots diced</li>
                <li>3 ribs of celery diced</li>
                <li>2 garlic cloves minced</li>
                <li>1 pound dried split peas rinsed</li>
                <li>½ teaspoon dried thyme</li>
                <li>½ teaspoon kosher salt</li>
                <li>½ teaspoon freshly ground black pepper</li>
                <li>1 bay leaf</li>
                <li>1 meaty ham bone (see tips and alternatives above)</li>
                <li>4 cups low-sodium chicken broth</li>
                <li>3 to 4 cups water</li>
                <li>1 cup diced ham (from ham bone or added separately)</li>
                <li>finely chopped fresh parsley, for garnish</li>
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
              This classic Dutch Erwtensoep (Split Pea Soup) recipe has been
              perfected through many cold winter days in my kitchen. While
              versions of split pea soup exist in many cultures, this hearty
              Dutch version with its thick, stick-to-your-ribs consistency is
              truly special.
            </p>
            <p>
              I've learned that the secret to great erwtensoep lies in the slow
              cooking process - rushing it will leave you with peas that aren't
              fully broken down. The Dutch say a proper erwtensoep should be
              thick enough for a spoon to stand up in it! However, I've found
              it's best to keep it slightly looser while cooking as it continues
              to thicken as it cools.
            </p>
            <p>
              The ham bone is crucial here - it infuses the soup with a deep,
              smoky flavor that you just can't get any other way. A tip from my
              kitchen: if you can't find a ham bone, smoked pork hocks make a
              good substitute. The combination of thyme and bay leaf might seem
              simple, but they're essential for that traditional Dutch flavor.
            </p>
            <p>
              Don't skip the fresh parsley at the end - it adds a bright note
              that balances the richness of the soup. In the Netherlands, this
              soup is often enjoyed the next day when the flavors have deepened
              even further.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe9;
