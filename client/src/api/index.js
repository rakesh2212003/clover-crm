import axios from 'axios';

const API = axios.create({ baseURL: process.env.REACT_APP_API_BASEURL });

export const SIGNUP = async(data) => {
    try {
        const response = await API.post('/auth/signup', data);
        return response.data;
    } catch (error) {
        console.error("SIGNUP: ", error);
        throw error;
    }
}