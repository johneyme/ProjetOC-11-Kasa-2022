import "../style/Thumb.css";

function Thumb({ id, title, cover }) {
  function handleClick(id) {
    console.log("✨ Ceci est mon id", id);
  }

  return (
    <div
      className="location-card"
      style={{ backgroundImage: `url(${cover})` }}
      key={id}
      id={id}
      onClick={() => handleClick(id)}
    >
      <h3>{title}</h3>
    </div>
  );
}

export default Thumb;
