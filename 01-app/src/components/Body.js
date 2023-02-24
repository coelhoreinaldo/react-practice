import React from "react";
import Data from "./Data";

export default function Body(){
  const type = () => 'Assada';
  const gh = 'https://github.com/coelhoreinaldo';
  const linkedin = 'https://www.linkedin.com/in/coelhoreinaldo/';

  const cssInline={
    color:'#623119',
    fontSize:'2em'
  }

  return (
    <section className="container">
      <p style={cssInline}>Definitivamente é o melhor legume</p>
      <img src="/img/batatas.jpeg" alt="batatas" width="160px"/>
      <Data tipo={type} github={gh} linkedin={linkedin}/>
    </section>
  )
}