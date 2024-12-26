// CountryCard.jsx
const CountryCard = ({ name, image, pageLink }) => {
    return (
      <div className="bg-white shadow-lg rounded-lg p-4">
        <img src={image} alt={name} className="w-full h-48 object-cover rounded-t-lg" />
        <h1 className="text-xl font-bold mt-4">{name}</h1>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => (window.location.href = pageLink)}
        >
          Learn More
        </button>
      </div>
    );
  };
  
  export default CountryCard;
  