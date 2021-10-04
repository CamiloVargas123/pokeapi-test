import React, {useState, useEffect} from 'react'
import "./CardContent.scss"
import Cards from './Cards/Cards'
import ViewDetails from './ViewDetails/ViewDetails'
import {getPokemonAPI, getPokemonWhitUrlAPI} from "../../services/GetPoke"

export default function CardContent() {
  const [pokemons, setPokemons] = useState([])
  const [viewDatail, setViewDetail] = useState(false)

  const getPokemons = async () => {
    try{
      const data = await getPokemonAPI()
      const promise = data.results.map( async (pokemon) => {
        return await getPokemonWhitUrlAPI(pokemon.url)
      })
      const result = await Promise.all(promise)
      setPokemons(result)
    }catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    getPokemons()
  }, [])

  return (
    <div className="cardContent">
      <Cards pokemons={pokemons} />
      {viewDatail ? <ViewDetails /> : null}
    </div>
  )
}
