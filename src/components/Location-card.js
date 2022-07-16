import "../style/Location-card.css";

function LocationCard({ id, title, cover }) {
  return (
    <div
      className="location-card"
      style={{ backgroundImage: `url(${cover})` }}
      key={id}
    >
      <h3>{title}</h3>
    </div>
  );
}

export default LocationCard;
