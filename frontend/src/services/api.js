import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:5000/api',
});

export const fetchProjects = () => API.get('/projects');
export const fetchSkills = () => API.get('/skills');
export const sendMessage = (messageData) => API.post('/messages', messageData);

export default API;
