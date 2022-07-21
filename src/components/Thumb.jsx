import "../style/Thumb.css";
import { Link } from "react-router-dom";

function Thumb({ id, title, cover }) {
  return (
    <div className="location-card">
      <Link className="link-thumb" key={id} to={"/fiche-logement?id=" + id}>
        <img
          className="location-card-img"
          src={cover}
          alt={"image de " + title}
        ></img>

        <h3>{title}</h3>
      </Link>
    </div>
  );
}

export default Thumb;
