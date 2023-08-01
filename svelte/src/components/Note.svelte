<script >
	import { onMount } from 'svelte';
  import {netStore} from '../store'

    let ARR = null;
    let MediumCases = [];
    let HotCases = [];
    let LuckyCases = [];
    let ProspectedCases = [];
    let ProspectedRatio = 0;
    let numOfHot = 0;
    let numOfLuckies = 0;
    let numOfMedium = 0;


    onMount(()=>{
      ARR = $netStore
    })

    $:{
     if($netStore){
       ARR = $netStore

       MediumCases = ARR?.map((arr,i)=>{
          if(arr.Category === "Medium"){
            return arr.Arr
          }
       })

      HotCases = ARR?.map((arr,i)=>{
          if(arr.Category === "Hot"){
  
            return arr.Arr
          }
       })

      LuckyCases = ARR?.map((arr,i)=>{
          if(arr.Category === "Feeling Lucky"){
            return arr.Arr
          }
       })

      ProspectedCases = ARR?.map((arr,i)=>{
          if(arr.Prospected) {
            return arr.Arr
          }
       }).filter((arr,_)=> (arr !== undefined)).reduce((acc, cur)=>{
         return acc += cur
       },0)


       ProspectedRatio = Math.ceil((ARR?.filter((arr,i)=>(arr.Prospected)).length / ARR.length) * 100);

       numOfHot = HotCases.filter((arr, i)=>(arr !== undefined)).length;
       numOfMedium = MediumCases.filter((arr, i)=>(arr !== undefined)).length;
       numOfLuckies = LuckyCases.filter((arr, i)=>(arr !== undefined)).length;
      }


     

    }
   
    // total ARR of each category
    const calcTotalCatARR =(arr)=>{

    if(arr.length > 0){
      return arr.reduce((mrr,cur=0)=>{
        return Math.ceil((mrr += cur)) !== undefined ?  Math.ceil((mrr += cur)) : 0;
       },0)
    }else{
      return 0
    }
    }
  
  

</script>

<div class="container flex-col border-2 border-slate-700 my-4 p-2 w-full">
  <div class="highlight flex">
    <div class="totals font-bold h3 m-3 h-20">
       <span>🔥 ARR</span>
       <span>{calcTotalCatARR(HotCases)} $</span>
    </div>

    <div class="totals font-bold h3 m-3 h-20">
       <span>← ☕️ ARR</span>
       <span>{calcTotalCatARR(MediumCases)} $</span>
    </div>

    <div class="totals font-bold h3 m-3 h-20">
       <span>← 🤞 ARR</span>
       <span>{calcTotalCatARR(LuckyCases)} $</span>
    </div>
  </div>

    <div class="numbers p-2">
      <div class="pl-1"> {ARR.length} net cases → {numOfLuckies} Feeling Luckies → {numOfMedium} Medium → {numOfHot} Hot </div>
      <div class="pl-1"> {ProspectedRatio} % of cases are prospected worth: {ProspectedCases} $</div>
    </div>

</div>

