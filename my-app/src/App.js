import React, { useEffect, useState } from "react";
import api from "./api";
import ActionAreaCard from './Components/Cards'
import DenseAppBar from "./Components/AppBar";
import './App.css'; 


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
      <DenseAppBar/>
      <h1 className="titulo">Listar os Personagens</h1>
     
      <ul className="lista">
        {personagens.map((personagem) => {
          return (
            <ActionAreaCard key={personagem.id} personagem={personagem}/>
          );
        })}
      
      </ul>
    </div>
  );
}

export default App;


