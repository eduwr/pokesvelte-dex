<script lang="ts">
	import PokemonCard from '$lib/components/PokemonCard/PokemonCard.svelte';
	import type { Pokemon } from 'lib/types/pokemon/Pokemon';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	const favs = writable(new Map<Pick<Pokemon, 'id'>, Pokemon>());
	setContext('favs', favs);

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
	@use '$lib/styles/utilities/border-radius' as r;

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
		}

		@include bp.mobile {
			padding: 0.2rem; 
		}
	}

	.pokemon-list {
		display: flex;
		gap: 0.5rem;
		flex-wrap: wrap;
	}

	.pagination-container {
		a {
			font-size: x-large;
			font-family: 'Bruno Ace', cursive;
			padding: 1rem;
			background-color: #e3e3e3;
			@include r.rounded-xl;
			color: #000;
			opacity: 0.87;
		}
	}
</style>
