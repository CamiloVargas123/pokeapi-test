import React, {useState, useEffect} from 'react'
import "./CardContent.scss"
import Cards from './Cards/Cards'
import ViewDetails from './ViewDetails/ViewDetails'
import {getPokemonAPI, getPokemonWhitUrlAPI, searchPokemonAPI} from "../../services/GetPoke"
import InfiniteScroll from 'react-infinite-scroll-component'
import Loading from '../Loading/Loading'
import useSearchPoke from "../../hooks/useSearchPoke"

export default function CardContent() {
  const [pokemons, setPokemons] = useState([])
  const [page, setPage] = useState(0)
  const [viewDatail, setViewDetail] = useState(false)
  const [loading, setLoading] = useState(true)
  //const [loadingSearch, setLoadingSearch] = useState(true)
  const {namePoke} = useSearchPoke()
  console.log(pokemons)
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

  const onSearch = async (pokemonName) => {
    try{
      const result = await searchPokemonAPI(pokemonName);
      if(!result){
        return console.log("no exit")
      }
      return console.log(result)
    } catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    getPokemons()
  }, [])

  useEffect(() => {
    onSearch(namePoke)
  }, [namePoke])

  return (
    <>
      <InfiniteScroll
        className="cardContent"
        dataLength={pokemons.length}
        next={() => fechtMorePokemons(page + 25)}
        hasMore={true}
        height="73vh"
        endMessage={<p>finish</p>}
        loader={<Loading />}
      >
        <Cards pokemons={pokemons} loading={loading} getPokemons={getPokemons} page={page} />
      </InfiniteScroll>

      {viewDatail ? <ViewDetails /> : null}
    </>
  )
}
