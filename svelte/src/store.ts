import { writable, get } from 'svelte/store';
import { load, getReps } from './api';

export const netStore = writable<App.NetType[]>([]);

export const repStore = writable<App.RepType[]>([]);

export const graphStore = writable<App.GraphDataType>({
	labels: [],
	datasets: []
});

export const isEditing = writable<boolean>(false);

export const isLoading = writable<boolean>(true);

export const formStore = writable<App.NetType>({
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
	qcPoints: 0
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
	} catch (error) {
		console.log('something went wrong, couldnt update Net🛑');
		console.log(error);
	}
};

export const updateRepStore = async () => {
	try {
		const repsData = await getReps();
		if (repsData !== null) {
			const { reps }: { reps: App.RepType[] } = repsData;
			repStore.update((store) => {
				store = reps;
				return store;
			});
		}
	} catch (error) {
		console.log('something went wrong 🛑');
		console.log(error);
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
		console.log('something is wrong with the graph data🛑');
		console.log(error);
	}
};

export const findNetCaseToEdit = async (id: string) => {
	const netData = get(netStore);
	const [netCaseToEdit] = netData.filter((net) => net._id === id);

	// populate the new editing form
	formStore.update((form) => {
		form = netCaseToEdit;
		return form;
	});
};
