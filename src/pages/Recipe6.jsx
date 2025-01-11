import salbutes from "../assets/images/belize-images/salbutes.png";

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
                src={salbutes}
                alt="Salbutes"
                className="w-full h-[200px] sm:h-[330px] object-cover rounded-lg shadow-md mt-8 z-10"
              />
              <p className="relative mt-2 text-xs text-center text-gray-500 sm:text-sm 2xl:text-lg sm:text-right italic">
                Image credit -{" "}
                <a
                  href="https://www.freepik.com/free-photo/mexican-tacos-with-chicken-bell-peppers-black-beans-fresh-vegetables_7698274.htm#fromView=image_search_similar&page=1&position=2&uuid=22197ac7-f505-4fcd-805b-438aa8639604&new_detail=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  timolina on Freepik
                </a>
              </p>
            </div>
          </div>

          {/* Right column - Title and Ingredients */}
          <div className="relative z-10 space-y-8">
            <div className="text-center sm:text-left">
              <h1 className="mb-2 text-2xl text-center font-serif text-custom-accent sm:text-2xl lg:text-4xl 2xl:text-5xl sm:ml-12 lg:ml-24 2xl:ml-20">
                Salbutes
              </h1>
              <p className="text-sm text-center italic text-gray-600 sm:text-md sm:ml-12 lg:ml-24 2xl:text-lg">
                Original recipe from{" "}
                <a
                  href="https://ambergriscaye.com/forum/ubbthreads.php/topics/433552/belizean-salbutes.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  ambergriscaye.com
                </a>
              </p>
            </div>

            <div>
              <h2 className="pl-20 mb-3 text-xl font-serif text-gray-800 sm:text-2xl 2xl:text-4xl 2xl:mb-4">
                Ingredients
              </h2>
              <ul className="pl-20 space-y-2 text-sm text-gray-700 sm:text-base lg:text-lg 2xl:text-2xl z-10 list-disc">
                <li>2 lbs masa (corn dough)</li>
                <li>1 1-inch cube red recado</li>
                <li>1 lb stewed boneless chicken breast</li>
                <li>1 head lettuce, chopped</li>
                <li>1 lb tomato</li>
                <li>1 lb yellow onions</li>
                <li>Limes</li>
                <li>Habanero peppers</li>
                <li>1 medium green pepper</li>
                <li>1 bunch cilantro</li>
                <li>Salt & Cooking oil</li>
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
              This recipe for Belizean Salbutes showcases one of my favorite
              street foods from Belize. While you can find variations throughout
              Central America, these puffy corn tortillas with their savory
              toppings have a special place in Belizean cuisine: The secret to
              perfect Salbutes lies in the masa dough - it needs to be just the
              right consistency, not too wet or too dry. I've found that when
              pressing the tortillas, you want them thin enough to puff when
              fried, but thick enough to hold their toppings. That magical
              moment when they inflate in the hot oil is what gives salbutes
              their characteristic texture.
            </p>
            <p>
              The chicken preparation might seem simple, but that reserved broth
              becomes crucial later - it's used to pickle the onions, creating a
              perfect tangy topping that cuts through the richness of the fried
              base. I've learned that allowing the onions to steep in the hot
              broth with jalapeños and vinegar for exactly 10 minutes gives them
              the perfect tender-crisp texture while absorbing all those
              flavors.
            </p>
            <p>
              A tip from my kitchen: serve these immediately while the base is
              still warm and slightly crispy. If you're making them for a crowd,
              you can keep the fried bases warm in a low oven while preparing
              the toppings. Some people like to add fresh tomatoes or avocado on
              top, but I love them in their pure form with just the pickled
              onions and tender chicken.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe1;
