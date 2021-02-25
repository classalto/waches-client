import request from "superagent";

const URL = 'https://enigmatic-basin-62953.herokuapp.com';

export async function getItem(watchId) {
    const { body } = await request.get(`${URL}/watches/${watchId}`);
    return body;
}

export async function getItems() {
    const { body } = await request.get(`${URL}/watches`);
    return body;
}

export async function deleteItem(watchId) {
    const { body } = await request.delete(`${URL}/watches/${watchId}`);
    return body;
}

export async function updateItem(updatedWatch, targetId) {
    const { body } = await request.put(`${URL}/watches/${targetId}`).send(updatedWatch);
    return body;
}

export async function createItem(newWatch) {
    const { body } = await request.post(`${URL}/watches`).send(newWatch);
    return body;
}

export async function getBrands() {
    const { body } = await request.get(`${URL}/brands`);
    return body;
}