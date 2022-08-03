import { appartement } from "../data/data.js";
import "../style/RentalDetails.css";
import Dropdown from "../components/Dropdown";
import Tag from "../components/Tags";
import StarsScale from "../components/StarsScale";
import Carousel from "../components/Carousel.jsx";

function RentalDetails() {
  const queryString = window.location.search;
  const idValue = new URLSearchParams(queryString).get("id");

  console.log(window.location.pathname);

  let loadingAppartement = {};
  let idArray = [];

  appartement.forEach((app) => {
    idArray.push(app.id);
  });

  const checkId = idArray.includes(idValue);

  if (!checkId) {
    window.location.pathname = "*";
  } else {
    appartement.forEach((app) => {
      const appId = app.id;

      if (appId === idValue) {
        return (loadingAppartement = app);
      }
    });
  }

  return (
    <section className="rental-details">
      <Carousel>
        {loadingAppartement.pictures.map((img, index) => (
          <img
            className="rental-details-pictures"
            src={img}
            alt={"photo de couverture de " + loadingAppartement.title}
            key={`"picture-"${loadingAppartement.title}-${index}`}
          ></img>
        ))}
      </Carousel>
      <div className="rental-details-firstsection">
        <div className="rental-details-titre">
          <h2>{loadingAppartement.title}</h2>
          <h4>{loadingAppartement.location}</h4>
        </div>
        <div className="rental-details-user">
          <p className="rental-details-username">
            {loadingAppartement.host.name}
          </p>
          <img
            src={loadingAppartement.host.picture}
            alt={"photo de profil de " + loadingAppartement.host.name}
            className="rental-details-userimg"
          ></img>
        </div>
      </div>
      <div className="tags-stars">
        <Tag tags={loadingAppartement.tags} />
        <StarsScale scaleValue={loadingAppartement.rating} />
      </div>
      <div className="rental-details-dropdown-grid">
        <Dropdown
          title="Description"
          description={loadingAppartement.description}
        />
        <Dropdown title="Equipements" items={loadingAppartement.equipments} />
      </div>
    </section>
  );
}

export default RentalDetails;
