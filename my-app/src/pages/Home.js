import React from "react";
import ActionAreaCard from "../Components/Cards";
import { Link } from "react-router-dom";

function Home({personagens}) {
  
  return (
    <div>
      <h1 className="titulo">Listar os Personagens</h1>

      <ul className="lista">
        {personagens.map((personagem) => {
          return (
            <Link key={personagem.id} to={`/personagem/${personagem.id}`}>
              <ActionAreaCard personagem={personagem} />
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default Home;
