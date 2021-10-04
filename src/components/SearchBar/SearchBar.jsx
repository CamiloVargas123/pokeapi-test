import React from 'react'
import "./SearchBar.scss";
import {searchPokemon} from "../../services/GetPoke"

export default function SearchBar() {
  const searchPoke = async e => {
    const data = await searchPokemon(e);
    
    console.log(data)
  }

  const keyEnter = e => {
    if(e.key === "Enter"){
      searchPoke(e.target.value)
    }
  }

  return (
    <div className="search">
      <input className="search_poke" placeholder="Buscar pokemon" onKeyPress={e => keyEnter(e)} type="search" />
    </div>
  )
}
