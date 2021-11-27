<script>
	import { page } from "$app/stores"
	import Icon from '@iconify/svelte';
</script>
<main class="border-b border-gray-800 shadow-md mb-2">
	<nav class="container mx-auto px-3 flex items-center justify-between space-x-6 py-1">
		<div class="py-2">
			<h3 class="md:text-xl cursor-pointer select-none  border-2 px-3 rounded text-yellow-500 border-yellow-500">HN <span class="hidden md:inline">Svelte</span></h3>
		</div>
<!-- 		<div class="flex-1 pl-2">
			<div class="w-[50%] flex items-center space-x-1 border border-gray-800 rounded-md px-3">			
				<Icon icon="akar-icons:search" />
				<input placeholder="Search Hacker News" class="w-[90%] pl-2 py-2 focus:outline-none bg-transparent" type="text">
			</div>
		</div> -->
		<ul class="flex items-center justify-between sm:space-x-2">
	          <li>
	          	<a sveltekit:prefetch href="/" class="{ $page.path === "/" ? 'text-yellow-500' : '' }  cursor-pointer transition-transform ease-in-out duration-500 focus:transform focus:scale-[1.1] hover:transform hover:scale-[1.2] flex items-center justify-center space-x-1 rounded-lg px-3 py-3  font-medium">          		
			      	<Icon icon="akar-icons:newspaper" class="h-5 w-5 md:inline hidden"/>
			      	<span class="text-lg">New</span>
	          	</a>
	          </li> 
	          <li>
			      <a sveltekit:prefetch href="/ask" class="{ $page.path === "/ask" ? 'text-yellow-500' : '' } cursor-pointer transition-transform ease-in-out duration-500 focus:transform focus:scale-[1.1] hover:transform hover:scale-[1.2] flex items-center space-x-1 rounded-lg px-3 py-1.5  font-medium">
			      	<Icon icon="akar-icons:chat-question"  class="h-5 w-5 md:inline hidden"/>
			      	<span class="text-lg">Ask</span>
			      </a> 
	          </li>
	          <li>
			      <a sveltekit:prefetch href="/show" class="{ $page.path === "/show" ? 'text-yellow-500' : '' } cursor-pointer transition-transform ease-in-out duration-500 focus:transform focus:scale-[1.1] hover:transform hover:scale-[1.2] flex items-center space-x-1 rounded-lg px-3 py-1.5  font-medium">
			      	<Icon icon="akar-icons:eye-open"  class="h-5 w-5 md:inline hidden"/>
			      	<span class="text-lg">Show</span>
			      </a>
	          </li>	
	          <li>
			      <a sveltekit:prefetch href="/job" class="{ $page.path === "/job" ? 'text-yellow-500' : '' } cursor-pointer transition-transform ease-in-out duration-500 focus:transform focus:scale-[1.1] hover:transform hover:scale-[1.2] flex items-center space-x-1 rounded-lg px-3 py-1.5  font-medium">
			      	<Icon icon="eos-icons:cronjob"  class="h-5 w-5 md:inline hidden"/>
			      	<span class="text-lg">Job</span>
			      </a>
	          </li>
	    </ul>
	</nav>
</main>