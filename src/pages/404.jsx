import picture from "../assets/404.svg";
import "../style/404.css";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="error-page">
      <img src={picture} alt="Error 404 - page not found"></img>
      <p className="error-msg">Oups! La page que vous demandez n'existe pas.</p>
      <Link className="back-to-home" to="/">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}

export default ErrorPage;
