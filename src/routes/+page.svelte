<script>
	/** @type {import('./$types').PageData} */
	export let data;
    data.pokemonList.results
    console.log(data)
</script>

<h1>Welcome to Pokemon SvelteDex</h1>
<ul>
    {#each data.pokemonList.results as pokemon}
        <li>
            <span>{pokemon.name}</span>
        </li>
    {/each}
</ul>
