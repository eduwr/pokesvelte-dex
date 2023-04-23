<script lang="ts">
	import type { Pokemon } from 'lib/types/pokemon/Pokemon';

	export let pokemon: Pokemon;

	console.log(pokemon);
</script>

<div>
    <span>{pokemon.id}</span>
	<img src={pokemon.sprites.front_default} alt={pokemon.name} />
</div>
