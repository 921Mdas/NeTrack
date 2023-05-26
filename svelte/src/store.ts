import { writable, get } from 'svelte/store';

export const netStore = writable<null[]>([]);

const addToStore = () => {
	const snippets = get(netStore);
};
