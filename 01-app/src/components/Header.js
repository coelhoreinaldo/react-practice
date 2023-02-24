import React from "react";
import Batata from "./batata.jpeg"

export default function Header(){
  return(
    <header>
      <p>A batata</p>
      <img src={Batata} alt="batata" width='160px'/>
    </header>
  )
}