import { useContext } from "react"
import { UserContext } from "../context/UserContext"

export const UserRow = ({id, name, surname, alias, email, address, rol}) => {
    const { handlerUserSelected, handlerRemoveUser} = useContext(UserContext);
    return (
        <tr>    
                                <td>{ id }</td>
                                <td>{ name }</td>
                                <td>{ surname }</td>
                                <td>{ alias }</td>
                                <td>{ email }</td>
                                <td>{ address }</td>
                                <td>{ rol }</td>
                                <td>
                                    <button type="button" className="btn btn-secondary btn-sm"
                                    onClick={()=> handlerUserSelected({
                                        id,
                                        name,
                                        surname,
                                        alias,
                                        email,
                                        address,
                                        rol,
                                    })}>
                                        Update
                                    </button>
                                </td>
                                <td>
                                    <button type="button" className="btn btn-danger btn-sm"
                                    onClick={() =>  handlerRemoveUser(id)}>
                                        Remove
                                    </button>
                                </td>

                            </tr>
    )
}