import { appartement } from "../data/data.js";
import Banner from "../components/Banner.jsx";
import image from "../assets/foggymountain.png";
import "../style/Home.css";
import Thumb from "../components/Thumb";

function Home() {
  return (
    <main className="Home">
      <Banner text="Chez vous, partout et ailleurs" image={image} />
      <article className="location">
        {appartement.map(({ id, title, cover }) => (
          <Thumb key={id} id={id} title={title} cover={cover} />
        ))}
      </article>
    </main>
  );
}

export default Home;
