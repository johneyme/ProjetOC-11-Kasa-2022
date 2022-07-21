import "../style/StarsScale.css";

function StarsScale(props) {
  const scaleValue = props.scaleValue;

  const range = [1, 2, 3, 4, 5];

  return (
    <div className="stars-grid">
      {range.map((rangeElem) =>
        scaleValue >= rangeElem ? (
          <span
            key={rangeElem.toString()}
            className="material-symbols-outlined"
          >
            star
          </span>
        ) : (
          <span
            key={rangeElem.toString()}
            className="material-symbols-outlined empty-star"
          >
            star
          </span>
        )
      )}
    </div>
  );
}

export default StarsScale;
