import { RegisterPage } from "../assets/pages/RegisterPage"
import { UsersPage } from "../assets/pages/UsersPage"
import { Routes, Route, Navigate } from "react-router-dom"
import { UserProvider } from "../context/UserProvider";
import { Navbar } from "../components/layout/Navbar";

export const UserRoutes = () => {
    return (
        <>
            <UserProvider>
                <Navbar/>
                <Routes>
                    <Route path="users" element={<UsersPage/>} />
                    <Route path="users/register" element={<RegisterPage />} />
                    <Route path="/" element={<Navigate to="/users" />} />
                </Routes>
            </UserProvider>
        </>
    )
}