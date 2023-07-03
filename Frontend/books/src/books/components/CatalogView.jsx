import { useEffect, useState } from "react";
import { findAllBooks } from "../services/bookServices";
import { CatalogItem } from "./CatalogItem";


export const CatalogView = ( ) => {

    const [books, setBooks] = useState([]);
    useEffect(
        () => {
            setBooks(findAllBooks());
        }, []
    )

    return (
        <>
            <div className="container">
                <h3>Books</h3>
                <div className="row">
                    {books.map(book => (
                        <div className="col-4 my-2" key={book.id} >
                            <CatalogItem 
                                name={book.name} 
                                description={book.description} 
                                itemCode={book.itemCode} 
                                author={book.author} 
                                gender={book.gender} 
                                price={book.price} 
                            />
                        </div>
                    ))}

                </div>
            </div>
        </>
    );
}