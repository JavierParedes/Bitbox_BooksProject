import axios from "axios"

const BASE_URL= 'http://localhost:5050/users';

export const findAll = async () => {
    try {
        const response =await axios.get(BASE_URL);
        return response;
    } catch (error) {
        console.log(error);
    }
    return null;
}

export const save = async ({name, surname, alias, password, email, address, rol}) => {
    try {
       return await axios.post(BASE_URL, {
        name,
        surname,
        alias,
        password,
        email,
        address,
        rol
       });
    } catch (error) {
        console.error(error);
    }
    return undefined;
}


export const update = async ({name, surname, alias, email, address, rol}) => {
 try {
    return await axios.put(`${BASE_URL}/${id}`,{
        name,
        surname,
        alias,
        email,
        address,
        rol,
    });
 } catch (error) {
    console.error(error);
 }
 return undefined;
}

export const remove = async (id) => {
    try {
        await axios.delete(`${BASE_URL}/${id}`);
    } catch (error) {
        console.error(error);
    }
}