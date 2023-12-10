import axios from "axios";
import { BASE_URL } from "./ApiConstants";


export async function fetchPlayerCards() {
    try {
        const response = await axios.get(`${BASE_URL}/player`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function savePlayerCard(playerData) {
    try {
        const response = await axios.post(`${BASE_URL}/player`, playerData, {headers: {"Content-Type": "multipart/form-data"}});
        return response.data;
    } catch (error) {
        console.log(error);
    }
}