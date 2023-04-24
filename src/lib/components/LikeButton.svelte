<script>
	import Heart from '$lib/icons/Heart.svelte';
	import HeartEmpty from '$lib/icons/HeartEmpty.svelte';

	let fav = false;

	function toggleFav() {
		fav = !fav;
	}
</script>

<button on:click={toggleFav}>
	{#if fav}
		<Heart />
	{:else}
		<HeartEmpty />
	{/if}
</button>
