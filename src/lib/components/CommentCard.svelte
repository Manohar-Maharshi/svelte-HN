<script>
	import Icon from '@iconify/svelte';

	export let item;
	export let index;

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
</script>

<main class="container mx-auto shadow-md overflow-y-auto max-w-screen-md cursor-default">
	<div class="border border-gray-800  mb-2 rounded p-2 overflow-hidden">
		<div class="flex items-center justify-between">
			<p class="text-gray-500  text-xs uppercase pb-1"><span class="font-medium">{item?.type}</span> &bull; {item?.by} &bull; {timeConverter(item?.time)}</p>
			<p class="text-gray-500  text-xs uppercase pb-1">({index})</p>
		</div>
		<h3 class="text-base text-gray-300 leading-tight break-words leading-normal">{@html item?.text}</h3>
	</div>
</main>