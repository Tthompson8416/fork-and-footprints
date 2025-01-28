import parmigiana from "../assets/images/italy-images/parmigiana.png";

const Recipe21 = () => {
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
                src={parmigiana}
                alt="Parmigiana"
                className="w-full h-[200px] sm:h-[330px] object-cover rounded-lg shadow-md mt-8 z-10"
              />
              <p className="relative mt-2 text-xs text-center text-gray-500 sm:text-sm 2xl:text-lg sm:text-right italic">
                Image credit -{" "}
                <a
                  href="https://www.freepik.com/free-ai-image/readytoeat-lasagna-gourmet-plate-generated-by-ai_41312286.htm#fromView=search&page=1&position=0&uuid=ddd9e342-3c11-4b14-b94d-90003efec4b0&new_detail=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Vecstock on Freepik{" "}
                </a>
              </p>
            </div>
          </div>

          {/* Right column - Title and Ingredients */}
          <div className="relative z-10 space-y-8">
            <div className="text-center sm:text-left">
              <h1 className="mb-2 text-2xl text-center font-serif text-custom-accent sm:text-2xl lg:text-4xl 2xl:text-5xl sm:ml-12 lg:ml-24 2xl:ml-20">
                Parmigiana
              </h1>
              <p className="text-sm text-center italic text-gray-600 sm:text-md sm:ml-12 lg:ml-24 2xl:text-lg">
                Original recipe from{" "}
                <a
                  href="https://www.allrecipes.com/recipe/8975/chicken-parmigiana/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  allrecipes.com
                </a>
              </p>
            </div>

            <div>
              <h2 className="pl-20 mb-3 text-xl font-serif text-gray-800 sm:text-2xl 2xl:text-4xl 2xl:mb-4">
                Ingredients
              </h2>
              <ul className="pl-20 list-disc space-y-2 text-sm text-gray-700 sm:text-base lg:text-lg 2xl:text-2xl z-10">
                <li>1 egg, beaten</li>
                <li>2 ounces dry bread crumbs</li>
                <li>2 skinless, boneless chicken breast halves</li>
                <li>¾ (16 ounce) jar spaghetti sauce</li>
                <li>2 ounces shredded mozzarella cheese</li>
                <li>¼ cup grated Parmesan cheese</li>
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
              This Italian-American comfort food classic transforms simple
              chicken into a deliciously satisfying meal. The two-stage baking
              process is key.
            </p>
            <p>
              First, the breaded chicken develops a golden crust while staying
              juicy inside. Then, layering marinara and melted cheese creates
              that signature Parmesan finish. For best results, use freshly
              grated cheeses - they melt more smoothly than pre-shredded
              varieties.
            </p>
            <p>
              A tip from my kitchen: Let the breaded chicken rest for 5 minutes
              before baking to help the coating adhere better. And don't skip
              the final baking step - it allows the flavors to meld as the
              cheese creates that coveted bubbly crust.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe21;
