import "./Portfolio.css";
import PortfolioItem from "./PortfolioItem";
import picture1 from "../../assets/picture2.jpg";

function Portfolio() {
  return (
    <div className="portfolio-wrapper">
      <h1>Portfolio</h1>
      <p>
        {" "}
        Lorem ipsum dolor sit elit. Inventore blanditiis asperiores autem earum
        optio, tenetur distinctio quas consequatur suscipit natus. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Enim, tempore hic aut
        nesciunt alias perspiciatis aliquam ducimus quo optio officia.
      </p>
      <div className="portfolio-list">
        <PortfolioItem image={picture1} title="Pavadinimas1" />
        <PortfolioItem image={picture1} title="Pavadinimas 2" />
        <PortfolioItem image={picture1} title="Pavadinimas 3" />
        <PortfolioItem image={picture1} title="Pavadinimas 4" />
        <PortfolioItem image={picture1} title="Pavadinimas 5" />
        <PortfolioItem image={picture1} title="Pavadinimas 6" />
      </div>
    </div>
  );
}

export default Portfolio;
