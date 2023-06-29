import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "./auth/pages/LoginPage";
import { useContext } from "react";
import { AuthContext } from "./auth/context/AuthContext";
import { UserRoutes } from "./routes/UserRoutes";

export const BooksApp = () => {
    const {login} = useContext(AuthContext);
    return (
        <Routes>
            {
                login.isAuth
                    ? ( 
                        <Route path='/*' element={<UserRoutes />} />
                    )
                    : <>
                    <Route path='/login' element={<LoginPage />} />

                    <Route path='/*' element={<Navigate to ="/login" /> } />
                    </>
            }
        </Routes>
    );
}