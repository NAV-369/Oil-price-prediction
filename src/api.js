import axios from 'axios';

export const fetchBrentOilData = async () => {
    try {
        const response = await axios.get('http://127.0.0.1:5000/your-endpoint');
        console.log("API Data:", response.data);  // Debugging
        return response.data;
    } catch (error) {
        console.error("API Fetch Error:", error);
        return [];
    }
};