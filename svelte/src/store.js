import { writable } from 'svelte/store';
export const netStore = writable({
    allNetCases: [],
    allHotCases: [],
    allMediumCases: [],
    allFeelingLuckies: [],
    reps: []
});
