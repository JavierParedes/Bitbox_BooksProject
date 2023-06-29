import { useContext } from "react";
import { UserForm } from "../../components/UserForm"
import { UserContext } from "../../context/UserContext";

export const RegisterPage = () => {

    const {initialUserform} = useContext(UserContext);
    const[userSelected, setUserSelected ] = useState(initialUserform);
    return(
        <div className="container my-4">
            <h4> Registro de Usuarios </h4>
            <div className="row">
                <div className="col">
                    <UserForm 
                    userSelected={userSelected}
                    />
                </div>
            </div>
        </div>
    )
}