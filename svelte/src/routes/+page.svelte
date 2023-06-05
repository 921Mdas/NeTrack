
<script lang="ts">
  import { onMount } from 'svelte';
  import { netStore, updateNetStore } from '../store';
  import Form from "../components/Form.svelte";
  import Case from "../components/Case.svelte";
  import Dashboard from "../components/Dashboard.svelte";
  import {caseStatus} from "../util/helper";


onMount( () => {
   updateNetStore()
});




</script>

<div class="container h-full mx-auto flex justify-center items-center">
  <div class="content w-full h-full p-2 grid grid-cols-3 gap-2">
    <div class="test p-2 bg-slate-800 rounded-md">
      <Form  />
    </div>
    <div class="test p-2 bg-slate-800 rounded-md col-span-2">
	  	<Dashboard /> 
	</div>
    <div class="test p-2 bg-slate-800 rounded-md">
      <h3 class="p2 font-bold">Hot 🔥</h3>
      {#if $netStore}
        {#each $netStore as net }
          {#if net.Category === caseStatus.Hot}
            <Case {net} />
          {/if} 
        {/each}
      {/if}
    </div>
    <div class="test p-2 bg-slate-800 rounded-md">
      <h3 class="p2 font-bold">Medium ☕️</h3>
       {#if $netStore}
        {#each $netStore as net }
          {#if net.Category === caseStatus.Medium}
            <Case {net}  />
          {/if} 
        {/each}
      {/if}
    </div>
    <div class="test p-2 bg-slate-800 rounded-md">
      <h3 class="p2 font-bold">Feeling Lucky 🤞</h3>
       {#if $netStore}
        {#each $netStore as net }
          {#if net.Category === caseStatus.Lucky}
            <Case {net}  /> 
          {/if} 
        {/each}
      {/if}
    </div>
  </div>
</div>


