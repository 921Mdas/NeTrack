
<script lang="ts">
  import { onMount } from 'svelte';
  import { netStore, updateNetStore } from '../store';
  import Form from "../components/Form.svelte";
  import Case from "../components/Case.svelte";
  import Dashboard from "../components/Dashboard.svelte";
  import Note from '../components/Note.svelte';
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
      <Note />
	 </div>
    <div class="test p-2 bg-slate-800 rounded-md">
      <h3 class="p2 font-bold">Hot 🔥</h3>
            {#if $netStore.length > 0}
          {#if $netStore.some(net => net.Category === caseStatus.Hot)}
            {#each $netStore as net}
              {#if net.Category === caseStatus.Hot}
                <Case {net} />
              {/if}
            {/each}
          {:else}
                       <h5 class="rounded-md p-3 text-center my-10">🔎 No cases 👀</h5>

          {/if}
        {:else}
                     <h5 class="rounded-md p-3 text-center my-10">🔎 No cases 👀</h5>

        {/if}

    </div>
    <div class="test p-2 bg-slate-800 rounded-md">
      <h3 class="p2 font-bold">Medium ☕️</h3>
          {#if $netStore.length > 0}
      {#if $netStore.some(net => net.Category === caseStatus.Medium)}
        {#each $netStore as net}
          {#if net.Category === caseStatus.Medium}
            <Case {net} />
          {/if}
        {/each}
      {:else}
           <h5 class="rounded-md p-3 text-center my-10">🔎 No cases 👀</h5>

      {/if}
    {:else}
          <h5 class="rounded-md p-3 text-center my-10">🔎 No cases 👀</h5>


    {/if}

    </div>
    <div class="test p-2 bg-slate-800 rounded-md">
      <h3 class="p2 font-bold">Feeling Lucky 🤞</h3>
      {#if $netStore.length > 0}
  {#if $netStore.some(net => net.Category === caseStatus.Lucky)}
    {#each $netStore as net}
      {#if net.Category === caseStatus.Lucky}
        <Case {net} />
      {/if}
    {/each}
  {:else}
              <h5 class="rounded-md p-3 text-center my-10">🔎 No cases 👀</h5>

  {/if}
{:else}
               <h5 class="rounded-md p-3 text-center my-10">🔎 No cases 👀</h5>


{/if}

    </div>
  </div>
</div>


