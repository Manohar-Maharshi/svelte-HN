<script>
	import "../app.css";
	import NavBar from '$lib/components/NavBar.svelte'
</script>

<NavBar />
<main class="px-3 lg:px-0">
	<slot />
</main>