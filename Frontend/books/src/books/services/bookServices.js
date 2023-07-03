import axios from "axios";


const BASE_URL= 'http://localhost:5050/books';

export const findAllBooks = async () => {
    try {
        const response =await axios.get(BASE_URL);
        return response;
    } catch (error) {
        console.log(error);
    }
    return null;
}