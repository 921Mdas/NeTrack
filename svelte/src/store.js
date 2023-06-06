import { writable } from 'svelte/store';
import { load, getReps } from './api';
export const netStore = writable([]);
export const repStore = writable([]);
export const graphStore = writable({
    labels: [],
    datasets: []
});
// store functions
export const updateNetStore = async () => {
    try {
        const netData = await load();
        if (netData !== null) {
            netStore.update((store) => {
                store = netData;
                return store;
            });
        }
    }
    catch (error) {
        console.log('something went wrong, couldnt update Net🛑');
        console.log(error);
    }
};
export const updateRepStore = async () => {
    try {
        const repsData = await getReps();
        if (repsData !== null) {
            const { reps } = repsData;
            repStore.update((store) => {
                store = reps;
                return store;
            });
        }
    }
    catch (error) {
        console.log('something went wrong 🛑');
        console.log(error);
    }
};
export const updateGraphStore = async () => {
    try {
        const { reps } = await getReps();
        graphStore.update((store) => {
            store = {
                labels: reps.map((rep) => rep.name),
                datasets: [
                    {
                        label: 'NET',
                        data: reps.map((rep) => rep.cases.length),
                        backgroundColor: [
                            'rgba(255, 134, 159, 0.4)',
                            'rgba(98, 182, 239, 0.4)',
                            'rgba(255, 218, 128, 0.4)',
                            'rgba(113, 205, 205, 0.4)',
                            'rgba(170, 128, 252, 0.4)',
                            'rgba(255, 177, 101, 0.4)'
                        ],
                        borderWidth: 2,
                        borderColor: [
                            'rgba(255, 134, 159, 1)',
                            'rgba(98, 182, 239, 1)',
                            'rgba(255, 218, 128, 1)',
                            'rgba(113, 205, 205, 1)',
                            'rgba(170, 128, 252, 1)',
                            'rgba(255, 177, 101, 1)'
                        ]
                    }
                ]
            };
            return store;
        });
    }
    catch (error) {
        console.log('something is wrong with the graph data🛑');
        console.log(error);
    }
};
