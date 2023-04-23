<script lang="ts">
	import type { PokemonListResult } from '$lib/types/pokemon/PokemonListResult';
	import type { Pokemon } from '$lib/types/pokemon/Pokemon';
	import type { Result } from '$lib/common/result';
	import { onMount } from 'svelte';
	import { fetchData } from '$lib/common/fetchData';
	import PokemonCardSuccess from './PokemonCardSuccess.svelte';
	import PokemonCardError from './PokemonCardError.svelte';
	import Loading from '../Loading.svelte';

	export let pokemonResult: PokemonListResult;
	let pokemonData: Result<Pokemon> | undefined;

	onMount(async () => {
		pokemonData = await fetchData(pokemonResult.url);
	});
</script>

<li>
	<span>{pokemonResult.name}</span>
	{#if !pokemonData}
		<Loading />
	{:else if pokemonData.ok}
		<PokemonCardSuccess pokemon={pokemonData.value} />
	{:else}
		<PokemonCardError />
	{/if}
</li>
