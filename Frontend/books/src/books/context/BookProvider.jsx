import {useBooks} from "../hooks/useBooks";
import {BookContext} from "./BookContext";

export const BookProvider =({children}) => {

    const {
        books,
        bookSelected,
        initialBookForm,
        visibleBookForm,
        handlerAddBook,
        handlerBookSelected,
        handlerRemoveBook,
        handlerOpenBookForm,
        handlerCloseBookForm,
        getAllBooks,
        getAllSuppliers,
    } = useBooks();

    return(
        <BookContext.Provider value={
            {
            books,
            bookSelected,
            initialBookForm,
            visibleBookForm,
            handlerAddBook,
            handlerBookSelected,
            handlerRemoveBook,
            handlerOpenBookForm,
            handlerCloseBookForm,
            getAllBooks,
            getAllSuppliers,
         }
        }>
        {children}
        </BookContext.Provider>
    )

}