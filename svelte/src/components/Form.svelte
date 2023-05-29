<script lang="ts">
  import { onMount } from 'svelte';
  import { getReps, addNetCasesToStore } from '../api';
  import { netStore } from '../store';

  const calcQualifyingStage = (input:number)=>{
    switch (input) {
        case 0:
        case 1:
            return 'Feeling Lucky';
        case 2:
        case 3:
            return 'Medium';
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            return 'Hot';
        default:
            return 'Feeling Lucky';
    }
  }

  let formData: App.NetCase = {
    ClientName: '',
    Rep: '',
    Value: false,
    DM: false,
    Budget: false,
    Timeline: false,
    ARR: 2320,
    Notes: 'No notes',
    QC: 0,
    Category: 'Feeling Lucky',
    isProspected:false
  };

  let CSTORONTO: App.Rep[] | null = null;

  onMount(async () => {
    const repsData = await getReps();
    if (repsData) {
      const { reps }: { reps: App.Rep[] } = repsData;
      CSTORONTO = reps;
      netStore.update((store) => ({
        ...store,
        reps: reps,
      }));
    }
  });

  const handleSubmit = async () => {
      try {
     formData.Category = await calcQualifyingStage(formData.QC);
      addNetCasesToStore(formData);
      resetForm()
    } catch (error) {
      console.log('Something went wrong');
      console.log(error);
    }
  };

 const Counter = (condition: boolean) => {
		if (formData.QC < 4 && condition) {
			formData.QC += 1;
		}
		if (formData.QC > 0 && !condition) {
			formData.QC -= 1;
		}
		if (formData.QC > 4) {
			formData.QC = 4;
		}
		if (formData.QC < 0) {
			formData.QC = 0;
		}

};


const resetForm = () => {
		formData = {
			ClientName: '',
			Rep: '',
			Value: false,
			DM: false,
			Budget: false,
			Timeline: false,
			ARR: 0,
			Notes: '',
			QC: 0,
			Category: 'Feeling Lucky',
      isProspected:false
		};

        calcQualifyingStage(0)
	};
  
</script>


<div class="flex flex-col gap-3">
    <h1 class="h5 font-bold">✚ 🤑 ADD NET CASE</h1>
    <label for="client" class="label bg-slate-800 ">
        <span class="font-bold text-xs text-blue-400">CLIENT</span>
        <input class="input rounded-sm  my-2" id="client" name='client' type="text" placeholder="Enter Client's Name" 
			bind:value={formData.ClientName}
        />
    </label>
    <label for="rep bg-slate-800">
         <span class="font-bold text-xs text-blue-400">ACCOUNT MANAGER</span>
        <select id='rep' name="rep" class="select rounded-sm my-2" 

        bind:value={formData.Rep}
        >
          {#if CSTORONTO}
        {#each CSTORONTO as rep (rep._id)}
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
					   Counter(formData.Value);
                   }}  
                    />
                    <p>Value</p>
           </label>
            <label class="flex items-center space-x-2">
                    <input class="checkbox" type="checkbox" 
			        checked={formData.DM}     
                     on:change={() => {
                        formData.DM = !formData.DM;
					    Counter(formData.DM);
                     }}
                    />
                    <p>DM</p>
           </label>
            <label class="flex items-center space-x-2">
                    <input class="checkbox" type="checkbox"  
			         checked={formData.Budget}
                     on:change={() => {
                         formData.Budget = !formData.Budget;
					     Counter(formData.Budget);
                     }}
                    />
                    <p>Budget</p>
           </label>
            <label class="flex items-center space-x-2">
                    <input class="checkbox" type="checkbox" 
			        checked={formData.Timeline}
                    on:change={() => {
                        formData.Timeline = !formData.Timeline;
					    Counter(formData.Timeline);
                    }}
                    />
                    <p>Timeline</p>
           </label>
        </div>
    </div>

     <label for="arr" class="label bg-slate-800">
        <span class="font-bold text-xs text-blue-400">ARR</span>
        <input class="input rounded-sm  my-2" id="arr" name='arr' type="number" placeholder="Enter Arr's Amount"
			bind:value={formData.ARR}
        
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
			      checked={formData.isProspected}   
                   on:change={() => {
                       formData.isProspected = !formData.isProspected;
                   }}  
                    />
            <span class="font-bold text-xs text-blue-400">PROSPECTED ?</span>

    </label>
  

    <button type="button" class="btn rounded-sm variant-filled-primary" 
    on:click={handleSubmit
    
    }
    >Submit</button>
				  
    
</div>