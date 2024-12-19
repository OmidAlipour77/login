import axios from 'axios';

const axiosInstance = axios.create({
    headers: {
        'Content-Type': 'application/json',
        // Authorization can be added if needed
        // 'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
});

// Request helpers for GET, POST, PUT, DELETE

const get = async (url, params = {}) => {
    try {
        const response = await axiosInstance.get(url, { params });
        return response.data; // Return the data from the response
    } catch (error) {
        handleRequestError(error);
    }
};

const post = async (url, data = {}) => {
    try {
        const response = await axiosInstance.post(url, data);
        return response.data;
    } catch (error) {
        handleRequestError(error);
    }
};

const put = async (url, data = {}) => {
    try {
        const response = await axiosInstance.put(url, data);
        return response.data;
    } catch (error) {
        handleRequestError(error);
    }
};

const del = async (url) => {
    try {
        const response = await axiosInstance.delete(url);
        return response.data;
    } catch (error) {
        handleRequestError(error);
    }
};

// Error handling for request errors
const handleRequestError = (error) => {
    // Check if the error is related to response status
    if (error.response) {
        // The server responded with a status other than 2xx
        console.error('Request failed with status', error.response.status);
        console.error('Response data:', error.response.data);
    } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received', error.request);
    } else {
        // Something happened while setting up the request
        console.error('Error setting up the request:', error.message);
    }
    throw error; // Re-throw the error to handle it in the calling component
};

// Export the request helpers
export const RequestHelpers = {
    get,
    post,
    put,
    del,
};
