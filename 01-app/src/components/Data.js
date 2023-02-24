import React from "react";

export default function Data(props){
  return(
    <seciton>
      <p>Tipo: {props.tipo()}</p>
      <p>GitHub:  <a href={props.github} target="_blank" rel="noreferrer">Clique aqui</a></p>
      <p>LinkedIn: <a href={props.linkedin} target="_blank" rel="noreferrer">Clique aqui</a></p>
    </seciton>
  )
}