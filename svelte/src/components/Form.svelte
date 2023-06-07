<script lang="ts">
  import { onMount } from 'svelte';
  import {  addNetCasesToStore, addEditedNetCaseToStore} from '../api';
  import { repStore, updateRepStore, updateGraphStore,isEditing, formStore } from '../store';
  import {Counter, calcQualifyingStage} from "../util/helper";

   
  let formData: App.NetType = {
        Arr: 0,
        DM: false,
        Value: false,
        Budget: false,
        Timeline: false,
        Prospected: false,
        Category: 'Feeling Lucky',
        Notes: '',
        clientName: '',
        Rep: '',
        qcPoints: 0,
  };


  const resetForm = () => {
		formData = {
        Arr: 0,
        DM: false,
        Value: false,
        Budget: false,
        Timeline: false,
        Prospected: false,
        Category: 'Feeling Lucky',
        Notes: '',
        clientName: '',
        Rep: '',
        qcPoints: 0,
		};

    calcQualifyingStage(0)
	};
  

  $:{
    if($isEditing){
      formData = $formStore

    }
  }



  onMount(async () => {
     updateRepStore()
  });

  const handleSubmit = async () => {
        try {
        formData.Category = await calcQualifyingStage(formData.qcPoints);
        if($isEditing){
          addEditedNetCaseToStore(formData)
        }

        if(!$isEditing){
          await addNetCasesToStore(formData);
        }
        await updateGraphStore()
        resetForm()
      } catch (error) {
        console.log('Something went wrong');
        console.log(error);
      }
    };

  const cancelEditing = ()=>{
    isEditing.update((prev)=>{
      prev = false;
      return prev
    })

    resetForm()
  }


</script>

<div class="flex flex-col gap-3">
    <h1 class="h5 font-bold">✚ 🤑 ADD NET CASE</h1>
    <label for="client" class="label bg-slate-800 ">
        <span class="font-bold text-xs text-blue-400">CLIENT</span>
        <input class="input rounded-sm  my-2" id="client" name='client' type="text" placeholder="Enter Client's Name" 
		    	bind:value={formData.clientName}
        />
    </label>
    <label for="rep bg-slate-800">
         <span class="font-bold text-xs text-blue-400">ACCOUNT MANAGER</span>
        <select id='rep' name="rep" class="select rounded-sm my-2" 

        bind:value={formData.Rep}
        >
          {#if $repStore}
            {#each $repStore as rep (rep._id)}
              <option value={rep._id}>{rep.name}</option>
            {/each}
          {/if}

        </select>   

    </label>

    <div class="qualifying_criteria flex flex-col gap-2">
        <span class="font-bold text-xs text-blue-400">QUALIFYING CRITERIA</span>
        <div class="criterias flex gap-4">
            <label class="flex items-center space-x-2">
                    <input class="checkbox" type="checkbox"  
			       checked={formData.Value}   
                   on:change={() => {
                       formData.Value = !formData.Value;
					   Counter(formData,formData.Value);
                   }}  
                    />
                    <p>Value</p>
           </label>
            <label class="flex items-center space-x-2">
                    <input class="checkbox" type="checkbox" 
			        checked={formData.DM}     
                     on:change={() => {
                        formData.DM = !formData.DM;
					    Counter(formData,formData.DM);
                     }}
                    />
                    <p>DM</p>
           </label>
            <label class="flex items-center space-x-2">
                    <input class="checkbox" type="checkbox"  
			         checked={formData.Budget}
                     on:change={() => {
                         formData.Budget = !formData.Budget;
					     Counter(formData,formData.Budget);
                     }}
                    />
                    <p>Budget</p>
           </label>
            <label class="flex items-center space-x-2">
                    <input class="checkbox" type="checkbox" 
			        checked={formData.Timeline}
                    on:change={() => {
                        formData.Timeline = !formData.Timeline;
					    Counter(formData,formData.Timeline);
                    }}
                    />
                    <p>Timeline</p>
           </label>
        </div>
    </div>

     <label for="arr" class="label bg-slate-800">
        <span class="font-bold text-xs text-blue-400">ARR</span>
        <input class="input rounded-sm  my-2" id="arr" name='arr' type="number" placeholder="Enter Arr's Amount"
			bind:value={formData.Arr}
        
        />
    </label>

    <label for="notes" class="label bg-slate-800 ">
        <span class="font-bold text-xs text-blue-400">NOTES</span>
       <textarea class="textarea rounded-sm my-2" id='notes' name='notes' rows="4" placeholder="Enter notes" 
			bind:value={formData.Notes}
       />
    </label>

     <label class="flex items-center space-x-2">
            <input class="checkbox" type="checkbox"  
			      checked={formData.Prospected}   
                   on:change={() => {
                       formData.Prospected = !formData.Prospected;
                   }}  
                    />
            <span class="font-bold text-xs text-blue-400">PROSPECTED ?</span>

    </label>
  
   
  <button type="button" class="btn rounded-sm bg-blue-700" 
    on:click={handleSubmit
    }
    >

  {#if $isEditing}
   Edit
   {:else}
   Submit
  {/if}
  </button>
  
   {#if $isEditing}
   <button on:click={cancelEditing} type="button" class="bg-slate-400 p-2">
     Cancel
   </button>
   {/if}

  
				  
    
</div>