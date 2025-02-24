import "./Portfolio.css";
import PortfolioItem from "./PortfolioItem";
import picture2 from "../../assets/picture2.jpg";
import picture1 from "../../assets/picture1.png";

const portfolioData = [
{
  image: picture1,
  title: "Pirmas pavadinimas"
},
{
  image: picture1,
  title: "Antras pavadinimas"
},
{
  image: picture1,
  title: "Trečias pavadinimas"
},
{
  image: picture2,
  title: "Ketvirtas pavadinimas"
},
{
  image: picture2,
  title: "Penktas pavadinimas"
},
{
  image: picture2,
  title: "Šeštas pavadinimas"
}
]


function Portfolio() {
 
  const portfolioList = portfolioData.map((item, index) => <PortfolioItem key={index} data={item} />)
 
  return (
    <div className="portfolio-wrapper">
      <h1>Portfolio</h1>
      <p>
        KLorem ipsum dolor sit elit. Inventore blanditiis asperiores autem earum
        optio, tenetur distinctio quas consequatur suscipit natus. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Enim, tempore hic aut
        nesciunt alias perspiciatis aliquam ducimus quo optio officia.
      </p>
      <div className="portfolio-list">
          {portfolioList}
      </div>
    </div>
  );
}

export default Portfolio;
