<script lang='ts'>
  export let net: App.NetCase;
  let categoryColor: string;

  let { Arr, repName, clientName, Value, Budget, DM, Timeline, Category, Prospected } = net;

</script>

<div class="w10 my-2">
  <table class="table-auto">
    <tbody>
      <tr class="text-center w-full b text-sm bg-slate-500 border-t-2 border-b-2 px-2 border-l-2">
        <td class="py-2   custom-header fixed-column">💼 {clientName}</td>
        <td class="py-2   custom-header fixed-column">👩🏽‍✈️ {repName?.name}</td>
        <td class="py-2   custom-header fixed-column">💰 {Arr}</td>
        <td class="py-2   custom-header fixed-column text-xs">
          {#if Value}
            V
          {/if}
          {#if DM}
            D
          {/if}
          {#if Budget}
            B
          {/if}
          {#if Timeline}
            T
          {/if}
          {#if Prospected}
            ✅
          {/if}

        </td>
        <td class="ml-2 border-2 px-3">
          <div class="actions flex gap-2">
            <button
              class="rounded-sm bg-red-900 w-5 h-6 flex justify-center items-center p-0">d</button>
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
