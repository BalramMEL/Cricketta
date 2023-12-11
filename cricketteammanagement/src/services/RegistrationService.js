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
        const response = await axios.post(`${BASE_URL}/player`, playerData);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function deletePlayer(_id) {
    try {
        const response=await axios.delete(`${BASE_URL}/player/${_id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function updatePlayer(updatedData,_id){
    try {
        const response=await axios.put(`${BASE_URL}/player/${_id}`,updatedData);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function fetchPlayerById(_Id){
    try {
        const response=await axios.get(`${BASE_URL}/player/${_Id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}