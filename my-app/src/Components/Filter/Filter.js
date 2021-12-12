import * as React from 'react';
import { useEffect, useState } from 'react';
//import Autocomplete from '@mui/material/Autocomplete';
import './Filter.css'
import api from '../../api';
import { MenuItem } from 'material-ui/Menu';
 function Filter() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    async function getCharacters() {
      const response = await api.get('character/?page=1');
      setCards(response.data.results);
    }
    getCharacters();
  }, []);

  console.log( 'este console é ', cards);

    return (
    <><p className='campoFilter'> Aqui </p></>
      );
    }

    export default Filter