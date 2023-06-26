import axios from "axios";

const API_URL = 'http://127.0.0.1:3002/tasks';


export const addTask = async (data) => {
    try {
       return await axios.post(API_URL,data);
    }
    catch {
        console.log('Error while calling add Task  API', error.message)
    }
    
}


export const getTasks = async () => {
    try {
        return await axios.get(API_URL);
    }
    catch {
        console.log('Error while calling getTasks api', error.message);
    }
}


export const getTask = async (data) => {
    try {
       return await axios.get(`${API_URL}/${data}`);
    }
    catch {
        console.log('Error while calling addTask  API', error.message)
    }
    
}

export const editTask = async (data, id) => {
    try {
       return await axios.put(`${API_URL}/${id}`,data);
    }
    catch {
        console.log('Error while calling edit  API', error.message)
    }
    
}


export const deleteTask = async (id) => {
    try {
        return await axios.delete(`${API_URL}/${id}`);
    }
    catch {
        console.log('Erreor to delete task');
    }
}

// Declaration
let error;

// Usage
error = 'Some error message';
function myFunction(error) {
    // Usage
    console.log(error);
  }