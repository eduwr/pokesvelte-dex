<script lang="ts">
	import type { Pokemon } from '$lib/types/pokemon/Pokemon';
	import LikeButton from '$lib/components/LikeButton.svelte';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	const store: Writable<Map<number, Pokemon>> = getContext('favs');

	let favsState: Map<number, Pokemon>;

	store.subscribe((state) => {
		favsState = state;
	});

	export let pokemon: Pokemon;

	$: pokemonNumber = `${pokemon?.id?.toString().padStart(3, '0')}`;
	$: isFav = !!favsState.get(pokemon.id);

	let handleClick = () => {
		const pokemonStored = favsState.get(pokemon.id);

		if (pokemonStored) {
			return store.update((prev) => {
				prev.delete(pokemon.id);
				return prev;
			});
		}

		return store.update((prev) => {
			prev.set(pokemon.id, pokemon);

			return prev;
		});
	};
</script>

<div class="card-container">
	<div class="like-btn-container">
		<LikeButton fav={isFav} onClick={handleClick} />
	</div>
	<div class="pokemon-info">
		<span class="pokemon-name">{pokemon.name}</span>
		<span class="pokemon-number">{pokemonNumber}</span>
	</div>
	<img src={pokemon.sprites.other.dream_world?.front_default} alt={pokemon.name} />
</div>

<style lang="scss">
	.card-container {
		display: flex;
		position: relative;
		flex-direction: column;
		height: 18rem;
		width: 15rem;
		background-color: #e3e3e3;
		border-radius: 0.5rem;
		overflow: hidden;
		padding: 2rem 0.5rem;

		.like-btn-container {
			position: absolute;
			top: 0.5rem;
			right: 0.5rem;
		}

		img {
			position: absolute;
			bottom: 0.2rem;
			right: 0.2rem;
			z-index: 10;
			width: 12rem;
			height: 13rem;
			max-height: 16rem;
		}

		.pokemon-info {
			display: flex;
			flex-direction: column;
			width: 100%;
			font-weight: bold;

			.pokemon-number {
				font-size: 5.5rem;
				font-weight: bold;
				opacity: 87%;
				font-family: 'Bruno Ace', cursive;
			}

			.pokemon-name {
				font-size: 1rem;
				opacity: 87%;
				font-family: 'Bruno Ace', cursive;
			}
		}
	}
</style>
