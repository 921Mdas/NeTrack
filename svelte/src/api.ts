/** @type {import('./$types').PageLoad} */
import { updateNetStore, updateGraphStore, findNetCaseToEdit, isEditing } from './store';

const devURL = 'http://localhost:3000/';
const prodURL = 'https://csto.onrender.com/';

export const load = async () => {
	try {
		const response = await fetch(`${prodURL}net`);

		console.log('response for load', response);
		const { netOptions }: { netOptions: App.NetType[] } = await response.json();
		return netOptions;
	} catch (error) {
		console.log('something went wrong 🛑');
		console.log(error);
	}

	return null;
};

export const getReps = async () => {
	try {
		const response = await fetch(`${prodURL}rep`);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log('something went wrong 🛑');
		console.log(error);
	}
};

export const addNetCasesToStore = async (input: App.NetType) => {
	try {
		await fetch(`${prodURL}net`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				input
			})
		});

		updateNetStore();
	} catch (error) {
		console.log('something went wrong 🛑');
		console.log(error);
	}
};

export const deleteNetCase = async (id: string) => {
	try {
		await fetch(`${prodURL}deletenet/${id}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			}
		});

		updateNetStore();
		updateGraphStore();
		isEditing.update((prev) => {
			prev = false;
			return prev;
		});
	} catch (error) {
		console.log('something went wrong 🛑');
		console.log(error);
	}
};

export const editNet = async (id: string) => {
	isEditing.update((bool) => {
		bool = true;
		return bool;
	});
	// received the new version data and use the id to send both to backend
	findNetCaseToEdit(id);
};

export const addEditedNetCaseToStore = async (formData: App.NetType) => {
	try {
		await fetch(`${prodURL}editnet/${formData._id}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				formData
			})
		});

		updateNetStore();
		updateGraphStore();
		isEditing.update((bool) => {
			bool = false;
			return bool;
		});
	} catch (error) {
		console.log('something went wrong 🛑');
		console.log(error);
	}
};
