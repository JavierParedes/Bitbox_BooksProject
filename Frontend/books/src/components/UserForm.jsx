import { useContext, useEffect, useState } from "react"
import Swal from "sweetalert2";
import { UserContext } from "../context/UserContext";

export const UserForm = ({userSelected, handlerCloseForm}) => {
    const {initialUserForm, handlerAddUser}= useContext(UserContext);
    const[userForm, setUserForm] = useState(initialUserForm);
    const{id, name, surname, alias, password, email, address, rol} = userForm;

    useEffect(() => {
        setUserForm({
            ...userSelected,
            password:'',
        });
    }, [userSelected])

    const onInputChange = ({target}) => {
        const { name, value } = target;

        console.log(target.name)
        setUserForm({
            ...userForm,
            [name]: value
        })
    }

    const onSubmit =(event) =>{
        event.preventDefault();
        if(!name || !surname || !alias || (!password && id === 0) || !email || !address ){
             
            Swal.fire(
                'Validation error',
                'You must complete all the fields of the form',
                'Error'
            )
        }
    
        handlerAddUser(userForm);
    }

    const onCloseForm = () => {
        handlerCloseForm();
        setUserForm(initialUserForm);
    }
    
    return (
        <form onSubmit={onSubmit}>
            <input className="form-control my-3 w-75"
            placeholder="Name"
            name="name"
            onChange={onInputChange} />

            <input className="form-control my-3 w-75"
            placeholder="Surname"
            name="surname" 
            onChange={onInputChange} />

            <input className="form-control my-3 w-75"
            placeholder="Alias"
            name="alias" 
            onChange={onInputChange} />

            {id>0 || <input className="form-control my-3 w-75"
            placeholder="Password"
            type="password"
            name="password" 
            onChange={onInputChange} />}

            <input className="form-control my-3 w-75"
            placeholder="Email"
            name="email" 
            onChange={onInputChange} />

            <input className="form-control my-3 w-75"
            placeholder="Address"
            name="address" 
            onChange={onInputChange} />

            <select className="form-select my-3 w-75" aria-label="Rol"
                name="rol" onChange={onInputChange}>
            <option value="USER">USER</option>
            <option value="ADMIN">ADMIN</option>
            </select>

            <input type="hidden"
            name="id" value="id"
           />

            <button 
                className="btn btn-primary"
                type="submit">
                    {id>0? 'Edit' : 'Create'}
            </button>

            { !handlerCloseForm ||
                <button
                    className="btn btn-primary mx-2"
                    type="button"
                    onClick={() => onCloseForm()}>
                        Close
                </button>
            }
        </form>
    )
}