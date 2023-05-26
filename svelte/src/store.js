import { writable, get } from 'svelte/store';
export const netStore = writable([]);
const addToStore = () => {
    const snippets = get(netStore);
};
//# sourceMappingURL=store.js.map