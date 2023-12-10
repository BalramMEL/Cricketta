import axios from "axios";
import { BASE_URL } from "./ApiConstants";


export async function fetchTeamCards() {
    try {
        const response = await axios.get(`${BASE_URL}/teams`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function saveTeamCard(teamData) {
    try {
        const response = await axios.post(`${BASE_URL}/teams`, teamData);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}