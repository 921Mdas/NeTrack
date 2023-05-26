/** @type {import('./$types').PageLoad} */
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	try {
		const response = await fetch('http://localhost:3000/net');
		const data = await response.json();
		console.log('data', response);
		return {
			snippets: data
		};
	} catch (error) {
		console.log('something went wrong');
		console.log(error);
	}
};
