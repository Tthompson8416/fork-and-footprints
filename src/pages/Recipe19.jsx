import arancini from "../assets/images/italy-images/arancini.jpeg";

const Recipe19 = () => {
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
                src={arancini}
                alt="Arancini"
                className="w-full h-[200px] sm:h-[330px] object-cover rounded-lg shadow-md mt-8 z-10"
              />
              <p className="relative mt-2 text-xs text-center text-gray-500 sm:text-sm 2xl:text-lg sm:text-right italic">
                Image credit -{" "}
                <a
                  href="https://www.pexels.com/photo/close-up-of-fried-meat-dish-on-plate-5639763/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Shameel Mukkath on Pexels
                </a>
              </p>
            </div>
          </div>

          {/* Right column - Title and Ingredients */}
          <div className="relative z-10 space-y-8">
            <div className="text-center sm:text-left">
              <h1 className="mb-2 text-2xl text-center font-serif text-custom-accent sm:text-2xl lg:text-4xl 2xl:text-5xl sm:ml-12 lg:ml-24 2xl:ml-20">
                Arancini
              </h1>
              <p className="text-sm text-center italic text-gray-600 sm:text-md sm:ml-12 lg:ml-24 2xl:text-lg">
                Original recipe from{" "}
                <a
                  href="https://www.notquitenigella.com/2020/11/09/arancini-balls-recipe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  notquitenigella.com
                </a>
              </p>
            </div>

            <div>
              <h2 className="pl-20 mb-3 text-xl font-serif text-gray-800 sm:text-2xl 2xl:text-4xl 2xl:mb-4">
                Ingredients
              </h2>
              <ul className="pl-20 list-disc space-y-2 text-sm text-gray-700 sm:text-base lg:text-lg 2xl:text-2xl z-10">
                <p>For the Risotto</p>
                <li>2 litres/0.4 gallon hot chicken stock</li>
                <li>Pinch of saffron strands</li>
                <li>1 onion, finely diced</li>
                <li>50g/1.7ozs. butter</li>
                <li>2 tablespoons olive oil</li>
                <li>500g/1.1lbs arborio rice</li>
                <li>250ml/8.8flozs white wine</li>
                <li>100g/3.5ozs. parmesan cheese</li>
                <p>For the Ragu</p>
                <li>2 tablespoons olive oil</li>
                <li>1 onion, finely diced</li>
                <li>1 carrot, finely diced</li>
                <li>1 stick celery, finely diced</li>
                <li>3 cloves garlic</li>
                <li>250g/8.8ozs pork and veal mince</li>
                <li>2 bay leaves</li>
                <li>1/2 cup/125ml/4flozs. white wine</li>
                <li>300ml/10.6flozs. spicy pasta sauce</li>
                <li>2 tablespoons tomato paste</li>
                <li>1 beef stock cube</li>
                <li>1 cup/150g/5ozs. peas</li>
                <li>Salt, pepper and sugar for seasoning</li>
                <li>50g/1.7ozs. mozzarella cheese</li>
                <li>1 cup/132g/4.7ozs. flour</li>
                <li>200ml/7flozs. water</li>
                <li>100g/3.5ozs flour</li>
                <li>3 cups/360g/12.7ozs. panko breadcrumbs</li>
                <li>2 litres/0.4 gallon oil</li>
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
              These classic Sicilian rice balls transform leftover risotto into
              an impressive appetizer or main dish. The multi-step process
              requires patience but delivers incredible results.
            </p>
            <p>
              The key is starting with properly cooled risotto - it needs to be
              completely chilled to hold its shape. The ragu filling should be
              concentrated and not too wet to prevent the balls from breaking.
              When shaping, keep your hands damp to prevent sticking, and take
              time to properly seal any gaps.
            </p>
            <p>
              A tip from my kitchen: For the crispiest exterior, process the
              breadcrumbs until very fine and make sure your oil temperature
              stays constant at 350°F (175°C). If the oil is too cool, the
              arancini will absorb excess oil; too hot and the outside will burn
              before the center heats through.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe19;
