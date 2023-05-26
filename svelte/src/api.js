/** @type {import('./$types').PageLoad} */
export const load = async () => {
    const response = await fetch('http://localhost:3000/net');
    const data = await response.json();
    return {
        snippets: data
    };
};
//# sourceMappingURL=api.js.map