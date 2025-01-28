import pozole from "../assets/images/mexico-images/pozole.png";

const Recipe24 = () => {
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
                src={pozole}
                alt="Pozole"
                className="w-full h-[200px] sm:h-[330px] object-cover rounded-lg shadow-md mt-8 z-10"
              />
              <p className="relative mt-2 text-xs text-center text-gray-500 sm:text-sm 2xl:text-lg sm:text-right italic">
                Image credit -{" "}
                <a
                  href="https://www.pexels.com/photo/pozole-soup-in-a-bowl-14179986/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Gonzalo Guzmán García on Pexels{" "}
                </a>
              </p>
            </div>
          </div>

          {/* Right column - Title and Ingredients */}
          <div className="relative z-10 space-y-8">
            <div className="text-center sm:text-left">
              <h1 className="mb-2 text-2xl text-center font-serif text-custom-accent sm:text-2xl lg:text-4xl 2xl:text-5xl sm:ml-12 lg:ml-24 2xl:ml-20">
                Pozole Rojo{" "}
              </h1>
              <p className="text-sm text-center italic text-gray-600 sm:text-md sm:ml-12 lg:ml-24 2xl:text-lg">
                Original recipe from{" "}
                <a
                  href="https://gypsyplate.com/pozole-rojo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  gypsyplate.com
                </a>
              </p>
            </div>

            <div>
              <h2 className="pl-20 mb-3 text-xl font-serif text-gray-800 sm:text-2xl 2xl:text-4xl 2xl:mb-4">
                Ingredients
              </h2>
              <ul className="pl-20 list-disc space-y-2 text-sm text-gray-700 sm:text-base lg:text-lg 2xl:text-2xl z-10">
                <li>2 pounds pork shoulder or pork butt, cut into large chunks</li>
                <li>2.5 pounds pork neck bones (you can sub with country style ribs or spare ribs)</li>
                <li>1.25 medium onion, cut into quarters, divided</li>
                <li>4 bay leaves</li>
                <li>12 large garlic cloves, divided</li>
                <li>2 chicken bouillon cubes</li>
                <li>2 tsp salt</li>
                <li>1 Tbsp Mexican or regular oregano</li>
                <li>2 tsp cumin</li>
                <li>1 tsp pepper</li>
                <li>6 guajillo chilis, stems and seeds removed</li>
                <li>6 ancho chilis, stems and seeds removed</li>
                <li>2 corn tortillas</li>
                <li>2 25oz cans white hominy, drained</li>
                <p>Toppings</p>
                <li>cabbage, thinly shredded</li>
                <li>yellow or white onion, diced</li>
                <li>fresh cilantro, chopped</li>
                <li>lime wedges</li>
                <li>radishes, thinly sliced</li>
                <li>avocado (optional)</li>
                <li>warm corn or flour tortillas, for serving</li>
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
              This hearty Mexican soup is a celebration of tender pork and
              hominy in a rich, chile-infused broth. The layered cooking process
              builds deep flavors.
            </p>
            <p>
              The initial step of creating a clear broth is crucial - taking
              time to skim the impurities results in a clean-tasting base. The
              sauce, made from rehydrated chiles and tortillas, adds complexity
              and body. Straining this sauce is optional but creates a more
              refined texture.
            </p>
            <p>
              A tip from my kitchen: Don't rush the meat-cooking process - the
              pork should be tender enough to shred easily but still hold its
              shape. And while the garnishes are optional, they're an essential
              part of the pozole experience, allowing each person to customize
              their bowl.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe24;
