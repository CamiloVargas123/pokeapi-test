let urlMain = "https://pokeapi.co/api/v2/"

export function searchPokemonAPI(pokemon) {
  let url = `${urlMain}pokemon/${pokemon}`
  return fetch(url).then(reponse => {
    return reponse.json();
  }).catch(err => {
    return null
  })
}

export function getPokemonAPI(limit=25, offset=0){
  let url = `${urlMain}pokemon?limit=${limit}&offset=${offset}`
  return fetch(url).then(reponse => {
    return reponse.json();
  }).catch(err => {
    return err
  })
}

export function getPokemonWhitUrlAPI(url){
  return fetch(url).then(reponse => {
    return reponse.json();
  }).catch(err => {
    return err
  })
}