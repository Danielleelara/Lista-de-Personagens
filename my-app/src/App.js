import React, { useEffect, useState } from "react";
import api from "./api";
import ActionAreaCard from './Components/Cards'
function App() {
  const [personagens, setPersonagens] = useState([]);

  useEffect(() => {
    async function getCharacters() {
      const response = await api.get('character/?page=1');
      setPersonagens(response.data.results);
    }

    getCharacters();
  }, []);

  return (
    <div>
      <h1>Listar os Personagens</h1>
     
      <ul>
      <ActionAreaCard>
        {personagens.map((personagem) => {
          return (
            <li key={personagem.id}>
              {`${personagem.name} - Species: ${personagem.species} - Status: ${personagem.status}`}
            </li>
          );
        })}
        </ActionAreaCard>
      </ul>
    </div>
  );
}

export default App;


