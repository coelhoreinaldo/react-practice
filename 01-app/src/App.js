import React from "react";
import Batata from "./components/batata.jpeg"

export default function App(){
  const legume = () => 'batata';
  const itIs = () => 'melhor legume';
  return(
    <>
    <header>
      <h1>{`A ${legume()}`}</h1>
      <h2>{`É o ${itIs()}`}</h2>
      </header>
    <section>
      <img src={Batata} alt="batata" width="160px"/>
    </section>
    </>
  )
}
