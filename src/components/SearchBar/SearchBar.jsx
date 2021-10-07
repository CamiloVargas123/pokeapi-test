import React from 'react'
import "./SearchBar.scss";
import useSearchPoke from '../../hooks/useSearchPoke';

export default function SearchBar() {
  const {setNamePoke} = useSearchPoke()

  const keyEnter = e => {
    if(e.key === "Enter"){
      setNamePoke(e.target.value)
    }
  }

  return (
    <div className="search">
      <input className="search_poke" placeholder="Search pokemon" onKeyPress={e => keyEnter(e)} type="search" />
    </div>
  )
}
