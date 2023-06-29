import { useContext } from "react"
import { UserRow } from "./UserRow"
import { UserContext } from "../context/UserContext"

export const UsersList = ({}) => {

    const {users} = useContext(UserContext);
    return (
        <>
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellidos</th>
                        <th>Alias</th>
                        <th>Email</th>
                        <th>Dirección</th>
                        <th>Rol</th>
                        <th>Modificar</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {   
                        users.map(({id, name, surname, alias, email, address, rol}) => (
                            <UserRow 
                            key={id}
                            id={id}
                            name={name}
                            surname={surname}
                            alias={alias}
                            email={email}
                            address={address}
                            rol={rol}
                            />
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}