import React, { useEffect, useState } from "react";
import api from "../api";
import ActionAreaCard from "../Components/Cards";
import { Link } from "react-router-dom";

function Home() {
  const [personagens, setPersonagens] = useState([]);

  useEffect(() => {
    async function getCharacters() {
      const response = await api.get("character/?page=1");
      setPersonagens(response.data.results);
    }
    getCharacters();
  }, []);

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
