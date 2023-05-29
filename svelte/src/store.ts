import { writable } from 'svelte/store';

export const netStore = writable<App.NetStoreType>({
	allNetCases: [],
	allHotCases: [],
	allMediumCases: [],
	allFeelingLuckies: [],
	reps: []
});
