import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DenseAppBar from "./Components/AppBar";
import Home from "./pages/Home";
import Personagem from "./pages/Personagem";

function App() {
  return (
    <Router>
      <DenseAppBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/personagem/:id">
          <Personagem />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
