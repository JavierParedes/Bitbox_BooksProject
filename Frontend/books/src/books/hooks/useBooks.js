import { useReducer, useState } from "react"
import { useNavigate } from "react-router-dom"
import { booksReducer } from "../reducers/booksReducer"
import Swal from 'sweetalert2'
import {findAllBooks, saveBook, removeBook, updateBook, findAllSuppliers} from "../services/bookServices"
const initialBooks = [];

const fecha = new Date();

const initialBookForm= {
    id: 0,
    name:'',
    itemCode:'',
    description:'',
    author:'',
    gender:'',
    price:'',
    priceReductionPrice: [],
    state:'ACTIVE',
    supplier_id: [],
    creationdate: fecha.toISOString(),
    creator_user_id: [],
}

const initialSuppliers= {
    id: 0,
    name:'',
    address:'',
}

export const useBooks = () => { 

    const [books, dispatch] = useReducer (booksReducer, initialBooks);
    const [bookSelected, setBookSelected ] = useState(initialBookForm);
    const [visibleBookForm, setVisibleBookForm] = useState(false);
    const navigate = useNavigate();


    const getAllSuppliers=async () => {
        const result = await findAllSuppliers();
        console.log(result);
        console.log(suppliersData);
        dispatch({
            type: 'loadingSuppliers',
            payload: result.data,
        });
        console.log(result.data);
    }

    const getAllBooks= async ()=>{
        const result = await findAllBooks();
        console.log(result);
        dispatch({
            type: 'loadingBooks',
            payload: result.data,
        });
    }

    const handlerAddBook = async (book) => {
        console.log(book);
        let response;

        if(book.id ===0){
           response= await saveBook(book);
        } else {
            response = await updateBook(book);
        }

        dispatch({
            type: (book.id ===0) ? 'addBook' : 'updateBook',
            payload: response.data,
        });
        
        Swal.fire(
            (book.id ===0) ? 
            'Book Created' : 
            'Modified Book',
            (book.id ===0) ? 
            'The book has been created successfully' :
            'The book has been successfully updated',
            'Success'
        ); 
        handlerCloseBookForm();
        navigate('/books');
    }

    const handlerRemoveBook = (id) => {
        Swal.fire({
            title: 'Are you sure you want to delete?',
            text: "Beware the book will be deleted!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, eliminate!'
          }).then((result) => {
            if (result.isConfirmed) {
                removeBook(id);
                dispatch({
                    type: 'removeBook',
                    payload: id,
                })  

              Swal.fire(
                'Book Deleted!',
                'The book has been successfully deleted.',
                'success'
              )
            }
          })
    }

    const handlerBookSelected = (book) => {
        setVisibleBookForm(true);
        setBookSelected({ ...book });
      
    }
    
    const handlerOpenBookForm = () => {
        setVisibleBookForm(true);
    }

    const handlerCloseBookForm = () => {
        setVisibleBookForm(false);
        setBookSelected(initialBookForm);
    }


    return {
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
}
