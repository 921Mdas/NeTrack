import { writable } from 'svelte/store';

export const netStore = writable<App.NetStoreType>({
	allNetCases: [],
	allHotCases: [],
	allMediumCases: [],
	allFeelingLuckies: []
});

// put function to add to database
export const addNetCasesToStore = (input: App.NetCase) => {
	// const snippets = get(netStore);
	// send to backend
	return input;
};

// store allnet cases from backend inside store
export const allNetFromBackendToStore = (input: App.NetCase[]) => {
	// const snippets = get(netStore);
	console.log('here all the netcases', input);
};
