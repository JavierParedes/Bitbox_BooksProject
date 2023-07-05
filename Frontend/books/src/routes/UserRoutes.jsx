import { RegisterPage } from "../assets/pages/RegisterPage"
import { UsersPage } from "../assets/pages/UsersPage"
import { Routes, Route, Navigate } from "react-router-dom"
import { UserProvider } from "../context/UserProvider";
import { Navbar } from "../components/layout/Navbar";
import { BooksPage } from "../books/pages/BooksPage.jsx";
import { BookProvider } from "../books/context/BookProvider";

export const UserRoutes = () => {
    return (
        <>
            <UserProvider>
                <Navbar/>
                <Routes>
                    <Route path="users" element={<UsersPage/>} />
                    <Route path="users/register" element={<RegisterPage />} />
                </Routes>
            </UserProvider>
            <BookProvider>
                <Routes>
                     <Route path="books" element={<BooksPage/>} />
                     <Route path="/" element={<Navigate to="/books" />} />
                </Routes>
            </BookProvider>
        </>
    )
}