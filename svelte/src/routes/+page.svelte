
<script lang="ts">
  import { load } from "../api";
  import { onMount, setContext } from 'svelte';
  import { netStore } from '../store';
  import Form from "../components/Form.svelte";
  import Case from "../components/Case.svelte";

  export let data: App.NetCase[] | null;
  let TorontoNetCases: App.NetCase[] | null = [];

  const caseStatus = {
    Medium: "Medium",
    Hot: "Hot",
    Lucky: "Feeling Lucky"
  };

  onMount(async () => {
    data = await load();
    TorontoNetCases = data;
    netStore.update((store) => ({
      ...store,
      allNetCases: data,
    }));

    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('netCases', JSON.stringify(TorontoNetCases));
    }
  });

  setContext('netCases', TorontoNetCases); // Share TorontoNetCases with child components

  $: {
    if (typeof localStorage !== 'undefined') {
      const storedData = localStorage.getItem('netCases');
      if (storedData) {
        TorontoNetCases = JSON.parse(storedData);
      }
    }
  }

  $: {
    TorontoNetCases = $netStore.allNetCases;
  }
</script>

<div class="container h-full mx-auto flex justify-center items-center">
  <div class="content w-full h-full p-2 grid grid-cols-3 gap-2">
    <div class="test p-2 bg-slate-800 rounded-md">
      <Form />
    </div>
    <div class="test p-2 bg-slate-800 rounded-md col-span-2">Dashboard</div>
    <div class="test p-2 bg-slate-800 rounded-md">
      <h3 class="p2 font-bold">Hot 🔥</h3>
      {#if TorontoNetCases}
        {#each TorontoNetCases as net }
          {#if net.Category === caseStatus.Hot}
            <Case {net} />
          {/if} 
        {/each}
      {/if}
    </div>
    <div class="test p-2 bg-slate-800 rounded-md">
      <h3 class="p2 font-bold">Medium ☕️</h3>
      {#if TorontoNetCases}
        {#each TorontoNetCases as net }
          {#if net.Category === caseStatus.Medium}
            <Case {net} />
          {/if} 
        {/each}
      {/if}
    </div>
    <div class="test p-2 bg-slate-800 rounded-md">
      <h3 class="p2 font-bold">Feeling Lucky 🤞</h3>
      {#if TorontoNetCases}
        {#each TorontoNetCases as net }
          {#if net.Category === caseStatus.Lucky}
            <Case {net} />
          {/if} 
        {/each}
      {/if}
    </div>
  </div>
</div>

<!-- <script lang="ts">
  import { load } from "../api";
  import { onMount } from 'svelte';
  import { netStore } from '../store';
  import Form from "../components/Form.svelte";
  import Case from "../components/Case.svelte";

  export let data: App.NetCase[] | null;
  let TorontoNetCases: App.NetCase[] | null = [];

  const caseStatus = {
    Medium: "Medium",
    Hot: "Hot",
    Lucky: "Feeling Lucky"
  };

  onMount(async () => {
    data = await load();
    TorontoNetCases = data;
    netStore.update((store) => ({
      ...store,
      allNetCases: data,
    }));

    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('netCases', JSON.stringify(TorontoNetCases));
    }
  });

  TorontoNetCases = $netStore.allNetCases;

  const storedData = typeof localStorage !== 'undefined' ? localStorage.getItem('netCases') : null;
  if (storedData) {
    TorontoNetCases = JSON.parse(storedData);
  }
</script>

<div class="container h-full mx-auto flex justify-center items-center">
  <div class="content w-full h-full p-2 grid grid-cols-3 gap-2">
    <div class="test p-2 bg-slate-800 rounded-md">
      <Form />
    </div>
    <div class="test p-2 bg-slate-800 rounded-md col-span-2">Dashboard</div>
    <div class="test p-2 bg-slate-800 rounded-md">
      <h3 class="p2 font-bold">Hot 🔥</h3>
      {#if TorontoNetCases}
        {#each TorontoNetCases as net }
          {#if net.Category === caseStatus.Hot}
            <Case {net} />
          {/if} 
        {/each}
      {/if}
    </div>
    <div class="test p-2 bg-slate-800 rounded-md">
      <h3 class="p2 font-bold">Medium ☕️</h3>
      {#if TorontoNetCases}
        {#each TorontoNetCases as net }
          {#if net.Category === caseStatus.Medium}
            <Case {net} />
          {/if} 
        {/each}
      {/if}
    </div>
    <div class="test p-2 bg-slate-800 rounded-md">
      <h3 class="p2 font-bold">Feeling Lucky 🤞</h3>
      {#if TorontoNetCases}
        {#each TorontoNetCases as net }
          {#if net.Category === caseStatus.Lucky}
            <Case {net} />
          {/if} 
        {/each}
      {/if}
    </div>
  </div>
</div> -->
