
<script>
/** @type {import('./$types').PageData} */
import {load} from "../api"
import {onMount} from 'svelte'
export let data;

onMount(async () => {
	data = await load()
	console.log(data)
})
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<h1>Welcome to Net page</h1>
</div>
