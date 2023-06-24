import axios from "axios";

const API_URL = '';


export const addUser = async (data) => {
    try {
       return await axios.post(API_URL,data);
    }
    catch {
        console.log('Error while calling adduser  API', error.message)
    }
    
}