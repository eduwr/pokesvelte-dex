type List<T = any> = {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
};

type PokemonListResult = {
  name: string;
  url: string;
};

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon");
  const pokemonList: List<PokemonListResult> = await response.json();

  return {
    pokemonList,
  };
}
