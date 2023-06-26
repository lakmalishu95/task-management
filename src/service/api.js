import axios from "axios";

const API_URL = 'http://127.0.0.1:3002/users';


export const addUser = async (data) => {
    try {
       return await axios.post(API_URL,data);
    }
    catch {
        console.log('Error while calling adduser  API', error.message)
    }
    
}

export const getUsers = async () => {
    try {
        return await axios.get(API_URL);
    }
    catch {
        console.log('Error while calling getUsers api', error.message);
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