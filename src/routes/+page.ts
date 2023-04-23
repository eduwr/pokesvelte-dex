import { error } from '@sveltejs/kit';
import type { LoadEvent } from '@sveltejs/kit';
import { fetchData } from '$lib/common/fetchData';
import type { List } from '$lib/types/common/List';
import type { PokemonListResult } from '$lib/types/pokemon/PokemonListResult';
import type { Pokemon } from '$lib/types/pokemon/Pokemon';

/** @type {import('./$types').PageLoad} */
export async function load({ url, fetch }: LoadEvent) {
	const pokeUrl = url.searchParams.get('url') || 'https://pokeapi.co/api/v2/pokemon';

	const response = await fetchData<List<PokemonListResult>>(pokeUrl, fetch);

	if (response.ok) {
		const promises = response.value.results.map((poke) => {
			return fetchData<Pokemon>(poke.url);
		});

		const pokemonList = await Promise.all(promises);

		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { results, ...pagination } = response.value;

		return {
			pokemonList: pokemonList.map((r) => r.ok && r.value),
			pagination
		};
	}

	throw error(404, 'Not found');
}
