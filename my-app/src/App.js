import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DenseAppBar from "./Components/AppBar/DenseAppBar";
import Home from "./pages/Home";
import Personagem from "./pages/Personagem";
import api from "./api";

function App() {
  const [personagens, setPersonagens] = useState([]);
  const [personagensFiltrados, setPersonagensFiltrados]= useState([]);

  useEffect(() => {
    async function getCharacters() {
      const response = await api.get("character/?page=1");
      setPersonagens(response.data.results);
      setPersonagensFiltrados(response.data.results);
    }
    getCharacters();
  }, []);

  function handleSelectedPersonagem (event) {
    const personagemAtual = event.target.value;
    const personagemFiltrados = personagens.filter((personagem) => {
      return personagemAtual.id === personagem.id 

    })
    setPersonagensFiltrados(personagemFiltrados);
  }

  function handleSelectedSpecies (event) {
    const especie = event.target.value;
    const personagemFiltrados = personagens.filter((personagem) => {
      return especie.species === personagem.species 

    })
    setPersonagensFiltrados(personagemFiltrados);
    
  }

  return (

    <Router>
      <DenseAppBar personagens={personagens} onFilterChange={handleSelectedPersonagem} onFilterSpecie={handleSelectedSpecies} />
      <Switch>
        <Route exact path="/">
          <Home personagens={personagensFiltrados} />
        </Route>
        <Route path="/personagem/:id">
          <Personagem />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
