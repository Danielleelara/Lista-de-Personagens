import React, { useState } from "react";

function Capslock (props) {
      
    const [contador, setContador]= useState(1);
    //const textoInserido = props.children;
   // const textoEmCapsLock = textoInserido.toUpperCase()

    function adicionarContador(){
        setContador(contador + 2);
    }
   
    return (
        <div>
            {contador}
            <button onClick={adicionarContador}>Adicionar</button>
        </div>      
    )
}

export default Capslock;