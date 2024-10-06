import { Menu } from "./Menu";
import "./AnimalBiodiversity.css";
import biodiversity from "../data/biodiversity";

const AnimalBiodiversity = () => {
  return (
    <>
      <div className="page">
        <div>
          <Menu />
        </div>
        <div className="container-biodiversity">
          <h2>Biodiversidad</h2>
          <div className="cards">
            {biodiversity.animales_afectados.map((animal, index) => (
              <div key={index} className="newsAnimal">
                {animal.img_url ? (
                  <img className="imageAnimal" src={animal.img_url} />
                ) : null}
                <p className="nameAnimal">{animal.nombre} </p>
                <p className="regionAnimal">{animal.region} </p>
                <p className="typeAnimal">{animal.tipo} </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimalBiodiversity;
