import "../style/Dropdown.css";

function Dropdown({ title, description }) {
  function dropdownClick(e) {
    const dropdownText = e.target.parentNode.nextSibling.classList;
    if (dropdownText.contains("display")) {
      dropdownText.remove("display");
    } else {
      dropdownText.add("display");
    }
  }

  return (
    <div className="about-dropdown">
      <div className="about-dropdown-case">
        <h4 className="about-dropdown-title">{title}</h4>
        <span
          className="material-symbols-outlined"
          onClick={(e) => dropdownClick(e)}
        >
          expand_more
        </span>
      </div>
      <div className="about-dropdown-text">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Dropdown;
