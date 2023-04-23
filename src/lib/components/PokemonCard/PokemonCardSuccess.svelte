<script lang="ts">
	import type { Pokemon } from 'lib/types/pokemon/Pokemon';

	export let pokemon: Pokemon;
</script>

<div class="card-container">
	<div class="pokemon-info">
		<span class="pokemon-name">{pokemon.name}</span>
		<span class="pokemon-number">{`${pokemon.order.toString().padStart(3, '0')}`}</span>
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
		padding: 1rem 0.5rem;
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
