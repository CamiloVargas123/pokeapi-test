let urlMain = "https://pokeapi.co/api/v2/"

export function searchPokemon(pokemon) {
  let url = `${urlMain}pokemon/${pokemon}`
  return fetch(url).then(reponse => {
    return reponse.json();
  }).catch(err => {
    return err
  })
}