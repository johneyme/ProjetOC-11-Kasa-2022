import "../style/Dropdown.css";
import { useState } from "react";

function Dropdown({ title, description, items }) {
  const [isOpen, setIsOpen] = useState(true);

  return isOpen ? (
    <div className="dropdown">
      <div className="dropdown-case">
        <h4 className="dropdown-title">{title}</h4>
        <span
          className="material-symbols-outlined"
          onClick={() => setIsOpen(false)}
        >
          expand_more
        </span>
      </div>
    </div>
  ) : (
    <div className="dropdown">
      <div className="dropdown-case">
        <h4 className="dropdown-title">{title}</h4>
        <span
          className="material-symbols-outlined"
          onClick={() => setIsOpen(true)}
        >
          expand_more
        </span>
      </div>
      {(() => {
        if (description) {
          return (
            <div className="dropdown-text">
              <p>{description}</p>
            </div>
          );
        } else if (items) {
          return (
            <div className="dropdown-items">
              <ul>
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          );
        }
      })()}
    </div>
  );
}

/*function Dropdown({ title, description, items }) {
 
  function dropdownClick(e) {
    const dropdownMore = e.target.parentNode.nextSibling.classList;
    if (dropdownMore.contains("display")) {
      dropdownMore.remove("display");
    } else {
      dropdownMore.add("display");
    }
  }

  return (
    <div className="dropdown">
      <div className="dropdown-case">
        <h4 className="dropdown-title">{title}</h4>
        <span
          className="material-symbols-outlined"
          onClick={(e) => dropdownClick(e)}
        >
          expand_more
        </span>
      </div>
      {(() => {
        if (description) {
          return (
            <div className="dropdown-text">
              <p>{description}</p>
            </div>
          );
        } else if (items) {
          return (
            <div className="dropdown-items">
              <ul>
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          );
        }
      })()}
    </div>
  );
}*/

export default Dropdown;
