import "../style/Header.css";
import logo from "../assets/LOGO.svg";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <NavLink className="redirection-home-logo" to="/">
        <img src={logo} alt="logo-kasa" className="logo-header" />
      </NavLink>

      <nav className="navigation">
        <ul>
          <li className="lien-nav">
            <NavLink className="navlink" to="/">
              Accueil
            </NavLink>
          </li>
          <li className="lien-nav">
            <NavLink className="navlink" to="/a-propos">
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
