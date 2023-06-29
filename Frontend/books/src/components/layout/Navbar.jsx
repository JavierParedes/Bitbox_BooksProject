import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../auth/context/AuthContext";

export const Navbar = ({ }) => {

    const {handlerLogout, login} = useContext(AuthContext);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Books</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/users">Usuarios</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/users/register">Registrar Usuario</NavLink>
                    </li>
                </ul>
            </div>

            <div className="collapse navbar-collapse justify-content-end" id="navbarNavLogout">
                <span className="nav-item nav-ling text-primary mx-3"> login.user?.alias </span>
                <button 
                className="btn btn-outline-success"
                onClick={handlerLogout}>
                    Cerrar Sesion
                </button>
            </div>
        </nav>
    );
}