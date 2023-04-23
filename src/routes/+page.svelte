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

<div class="hero">
	<h1>Welcome to Pokemon SvelteDex</h1>
	<ul class="pokemon-list">
		{#each data.pokemonList as pokemon}
			<PokemonCard pokemonResult={pokemon} />
		{/each}
	</ul>
	<div class="pagination-container">
		{#if data.pagination.previous}
			<a href={previousUrl}>Prev</a>
		{/if}
		{#if data.pagination.next}
			<a href={nextUrl}>Next</a>
		{/if}
	</div>
</div>

<style lang="scss">
	@use '$lib/styles/utilities/breakpoints' as bp;
	
	.hero {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 5rem;

		h1 {
			font-size: xx-large;
			margin-bottom: 5rem;
			font-family: 'Bruno Ace', cursive;
		}

		@include bp.tablet {
			padding: 1rem;
			background-color: red;
		}

		@include bp.mobile {
			padding: 0.2rem;
			background-color: greenyellow;
		}
	}

	.pokemon-list {
		display: flex;
		gap: 0.5rem;
		flex-wrap: wrap;
	}

	.pagination-container {
	}
</style>
