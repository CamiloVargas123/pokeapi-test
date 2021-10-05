import React from 'react'
import "./Cards.scss"
import CardView from "./CardView/CardView"

export default function Cards(props) {
  const {pokemons} = props
  return (
    <div className="cards">
      {pokemons.map((pokemon, index) => {
        return(
          <CardView pokemon={pokemon} key={index} />
        )
      })}
    </div>
  )
}