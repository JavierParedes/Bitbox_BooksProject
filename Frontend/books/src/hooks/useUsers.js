import { useReducer, useState } from "react";
import { usersReducer } from "../reducers/usersReducer";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import { findAll, remove, save } from "../services/userServices";

const initialUsers = [];

const initialUserform = {
    id:0,
    name:'',
    surname:'',
    alias:'',
    password:'',
    email:'',
    address:'',
    rol:'',
}

export const useUsers = () => {

    const [users, dispatch] = useReducer (usersReducer, initialUserform);
    const [userSelected, setUserSelected ] = useState(initialUserform);
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
            'Usuario Creado' : 
            'Usuario Modificado',
            (user.id ===0) ? 
            'El usuario ha sido creado con exito' :
            'El usuario ha sido actualizado con exito',
            'Success'
        ); handlerCloseForm();
        navigate('users');
    }

    const handlerRemoveUser = (id) => {
        Swal.fire({
            title: 'Esta seguro que desea eliminar?',
            text: "Cuidado el usuario sera eliminado!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!'
          }).then((result) => {
            if (result.isConfirmed) {
                remove(id);
                dispatch({
                    type: 'removeUser',
                    payload: id,
                })  

              Swal.fire(
                'Usuario Eliminado!',
                'El usuario ha sido eliminado con exito.',
                'success'
              )
            }
          })
    }

    const handlerUserSelected = (user) => {
        setVisibleForm(true);
        setUserSelected({...user});
      
    }
    
    const handlerOpenForm = () => {
        setVisibleForm(true)
    }

    const handlerCloseForm = () => {
        setVisibleForm(false);
        setUserSelected(initialUserform);
    }
    return {
        users, 
        userSelected,
        initialUserform,
        visibleForm,
        
        handlerAddUser,
        handlerUserSelected,
        handlerRemoveUser,
        handlerOpenForm,
        handlerCloseForm,
        getUsers,
    }
}