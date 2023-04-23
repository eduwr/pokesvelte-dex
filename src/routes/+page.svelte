<script lang="ts">
	import PokemonCard from '$lib/components/PokemonCard/PokemonCard.svelte';

	export let data: import('./$types').PageData;

	let previousUrl: string;
	let nextUrl: string;

	$: {
		if (data) {
			previousUrl = `/?action=previous&url=${data.pagination.previous}`;
			nextUrl = `/?action=next&url=${data.pagination.next}`;
		}
	}
</script>

<h1>Welcome to Pokemon SvelteDex</h1>
<ul>
	{#each data.pokemonList as pokemon}
		<PokemonCard pokemonResult={pokemon} />
	{/each}
</ul>
<div>
	{#if data.pagination.previous}
		<a href={previousUrl}>Prev</a>
	{/if}
	{#if data.pagination.next}
		<a href={nextUrl}>Next</a>
	{/if}
</div>

<style>
	ul {
		display: flex;
		gap: 0.5rem;
		flex-wrap: wrap;
	}
</style>
