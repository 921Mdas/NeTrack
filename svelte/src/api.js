/** @type {import('./$types').PageLoad} */
import { updateNetStore, updateGraphStore, findNetCaseToEdit, isEditing } from './store';
const devURL = 'http://localhost:3000/';
// const devURL = 'https://csto.onrender.com/';
export const load = async () => {
    try {
        const response = await fetch(`${devURL}net`);
        console.log('response for load', response);
        const { netOptions } = await response.json();
        return netOptions;
    }
    catch (error) {
        console.log('something went wrong 🛑');
        console.log(error);
    }
    return null;
};
export const getReps = async () => {
    try {
        const response = await fetch(`${devURL}rep`);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log('something went wrong 🛑');
        console.log(error);
    }
};
export const addNetCasesToStore = async (input) => {
    try {
        await fetch(`${devURL}net`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                input
            })
        });
        updateNetStore();
    }
    catch (error) {
        console.log('something went wrong 🛑');
        console.log(error);
    }
};
export const deleteNetCase = async (id) => {
    try {
        await fetch(`${devURL}deletenet/${id}`, {
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
    }
    catch (error) {
        console.log('something went wrong 🛑');
        console.log(error);
    }
};
export const editNet = async (id) => {
    isEditing.update((bool) => {
        bool = true;
        return bool;
    });
    // received the new version data and use the id to send both to backend
    findNetCaseToEdit(id);
};
export const addEditedNetCaseToStore = async (formData) => {
    try {
        await fetch(`${devURL}editnet/${formData._id}`, {
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
    }
    catch (error) {
        console.log('something went wrong 🛑');
        console.log(error);
    }
};
