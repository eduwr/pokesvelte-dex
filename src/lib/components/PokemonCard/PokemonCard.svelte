<script lang="ts">
	import type { Pokemon } from '$lib/types/pokemon/Pokemon';
	import PokemonCardSuccess from './PokemonCardSuccess.svelte';
	import PokemonCardError from './PokemonCardError.svelte';

	export let pokemonResult: Pokemon | false;
</script>

<li>
	{#if !pokemonResult}
		<PokemonCardError />
	{:else}
		<PokemonCardSuccess pokemon={pokemonResult} />
	{/if}
</li>
