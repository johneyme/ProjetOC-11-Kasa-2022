//import { appartement } from "../data/data.js";
import "../style/RentalDetails.css";
import Dropdown from "../components/Dropdown";
import image from "../assets/rentalbackground.jpg";
import Tag from "../components/Tags";
import user from "../assets/userkasa.jpeg";

function RentalDetails() {
  const items = ["item 1", "item 2", "item 3", "item 4", "item 5"];
  return (
    <section className="rental-details">
      <img
        className="rental-details-img"
        src={image}
        alt="magnifique appartement en location"
      ></img>
      <div className="rental-details-firstsection">
        <div className="rental-details-titre">
          <h2>Le titre de la location</h2>
          <h4>Paris localisation</h4>
        </div>
        <div className="rental-details-user">
          <p className="rental-details-username">
            Dupont <br></br>Robert
          </p>
          <img
            src={user}
            alt="dupont Robert"
            className="rental-details-userimg"
          ></img>
        </div>
      </div>
      <div className="tags-stars">
        <div className="tags-grid">
          <Tag />
          <Tag />
          <Tag />
        </div>

        <div className="stars-grid">
          <span className="material-symbols-outlined">star</span>
          <span className="material-symbols-outlined">star</span>
          <span className="material-symbols-outlined">star</span>
          <span className="material-symbols-outlined empty-star">star</span>
          <span className="material-symbols-outlined empty-star">star</span>
        </div>
      </div>
      <div className="rental-details-dropdown-grid">
        <Dropdown title="Titre 1" items={items} />
        <Dropdown
          title="Titre 2"
          description="Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied). "
        />
      </div>
    </section>
  );
}

export default RentalDetails;
