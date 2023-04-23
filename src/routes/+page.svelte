<script>
	import PokemonCard from '$lib/components/PokemonCard/PokemonCard.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<h1>Welcome to Pokemon SvelteDex</h1>
<ul>
	{#each data.pokemonList.results as pokemon}
		<PokemonCard pokemonResult={pokemon} />
	{/each}
</ul>
