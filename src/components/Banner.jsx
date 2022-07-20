import "../style/Banner.css";

function Banner({ image, text }) {
  return (
    <aside
      className="banner"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), 
    url(${image})`,
      }}
    >
      <p>{text}</p>
    </aside>
  );
}

export default Banner;
