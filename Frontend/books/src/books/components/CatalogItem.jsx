export const CatalogItem = (name, description,itemCode,author,gender,price) => {
  return (
    <>
        <div className="card">
                                <div className="card-body">
                                    <div className="card-title"> name </div>
                                    <div className="card-text"> description </div>
                                    <div className="card-text"> itemCode </div>
                                    <div className="card-text"> author </div>
                                    <div className="card-text"> gender </div>
                                    <div className="card-text"> price </div>
                                    <button className="btn btn-primary"> See details </button>
                                </div>
         </div>
    </>
  )
}
