import React from 'react'
import "./CardView.scss"

export default function CardView(props) {
  const {pokemon} = props
  return (
    <div className="card" >
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt={`${pokemon.name}.png`} />
      <div className="card_type">
        {pokemon.types.map((types, index) => {
          return <p key={index} className={types.type.name}>{types.type.name}</p>
        })}
      </div>
    </div>
  )
}