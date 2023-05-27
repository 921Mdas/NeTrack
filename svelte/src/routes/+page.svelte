
<script lang="ts">
/** @type {import('./$types').PageData} */
import {load} from "../api"
import {onMount} from 'svelte'
import { netStore} from '../store'
export let data:App.NetCase[] | null;

onMount(async () => {
	data = await load()
    netStore.set({
		...netStore, allNetCases: data,
		allHotCases: null,
		allMediumCases: null,
		allFeelingLuckies: null
	})
})

const allNetCases = $netStore.allNetCases

</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<h1>Welcome to Net page</h1>
</div>
