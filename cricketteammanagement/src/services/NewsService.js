import axios from "axios";

const BASEE_URL="https://newsapi.org/v2";
const API_KEY="9fdcf4bba00441d5987f148c2ead0e12";

export async function fetchTopHeadlines() {
    try {
        const response = await axios.get(`${BASEE_URL}/top-headlines?country=in&apiKey=${API_KEY}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function fetchAllNews(){
    try {
        const response = await axios.get(`${BASEE_URL}/everything?q=cricket&apiKey=${API_KEY}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}