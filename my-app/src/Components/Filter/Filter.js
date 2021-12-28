import * as React from "react";
import "./Filter.css";

import { MenuItem, TextField } from '@mui/material';

function Filter({personagens}) {
  
  return (
    <TextField 
    className="campoFilter"
    select
    label="Escolha o seu personagem"
    >
    <MenuItem value="">
      <em>Limpar</em>
    </MenuItem>
      {personagens.map(card => <MenuItem key={card.id} value={ card }>{ card.name }</MenuItem>)}
    </TextField>
  );
}

export default Filter;
