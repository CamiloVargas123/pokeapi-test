import React, {useState, useEffect} from 'react'
import "./CardContent.scss"
import Cards from './Cards/Cards'
import ViewDetails from './ViewDetails/ViewDetails'
import {getPokemonAPI, getPokemonWhitUrlAPI} from "../../services/GetPoke"
import InfiniteScroll from 'react-infinite-scroll-component'
import Loading from '../Loading/Loading'

export default function CardContent() {
  const [pokemons, setPokemons] = useState([])
  const [page, setPage] = useState(0)
  const [viewDatail, setViewDetail] = useState(false)
  const [loading, setLoading] = useState(true)

  const getPokemons = async (page = 0) => {
    try{
      const data = await getPokemonAPI(25, page)
      const promise = data.results.map( async (pokemon) => {
        return await getPokemonWhitUrlAPI(pokemon.url)
      })
      const result = await Promise.all(promise)
      setPokemons(pokemons.concat(result))
      setLoading(false)
    }catch(err){
      console.log(err)
    }
  }
  const fechtMorePokemons = (page) => {
    setPage(page)
    getPokemons(page)
  }

  useEffect(() => {
    getPokemons()
  }, [])

  return (
    <>
      <InfiniteScroll
        className="cardContent"
        dataLength={pokemons.length}
        next={() => fechtMorePokemons(page + 25)}
        hasMore={true}
        loader={<Loading />}
      >
        <Cards pokemons={pokemons} loading={loading} getPokemons={getPokemons} page={page} />
      </InfiniteScroll>

      {viewDatail ? <ViewDetails /> : null}
    </>
  )
}
