import * as React from "react";
import { useEffect, useState } from "react";
import "./Filter.css";
import api from "../../api";

import { MenuItem, TextField } from '@mui/material';
function Filter() {
  const [cards, setCards] = useState([]);
  
  useEffect(() => {
    async function getCharacters() {
      const response = await api.get("character/?page=1");
      setCards(response.data.results);
    }
    getCharacters();
  }, []);
  return (
    <TextField 
    className="campoFilter"
    select
    label="Escolha o seu personagem"
    >
    <MenuItem value="">
      <em>Limpar</em>
    </MenuItem>
      {cards.map(card => <MenuItem key={card.id} value={ card }>{ card.name }</MenuItem>)}
    </TextField>
  );
}

export default Filter;
