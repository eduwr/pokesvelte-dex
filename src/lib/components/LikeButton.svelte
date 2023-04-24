<script lang="ts">
	import Heart from '$lib/icons/Heart.svelte';
	import HeartEmpty from '$lib/icons/HeartEmpty.svelte';

	export let fav = false;

    type ClickHandler = (
		e: MouseEvent & {
			currentTarget: EventTarget & HTMLButtonElement;
		}
	) => void;

	export let onClick: ClickHandler | undefined
</script>

<button on:click={onClick}>
	{#if fav}
		<Heart />
	{:else}
		<HeartEmpty />
	{/if}
</button>
