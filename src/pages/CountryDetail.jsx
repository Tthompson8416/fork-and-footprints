import { useParams } from "react-router-dom";

function CountryDetail() {
  const { id } = useParams();

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Discover {id}</h2>
      <p className="text-lg">Details about the food, culture, and travel highlights of {id}</p>
      <img 
      src="https://via.placeholder.com/500x300"
      alt={`Highlights of ${id}`}
      className="rounded-lg"
      />
    </div>
  );
}

export default CountryDetail;