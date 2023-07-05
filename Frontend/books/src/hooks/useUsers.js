import { useReducer, useState } from "react";
import { usersReducer } from "../reducers/usersReducer";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import { findAll, remove, save, update } from "../services/userServices";

const initialUsers = [];

const initialUserForm = {
    id: 0,
    name:'',
    surname:'',
    alias:'',
    password:'',
    email:'',
    address:'',
    rol:'USER',
}

export const useUsers = () => {

    const [users, dispatch] = useReducer (usersReducer, initialUsers);
    const [userSelected, setUserSelected ] = useState(initialUserForm);
    const [visibleForm, setVisibleForm] = useState(false);
    const navigate = useNavigate();

    const getUsers= async ()=>{
        const result = await findAll();
        dispatch({
            type: 'loadingUsers',
            payload: result.data,
        });
        console.log(result.data);
    }

    const handlerAddUser = async (user) => {
        console.log(user);
        let response;

        if(user.id ===0){
           response= await save(user);
        } else {
            response = await update(user);
        }

        dispatch({
            type: (user.id ===0) ? 'addUser' : 'updateUser',
            payload: response.data,
        });
        
        Swal.fire(
            (user.id ===0) ? 
            'User Created' : 
            'Modified User',
            (user.id ===0) ? 
            'The user has been created successfully' :
            'The user has been successfully updated',
            'Success'
        ); 
        handlerCloseForm();
        navigate('/users');
    }

    const handlerRemoveUser = (id) => {
        Swal.fire({
            title: 'Are you sure you want to delete?',
            text: "Beware the user will be deleted!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, eliminate!'
          }).then((result) => {
            if (result.isConfirmed) {
                remove(id);
                dispatch({
                    type: 'removeUser',
                    payload: id,
                })  

              Swal.fire(
                'User Deleted!',
                'The user has been successfully deleted.',
                'success'
              )
            }
          })
    }

    const handlerUserSelected = (user) => {
        setVisibleForm(true);
        setUserSelected({ ...user });
      
    }
    
    const handlerOpenForm = () => {
        setVisibleForm(true);
    }

    const handlerCloseForm = () => {
        setVisibleForm(false);
        setUserSelected(initialUserForm);
    }
    return {
        users, 
        userSelected,
        initialUserForm,
        visibleForm,
        handlerAddUser,
        handlerUserSelected,
        handlerRemoveUser,
        handlerOpenForm,
        handlerCloseForm,
        getUsers,
    }
}