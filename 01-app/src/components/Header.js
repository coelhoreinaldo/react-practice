import React from "react";
import Batata from "./batata.jpeg"

export default function Header(){
  return(
    <header>
      <h1>A batata</h1>
      <img src={Batata} alt="batata" width='160px'/>
    </header>
  )
}