let search_input = document.getElementById("search_input")
let container = document.getElementById("container")

async function search() {
  console.log(search_input.value)
  let result = await search_pokemon(search_input.value)
  let pokemon = result.data
  console.log(pokemon)

  let image = pokemon.sprites.other["official-artwork"].front_default
  let type = pokemon.types[0].type

  container.innerHTML = `
  <p>${pokemon.name}</p> 
  <img src="${image}">
  <p>Type: ${type.name}</p>
  <p>Weight: ${pokemon.weight}</p>
  <p>Height: ${pokemon.height}</p> 
  <p>Abilities: ${pokemon.abilities}</p>
  <p>Weakness: ${pokemon.weakness}</p>
     `
}

async function search_pokemon(pokemon_name) {
  var config = {
    method: 'get',
    url: `https://pokeapi.co/api/v2/pokemon/${pokemon_name}`
  };

  return await axios(config)
}
