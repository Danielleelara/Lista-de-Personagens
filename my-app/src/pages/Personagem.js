import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import api from '../api'
import ActionAreaCard from "../Components/Cards";

function Personagem (){
    const { id } = useParams()
    const[personagem, setPersonagem] = useState();
    
    useEffect(() => {
        async function getCharacter() {
          const response = await api.get(`characters/${id}`);
          setPersonagem(response.data);
        }
        getCharacter();
      }, [id]);
      console.log('PERSONAGEM', personagem)

    return(
        
        <ActionAreaCard personagem={personagem} />
    )
}

export default Personagem