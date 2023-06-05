<script lang='ts'>
  import {deleteNetCase} from "../api";
  export let net: App.NetType;




</script>

<div class="w10 my-2 notification is-success bg-slate-500 rounded-sm">
  <table class="table-auto">
    <tbody>
      <tr class="text-center w-full b text-sm ">
        <td class="py-2   custom-header fixed-column">💼 {net?.clientName}</td>
        <td class="py-2   custom-header fixed-column">👩🏽‍✈️ {net?.repName?.name}</td>
        <td class="py-2   custom-header fixed-column">💰 {net?.Arr}</td>
        <td class="py-2   custom-header fixed-column text-xs">
          {#if net?.Value}
            V
          {/if}
          {#if net?.DM}
            D
          {/if}
          {#if net?.Budget}
            B
          {/if}
          {#if net?.Timeline}
            T
          {/if}
          {#if net?.Prospected}
            ✅
          {/if}

        </td>
        <td class="ml-2 px-3">
          <div class="actions flex gap-2">
            <button
              class="rounded-sm bg-red-900 w-5 h-6 flex justify-center items-center p-0" on:click={()=>{
                deleteNetCase(net?._id)
              }}>d</button>
            <button
              class="rounded-sm bg-blue-500 w-5 h-6 flex justify-center items-center p-0"
              on:click={() => {
              }}>e</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>

<style>
  .fixed-column {
    width: 200px;
    max-width: 200px;
  }
</style>
