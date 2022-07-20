import "../style/Thumb.css";

function Thumb({ id, title, cover }) {
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

export default Thumb;
