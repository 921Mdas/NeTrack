<script>
  import { onMount } from 'svelte';
  import { Bar } from 'svelte-chartjs';
  import { repStore, netStore,graphStore, updateGraphStore } from '../store';
  import { getReps } from "../api";
  import Note from "../components/Note.svelte";
  import { setLocalStorage, getLocalStorage } from "../util/helper";
  import {
    Chart,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
  } from 'chart.js';

  let error = null;
  let data = null;

  onMount(async () => {
      await updateGraphStore()
      data = $graphStore;
  });

   $: {
    if ($graphStore) {
      data = $graphStore;
    }
  }




  Chart.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);
</script>

{#if error}
  <div>Error: {error}</div>
{:else}
  <div>
    {#await data}
      <div>Loading...</div>
    {:then}
      {#if $repStore.length > 0}
        <Bar {data} options={{ responsive: true }} />
      {:else}
        <div>No data available</div>
      {/if}
    {:catch error}
      <div>Error: {error.message}</div>
    {/await}
  </div>
{/if}
