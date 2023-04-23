import type { List } from "../lib/types/common/List";
import type { PokemonListResult } from "../lib/types/pokemon/PokemonListResult";

 
/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon");
  const pokemonList: List<PokemonListResult> = await response.json();

  return {
    pokemonList,
  };
}
