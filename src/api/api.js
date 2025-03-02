import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;  // Fetch from .env

export const getJobs = async () => {
    try {
        const response = await axios.get(API_URL);
        return response;
    } catch (error) {
        console.error("Error fetching jobs:", error);
        return { data: [] }; 
    }
};

export const getJobDetails = async (id) => {
    try {
        const response = await axios.get(`${API_URL}${id}/`);
        return response;
    } catch (error) {
        console.error("Error fetching job details:", error);
        return { data: null }; 
    }
};
