<script lang="ts">
	import type { Pokemon } from 'lib/types/pokemon/Pokemon';

	export let pokemon: Pokemon;
</script>

<div>
	<span>{pokemon.id}</span>
	<span>{pokemon.name}</span>
	<img src={pokemon.sprites.other.dream_world?.front_default} alt={pokemon.name} />
</div>

<style>
	div {
		height: 18rem;
		width: 15rem;
		background-color: #e3e3e3;
	}
</style>
