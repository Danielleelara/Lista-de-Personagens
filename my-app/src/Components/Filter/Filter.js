import "./Filter.css";

import { MenuItem, TextField } from '@mui/material';

function Filter({personagens, onFilterChange, onFilterSpecie}) {
  

  return (
    <> 
      <TextField
        className="campoFilter"
        select
        label="Escolha o seu personagem"
        onChange={onFilterChange}
      >
        <MenuItem value="">
          <em>Limpar</em>
        </MenuItem>
        {personagens.map(card => <MenuItem key={card.id} value={card}>{card.name}</MenuItem>)}
      </TextField>
      
      <TextField
        className="campoFilter"
        select
        label="Escolha a espécie"
        onChange={onFilterSpecie}
      >
        <MenuItem value="">
            <em>Limpar</em>
          </MenuItem>
          {(personagens.map(card => <MenuItem key={card.id} value={card}>{(card.species)}</MenuItem>))}
        
        </TextField>
      
      </>
  );
}

export default Filter;

