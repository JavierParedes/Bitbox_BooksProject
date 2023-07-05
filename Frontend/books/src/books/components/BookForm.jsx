import { useContext, useEffect, useState } from "react";
import { BookContext } from "../context/BookContext";
import Swal from "sweetalert2";


export const BookForm = ({bookSelected, handlerCloseBookForm}) => {
    const{initialBookForm, handlerAddBook, getAllSuppliers,
    }= useContext(BookContext);
    const[bookForm, setBookForm] = useState(initialBookForm);
    const[suppliersData, setSuppliersData] = useState([]);
    const[priceReductionData, setPriceReductionData] = useState([]);
    const{id, name, description, itemCode, author, price} = bookForm;

    useEffect(() => {
        setBookForm({
            ...bookSelected,
        });
    }, [bookSelected])

    useEffect(() => {
        fetch('http://localhost:5050/suppliers')
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setSuppliersData(data)
        })
        .catch((error) => {
            console.error(error);
        })

        fetch('http://localhost:5050/prices')
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setPriceReductionData(data)
        })
        .catch((error) => {
            console.error(error);
        })
    }, [])

    const onInputChange = ({target}) => {
        const { name, value } = target;
        setBookForm({
            ...bookForm,
            [name]: value
        })
        console.log(value)
    }

    const onSubmit =(event) =>{
        event.preventDefault();
        if(!name || !description || !itemCode || !author || !price ){
            Swal.fire(
                'Validation error',
                'You must complete all the fields of the form',
                'Error'
            )
        }

        handlerAddBook(bookForm);
    }

    const onCloseForm = () => {
        handlerCloseBookForm();
        setBookForm(initialBookForm);
    }
    
    return (
        <form onSubmit={onSubmit}>
        <input className="form-control my-3 w-75"
        placeholder="Name"
        name="name"
        onChange={onInputChange} />

        <input className="form-control my-3 w-75"
        placeholder="Description"
        name="description" 
        onChange={onInputChange} />
        
        <input className="form-control my-3 w-75"
        placeholder="ItemCode"
        name="itemCode" 
        onChange={onInputChange} />

        {id>0 || <input className="form-control my-3 w-75"
        placeholder="Author"
        name="author" 
        onChange={onInputChange} />}

        <input className="form-control my-3 w-75"
        placeholder="Gender"
        name="gender" 
        onChange={onInputChange} />

        <input className="form-control my-3 w-75"
        placeholder="Price"
        name="price" 
        onChange={onInputChange} />

        <select className="form-select my-3 w-75" 
            name="state" onChange={onInputChange}>
        <option value="">Select to State</option>
        <option value="ACTIVE">ACTIVE</option>
        <option value="DISCONTINUED">DISCONTINUED</option>
        </select>

        <select className="form-select my-3 w-75" 
            name="supplier_id" onChange={onInputChange}>
            <option value="">Select to Supplier</option>
            {suppliersData.map(supplie=>(
                <option key={supplie.id} value={supplie.id}>{supplie.name}</option>
            ))}
        </select>
        <label>Precio Reducido </label>
        <select multiple={true} className="form-select my-3 w-75" 
            name="priceReductionBooks" onChange={onInputChange}>
            {priceReductionData.map(price=>(
                <option key={price.id} value={price.id}>{price.priceReduction}</option>
            ))}
        </select>
                
        <input type="hidden"
        name="id" value="id"
       />

        <button 
            className="btn btn-primary"
            type="submit">
                {id>0? 'Edit' : 'Create'}
        </button>

        { !handlerCloseBookForm ||
            <button
                className="btn btn-primary mx-2"
                type="button"
                onClick={() => onCloseForm()}>
                    Close
            </button>
        }
        </form>

    )
}