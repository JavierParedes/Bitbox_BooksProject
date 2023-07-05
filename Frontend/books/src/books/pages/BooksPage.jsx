import { useContext, useEffect } from "react";
import { CatalogView } from "../components/CatalogView"
import { BookContext } from "../context/BookContext";
import { BookModalForm } from "../components/BookModalForm";


export const BooksPage = () => { 

    const {
        books,
        visibleBookForm,
        handlerOpenBookForm,
        getAllBooks,
    } = useContext(BookContext);

    useEffect(() => {
        getAllBooks();
    }, []);

    return (
        <>  
            {!visibleBookForm || 
                <BookModalForm />
            }
            <div className="container my-2">
                <h3>Books</h3>
                <div className="col">
                        {visibleBookForm || <button
                            className="btn btn-primary my-2"
                            onClick={handlerOpenBookForm}>
                            New Books
                        </button>}
                        {
                            books.length === 0
                                ? <div className="alert alert-warning">
                                There are no books in the system!</div>
                                : <CatalogView/>
                        }
                </div>
            </div>
        </>
    )
}