<script>
  import { onMount } from 'svelte';
  import { Bar } from 'svelte-chartjs';
  import { netStore } from '../store';
  import { getReps } from "../api";
  import Note from "../components/Note.svelte"

  import {
    Chart,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
  } from 'chart.js';

  let repsArray = [];
  let ARR = 0;
  const storageData = typeof localStorage !== 'undefined' ? JSON.parse(localStorage.getItem('allReps')) : [];

  const calculateARR = (repArr) => {
    const data = repArr.length > 0 ? repArr : storageData;
    ARR = data.reduce((acc, rep) => {
      return acc + (rep?.cases?.reduce((total, cur) => {
        return total + cur?.Arr;
      }, 0) || 0);
    }, 0);
  };

  onMount(async () => {
    const reps = await getReps();
    netStore.update((storeData) => {
      return { ...storeData, reps: reps };
    });

    calculateARR(repsArray);
  });

  let casesRepNames = [];
  let casesData = [];
  let hotCasesMRR = []
  let mediumCasesMRR = []
  let luckyCasesMRR = []


if (Array.isArray(storageData)) {
  storageData.forEach((rep) => {
    casesData.push(rep.cases.length);
    casesRepNames.push(rep.name);
  });

  const calcCategoryMRR = (arr,cat)=>{
    storageData.forEach(rep=>{
    rep.cases.map((net,_i)=>{
      if(net.Category === cat){
        arr.push(net.Arr)
      }
    })
  })
  }

  onMount(()=>{
   calcCategoryMRR(hotCasesMRR,"Hot")
   calcCategoryMRR(mediumCasesMRR,"Medium") 
   calcCategoryMRR(luckyCasesMRR,"Feeling Lucky") 
  })


}




  export let data = {
    labels: storageData.length > 0 ? storageData.map((d) => d.name) : repsArray.map((d) => d.name),
    datasets: [
      {
        label: 'NET',
        data: storageData.length > 0 ? casesData : [0,0,0,0],
        backgroundColor: [
          'rgba(255, 134,159,0.4)',
          'rgba(98,  182, 239,0.4)',
          'rgba(255, 218, 128,0.4)',
          'rgba(113, 205, 205,0.4)',
          'rgba(170, 128, 252,0.4)',
          'rgba(255, 177, 101,0.4)',
        ],
        borderWidth: 2,
        borderColor: [
          'rgba(255, 134, 159, 1)',
          'rgba(98,  182, 239, 1)',
          'rgba(255, 218, 128, 1)',
          'rgba(113, 205, 205, 1)',
          'rgba(170, 128, 252, 1)',
          'rgba(255, 177, 101, 1)',
        ],
      },
    ],
  };

  

  Chart.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);
</script>

<div>
  <Bar {data} options={{ responsive: true }} />
  <Note {ARR} {hotCasesMRR} {mediumCasesMRR} {luckyCasesMRR} />
</div>


