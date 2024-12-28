const CountryCard = ({ name, image, pageLink }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 max-w-[clamp(280px, 90%, 350px)] mx-auto">
      <img
        src={image}
        alt={name}
        className="w-[clamp(160px, 40vw, 700px)] h-[clamp(160px, 40vw, 600px)] object-contain sm:h-[150px] sm:object-cover sm:w-[300px] md:w-[375px] md:h-[230px] 2xl:w-[540px] 2xl:h-[300px] rounded-t-lg"
      />
      <h1 className="text-[clamp(1rem, 2.5vw, 1.5rem)] font-bold mt-4 text-center text-black sm:text-red-500 md:text-blue-500 lg:text-yellow-500 xl:text-green-500 2xl:text-purple-600 3xl:text-orange-400">
        {name}
      </h1>
      <button
        className="mt-4 px-[clamp(0.5rem, 1.5vw, 1rem)] py-[clamp(0.3rem, 1vw, 0.5rem)] bg-blue-500 text-white rounded hover:bg-blue-600 mx-auto block"
        onClick={() => (window.location.href = pageLink)}
      >
        Learn More
      </button>
    </div>
  );
};

export default CountryCard;
