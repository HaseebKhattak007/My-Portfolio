import { projects, skills } from '../data/portfolioData';

// Mock API calls to use local data
export const fetchProjects = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ data: projects }), 500);
    });
};

export const fetchSkills = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ data: skills }), 500);
    });
};

// This will be replaced by direct EmailJS call in the component
export const sendMessage = (messageData) => {
    console.log('Message received in mock API:', messageData);
    return Promise.resolve({ data: { message: 'Mock success' } });
};

export default { fetchProjects, fetchSkills, sendMessage };
