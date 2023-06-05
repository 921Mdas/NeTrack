/** @type {import('./$types').PageLoad} */
import { updateNetStore } from './store';
export const load = async () => {
    try {
        const response = await fetch('http://localhost:3000/net');
        const { netOptions } = await response.json();
        return netOptions;
    }
    catch (error) {
        console.log('something went wrong');
        console.log(error);
    }
    return null;
};
export const getReps = async () => {
    try {
        const response = await fetch('http://localhost:3000/rep');
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log('something went wrong');
        console.log(error);
    }
};
export const addNetCasesToStore = async (input) => {
    console.log('the hell', input);
    await fetch('http://localhost:3000/net', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            input
        })
    });
    updateNetStore();
};
export const deleteNetCase = async (id) => {
    await fetch(`http://localhost:3000/deletenet/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    updateNetStore();
};
