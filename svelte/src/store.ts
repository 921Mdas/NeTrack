import { writable, get } from 'svelte/store';
import { load, getReps } from './api';

export const netStore = writable<App.NetType[]>([]);

export const repStore = writable<App.RepType[]>([]);

export const graphStore = writable<App.GraphDataType>({
	labels: [],
	datasets: []
});

// store functions
export const updateNetStore = async () => {
	const netData = await load();
	if (netData !== null) {
		netStore.update((store) => {
			store = netData;
			return store;
		});
	}
};

export const updateRepStore = async () => {
	const repsData = await getReps();
	if (repsData !== null) {
		const { reps }: { reps: App.RepType[] } = repsData;
		repStore.update((store) => {
			store = reps;
			return store;
		});
	}
};

export const updateGraphStore = async () => {
	try {
		const { reps } = await getReps();
		graphStore.update((store) => {
			store = {
				labels: reps.map((rep: App.RepType) => rep.name),
				datasets: [
					{
						label: 'NET',
						data: reps.map((rep: App.RepType) => rep.cases.length),
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
	} catch (error) {
		console.log(error);
	}
};
