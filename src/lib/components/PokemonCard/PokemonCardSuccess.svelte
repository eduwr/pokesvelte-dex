<script lang="ts">
	import type { Pokemon } from 'lib/types/pokemon/Pokemon';

	export let pokemon: Pokemon;

	let pokemonNumber = `${pokemon.id.toString().padStart(3, '0')}`;
</script>

<div>
	<div class="pokemon-info">
		<span class="pokemon-name">{pokemon.name}</span>
		<span class="pokemon-number">{pokemonNumber}</span>
	</div>
	<img src={pokemon.sprites.other.dream_world?.front_default} alt={pokemon.name} />
</div>

<style>
	div {
		display: flex;
		position: relative;
		flex-direction: column;
		height: 18rem;
		width: 15rem;
		background-color: #e3e3e3;
		border-radius: 0.5rem;
		overflow: hidden;
	}

	div img {
		position: absolute;
		bottom: 0;
		z-index: 10;
		width: 12rem;
		max-height: 16rem;
	}

	.pokemon-info {
		display: flex;
		flex-direction: column;
		width: 100%;
		font-weight: bold;
		padding: 1rem;
	}

	.pokemon-number {
		font-size: 5.5rem;
		font-weight: bold;
	}

	.pokemon-name {
		font-size: 1rem;
	}
</style>
