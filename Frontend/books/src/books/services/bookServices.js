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

export const saveBook = async ({name, itemCode, description, author, gender, price,state,supplier,creationDate,creatorUser}) => {
    try {
       return await axios.post(BASE_URL, {
        name,
        itemCode,
        description,
        author,
        gender,
        price,
        state,
        supplier,
        creationDate,
        creatorUser
       });
    } catch (error) {
        console.error(error);
    }
    return undefined;
}


export const updateBook = async ({id, name, itemCode, description, author, gender, price,state,supplier,creationDate,creatorUser}) => {
 try {
    return await axios.put(`${BASE_URL}/${id}`,{
        name,
        itemCode,
        description,
        author,
        gender,
        price,
        state,
        supplier,
        creationDate,
        creatorUser
    });
 } catch (error) {
    console.error(error);
 }
 return undefined;
}

export const removeBook = async (id) => {
    try {
        await axios.delete(`${BASE_URL}/${id}`);
    } catch (error) {
        console.error(error);
    }
}

export const findAllSuppliers = async () => {
    try {
        const response = await axios.get('http://localhost:5050/suppliers');
        return response;
    } catch (error) {
        console.log(error);
    }
    return null;
}