import axios from 'axios';

export const generateReport = async (url) => {
    await axios.get(`http://localhost:4000/screenshot?url=${url}`);
}