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
                        <th>id</th>
                        <th>name</th>
                        <th>surname</th>
                        <th>alias</th>
                        <th>email</th>
                        <th>address</th>
                        <th>rol</th>
                        <th>update</th>
                        <th>remove</th>
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