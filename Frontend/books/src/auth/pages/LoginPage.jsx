import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

const initialLoginForm = {
    alias: '',
    password: '',
}

export const LoginPage = () => {
    const {handlerLogin} = useContext(AuthContext);
    const[loginForm, setLoginForm] = useState(initialLoginForm);
    const {alias, password} = loginForm;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setLoginForm({
            ...loginForm,
            [ name ]: value,
        })
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        if(!alias || !password){
            Swal.fire(
                'Error de validación',
                'Alias y password requeridos',
                'Error'
            );
        }
        handlerLogin({alias, password});
        setLoginForm(initialLoginForm);
    }

    return (
        <div className="modal" style={ {display:'block'} } tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Login Users</h5>
                    </div>
                    <form onSubmit={ onSubmit }>
                        <div className="modal-body">
                            <input className="form-control my-3 w-75"
                                placeholder="Alias" 
                                name="alias" 
                                value={alias}
                                onChange={onInputChange}
                            />

                            <input className="form-control my-3 w-75"
                                placeholder="Contraseña" 
                                name="password" 
                                type="password"
                                value={password}
                                onChange={onInputChange}
                            />
                        </div>
                        <div className="modal-footer">
                            <button type="submit" 
                            className="btn btn-primary">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}