<script>
	import Icon from '@iconify/svelte';

	let loadStories = [];
	const getNew = async () => {
		const res = await fetch("https://hacker-news.firebaseio.com/v0/showstories.json");
		const json = await res.json();
		loadStories = [];
		json.forEach(async (id) => {
			const resData = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
			const resDataJson = await resData.json();
			loadStories = [...loadStories,resDataJson]
		})
	}
	getNew()

function timeConverter(UNIX_timestamp){
	  var a = new Date(UNIX_timestamp * 1000);
	  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
	  var year = a.getFullYear();
	  var month = months[a.getMonth()];
	  var date = a.getDate();
	  var hour = a.getHours();
	  var min = a.getMinutes();
	  var sec = a.getSeconds();
	  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
	  return time;
	}

	let itemsPerPage = 30;

</script>

<main>
	{#each loadStories.slice(0,itemsPerPage) as item, index}
		<main class="container mx-auto max-w-screen-md">
			<div class="border border-gray-800 shadow mb-2 rounded p-2">
				<p class="text-gray-500 text-xs uppercase pb-1">{item?.by} &bull; {timeConverter(item?.time)} &bull; {item?.type}</p>
				<h3 class="text-xl leading-tight line-clamp-2">{item?.title}</h3>
				<div class="border-t border-gray-800 mt-3 flex items-center justify-between pt-2 text-gray-400">
					<div class="flex items-center space-x-1.5 text-sm">
						<div class="flex items-center text-xs space-x-2 pl-1">
							<p>{item?.score} Votes</p>
							<span>&bull;</span>
							<p>{item?.descendants} Comments</p>
						</div>
					</div>
					<div class="flex items-center text-xs space-x-2">
						<div>
							<a target="_blank" class="hover:underline hover:text-yellow-700" href={item?.url}>Read More...</a>
						</div>
					</div>
				</div>
			</div>
		</main>
	{:else}
		<p class="text-center w-full">Please Wait...Getting Stories</p>
	{/each}

	<div class="flex items-center justify-center my-5">	
		{#if !(loadStories.length === 0)}	
			<button disabled={itemsPerPage === loadStories.length || loadStories.length === 0} class="bg-yellow-500 text-gray-50 px-2 py-1" on:click={() => itemsPerPage = itemsPerPage + 30}>
				Load More...
			</button>
		{/if}
	</div>

</main>