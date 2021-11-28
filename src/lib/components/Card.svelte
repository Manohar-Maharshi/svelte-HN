<script>
	import Icon from '@iconify/svelte';
	import {onMount} from 'svelte'
	import Spinner from '$lib/components/Spinner.svelte'
	import CommentCard from '$lib/components/CommentCard.svelte'

	export let item;
	export let index;

	let openComments = false;

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

	let loadComments = [];
	const getComments = async (id) => {
		loadComments = [];
		item?.kids?.forEach(async id => {
			const resComment = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
			const resCommentJson = await resComment.json();
			loadComments = [...loadComments,resCommentJson]
		})
	}
</script>

<main class="container mx-auto shadow-md max-w-screen-md group cursor-default mb-2">
	<div class="border border-gray-800 rounded p-2">
		<div class="flex items-center justify-between">
			<p class="text-gray-500  text-xs uppercase pb-1">{item?.by} &bull; {timeConverter(item?.time)} &bull; {item?.type}</p>
			<p class="text-gray-500  text-xs uppercase pb-1">({index})</p>
		</div>
		<h3 class="{ openComments ? 'text-yellow-500' : '' } group-hover:text-yellow-500 cursor-pointer text-xl leading-tight line-clamp-2">{item?.title}</h3>
		<div class="border-t border-gray-800 mt-3 flex items-center justify-between pt-2 text-gray-400">
			<div class="flex items-center justify-between space-x-1.5 text-sm">
				<div class="flex items-center text-xs space-x-2 pl-1">
					<p>{item?.score} Votes</p>
					{#if item?.descendants}
						
					<span>&bull;</span>
					<p on:click={() => {openComments = !openComments; getComments(item?.id)}} class="{ openComments ? 'text-yellow-500' : '' } hover:underline cursor-pointer">{item?.descendants} Comments</p>
					{/if}
				</div>
			</div>
			<div class="{ !item?.url ? 'hidden' : '' } flex items-center text-xs space-x-2">
				<div>
					<a target="_blank" class="hover:underline hover:text-yellow-500" href={item?.url}>Read More...</a>
				</div>
			</div>
		</div>
	</div>
</main>
{#if openComments}
	<div class="container max-h-[20rem] mb-5 overflow-y-auto mx-auto border border-gray-700 rounded p-2 max-w-screen-md scrollbar-thin scrollbar-thumb-gray-700 scrollbar-transparent">
		<h4 class="pb-1">Comments:</h4>
		{#each loadComments as item, index}
			<CommentCard {item} index={index+1} />
		{:else}
			<p class="text-center py-2">Loading Comments...</p>
		{/each}
	</div>
{/if}