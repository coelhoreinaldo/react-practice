import React from "react";

export default function App(){
  const legume = () => {
    return 'batata'
  }
  const itIs = 'Melhor Legume';
  return(
    <section>
      <h1>{`A ${legume()}`}</h1>
      <h2>{itIs}</h2>
    </section>
  )
}
