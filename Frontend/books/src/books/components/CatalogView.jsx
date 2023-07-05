import { useContext} from "react"
import { CatalogItem } from "./CatalogItem"
import { BookContext } from "../context/BookContext"


export const CatalogView = ({}) => {

    const {books} = useContext(BookContext);

    return (
        <>
            <div className="container">
                <div className="row">
                        {books.map(({id, itemCode, name, description,author, gender, price, priceReductionBooks,state,supplier,creationDate,creatorUser}) => (
                            <CatalogItem 
                                    key={id}
                                    id={id}
                                    itemCode={itemCode}
                                    name={name} 
                                    description={description} 
                                    author={author} 
                                    gender={gender} 
                                    price={price} 
                                    priceReductionBooks={priceReductionBooks}
                                    state={state}
                                    supplier={supplier}
                                    creationDate={creationDate}
                                    creatorUser={creatorUser}
                            />
                        ))}
                </div>
            </div>
        </>
    );
}