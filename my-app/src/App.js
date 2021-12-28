import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DenseAppBar from "./Components/AppBar";
import Home from "./pages/Home";
import Personagem from "./pages/Personagem";
import api from "./api";

function App() {
  const [personagens, setPersonagens] = useState([]);

  useEffect(() => {
    async function getCharacters() {
      const response = await api.get("character/?page=1");
      setPersonagens(response.data.results);
    }
    getCharacters();
  }, []);
  return (
    <Router>
      <DenseAppBar personagens={personagens}/>
      <Switch>
        <Route exact path="/">
          <Home personagens={personagens} />
        </Route>
        <Route path="/personagem/:id">
          <Personagem />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
