<!-- <script>
    export let ARR;
    export let hotCasesMRR;
    export let mediumCasesMRR;
    export let luckyCasesMRR;


    const calcMRR =(arr)=>{
    return arr.reduce((mrr,cur)=>{
      return Math.ceil((mrr += cur)/12) ;
     },0)
    }
</script>


<div class="container flex border-2 border-slate-700 my-4 p-2 w-full">
   

    <div class="totals font-bold h3 m-3 h-20">
       <span> 🔥 MRR</span>
       <span>{calcMRR(hotCasesMRR)}</span>
    </div>

     <div class="totals font-bold h3 m-3 h-20">
       <span> ☕️ MRR</span>
       <span>{calcMRR(mediumCasesMRR)}</span>
    </div>

     <div class="totals font-bold h3 m-3 h-20">
       <span> 🤞 MRR</span>
       <span>{calcMRR(luckyCasesMRR)}</span>
    </div>

    

</div> -->
