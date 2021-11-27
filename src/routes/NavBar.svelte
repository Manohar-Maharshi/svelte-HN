<script>
	import Icon from '@iconify/svelte'
</script>
<main class="border-b border-gray-800 shadow-md mb-2">
	<nav class="container mx-auto flex items-center justify-between space-x-6 py-1">
		<h3 class="text-xl cursor-pointer select-none">HN Svelte</h3>
		<div class="flex-1 pl-2">
			<div class="w-[50%] flex items-center space-x-1 border border-gray-800 rounded-md px-3">			
				<Icon icon="akar-icons:search" />
				<input placeholder="Search Hacker News" class="w-[90%] pl-2 py-2 focus:outline-none bg-transparent" type="text">
			</div>
		</div>
		<ul class="flex items-center justify-between space-x-2">
	          <li>
			      <a class=" text-yellow-500 cursor-pointer transition-transform ease-in-out duration-500 focus:transform focus:scale-[1.1] hover:transform hover:scale-[1.2] flex items-center justify-center space-x-1 rounded-lg px-3 py-3  font-medium">
			      	<Icon icon="akar-icons:newspaper" class="h-5 w-5 "/>
			      	<span class="text-lg">New</span>
			      </a> 
	          </li> 
	          <li>
			      <a class="cursor-pointer transition-transform ease-in-out duration-500 focus:transform focus:scale-[1.1] hover:transform hover:scale-[1.2] flex items-center space-x-1 rounded-lg px-3 py-1.5  font-medium">
			      	<Icon icon="akar-icons:chat-question"  class="h-5 w-5 "/>
			      	<span class="text-lg">Ask</span>
			      </a> 
	          </li>
	          <li>
			      <a class="cursor-pointer transition-transform ease-in-out duration-500 focus:transform focus:scale-[1.1] hover:transform hover:scale-[1.2] flex items-center space-x-1 rounded-lg px-3 py-1.5  font-medium">
			      	<Icon icon="akar-icons:eye-open"  class="h-5 w-5 "/>
			      	<span class="text-lg">Show</span>
			      </a>
	          </li>	
	          <li>
			      <a class="cursor-pointer transition-transform ease-in-out duration-500 focus:transform focus:scale-[1.1] hover:transform hover:scale-[1.2] flex items-center space-x-1 rounded-lg px-3 py-1.5  font-medium">
			      	<Icon icon="eos-icons:cronjob"  class="h-5 w-5 "/>
			      	<span class="text-lg">Job</span>
			      </a>
	          </li>
	    </ul>
	</nav>
</main>