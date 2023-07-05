import { useContext } from "react";
import { BookContext } from "../context/BookContext";
import { BookForm } from "./BookForm";

export const BookModalForm = ( ) => {

    const {bookSelected, handlerCloseBookForm} = useContext(BookContext);
    return (
        <div className="open-modal animation fadeIn">
            <div className="modal" style={ {display:"block"} } tabIndex="-1">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">
                                {bookSelected.id > 0? 'Edit':'Create'} Books
                            </h5>
                        </div>
                        <div className="modal-body">
                            <BookForm
                                bookSelected={bookSelected}
                                handlerCloseBookForm={handlerCloseBookForm}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}