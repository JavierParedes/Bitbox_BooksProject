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
        setUserForm({
            ...userForm,
            [name]: value
        })
    }

    const onSubmit =(event) =>{
        event.preventDefault();
        if(!name || !surname || !alias || (!password && id === 0) || !email || !address || !rol){
             
            Swal.fire(
                'Error de validación',
                'Debe completar todos los campos del formulario',
                'Error'
            )
        }
        if(!email.includes('@')){
            Swal.fire(
                'Error de validación de email',
                'El email debe de ser valido',
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
             onChange={onInputChange} >
            <option value="1">USER</option>
            <option value="2">ADMIN</option>
            </select>

            <input type="hidden"
            name="id" value="id"
           />

            <button 
                className="btn btn-primary"
                type="submit">
                    {id>0? 'Editar' : 'Crear'}
            </button>

            { !handlerCloseForm ||
                <button
                    className="btn btn-primary mx-2"
                    type="button"
                    onClick={() => OnCloseForm}>
                        Cerrar
                </button>
            }
        </form>
    )
}