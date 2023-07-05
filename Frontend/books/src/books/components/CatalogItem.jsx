import { useContext, useEffect } from "react"
import { BookContext } from "../context/BookContext"
import libroimg from "../../../src/assets/img/bookimage.png"

export const CatalogItem = ({id,itemCode, name, description,author,gender,price,priceReductionBooks,state,supplier,creationDate,creatorUser}) => {
  
  const { handlerBookSelected, handlerRemoveBook} = useContext(BookContext);

  return (
    <>
                                <div className="col-4 mt-5">
                                    <img src={libroimg} width="160"/>
                                    <h2> { name } </h2>
                                    <p> ItemCode: { itemCode } </p>
                                    <p> Description: { description } </p>
                                    <p> Author: { author } </p>
                                    <p> Gender: { gender } </p>
                                    <p> Price: { price } </p>
                                    <p> State: { state } </p>
                                    
                                    {/* 
                                        <p> PriceReduction: { priceReductionBooks } </p>
                                        <p> Supplier: { supplier.name } </p>
                                        <p> CreationDate: { creationDate } </p>
                                        <p> CreationUser: { creatorUser.name } </p>
                                    */}

                                    <button type="button" className="btn btn-secondary btn-sm m-2"
                                    onClick={()=> handlerBookSelected({
                                        id,
                                        itemCode,
                                        name,
                                        description,
                                        author,
                                        gender,
                                        price,
                                    })}>
                                        Update
                                    </button>
                                    <button type="button" className="btn btn-danger btn-sm m-2"
                                    onClick={() =>  handlerRemoveBook(id)}>
                                        Remove
                                    </button>
                                </div>
    </>
  )
}
