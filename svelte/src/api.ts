/** @type {import('./$types').PageLoad} */

export const load = async () => {
	try {
		const response = await fetch('http://localhost:3000/net');
		const { netOptions }: { netOptions: App.NetCase[] } = await response.json();
		return netOptions;
	} catch (error) {
		console.log('something went wrong');
		console.log(error);
	}

	return null;
};
