import React from 'react'
import "./Navbar.scss";

export default function Navbar() {
  const imgUrl="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
  return (
    <div className="headerLogo">
      <img className="imgLogo" src={imgUrl} alt="pokeAPI-logo" />
    </div>
  )
}
