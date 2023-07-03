import { useContext, useEffect } from "react";
import { UserModalForm } from "../../components/UserModalForm"
import { UsersList } from "../../components/UsersList";
import { UserContext } from "../../context/UserContext";

export const UsersPage = () => {
    const {
        users,
        visibleForm,
        handlerOpenForm,
        getUsers,
    } = useContext(UserContext);

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <>
            {!visibleForm || 
                <UserModalForm />
            }
            <div className="container my-4">
                <h2> Users </h2>
                <div className="row">
                    <div className="col">
                        {visibleForm || <button
                            className="btn btn-primary my-2"
                            onClick={handlerOpenForm}>
                            New Users
                        </button>}
                        {
                            users.length === 0
                                ? <div className="alert alert-warning">
                                There are no users in the system!</div>
                                : <UsersList/>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}