<script>
	import Icon from '@iconify/svelte';
	import Card from '$lib/components/Card.svelte'
	import Spinner from '$lib/components/Spinner.svelte'

	import {onMount} from 'svelte'



	let loadStories = [];
	const getNew = async () => {
		const res = await fetch("https://hacker-news.firebaseio.com/v0/askstories.json");
		const json = await res.json();
		loadStories = [];
		json.forEach(async (id) => {
			const resData = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
			const resDataJson = await resData.json();
			loadStories = [...loadStories,resDataJson]
		})
	}

	onMount(getNew)


	let itemsPerPage = 30;

</script>

<svelte:head>
	<title>HN - Ask HN Stories</title>
</svelte:head>


<main>
	{#each loadStories.slice(0,itemsPerPage) as item, index}
		<Card {item} index={index + 1} />
	{:else}
		<Spinner />
	{/each}

	<div class="flex items-center justify-center my-5">	
		{#if !(loadStories.length === 0)}	
			<button disabled={itemsPerPage === loadStories.length || loadStories.length === 0} class="bg-yellow-500 text-gray-50 px-2 py-1" on:click={() => itemsPerPage = itemsPerPage + 30}>
				Load More...
			</button>
		{/if}
	</div>

</main>