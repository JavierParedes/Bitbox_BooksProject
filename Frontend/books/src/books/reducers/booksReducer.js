export const booksReducer =(state =[], action) => {
    switch(action.type){
        case 'addBook':
            return[
                ...state,
                {
                    ...action.payload,
                }
            ];

        case 'removeBook':
            return state.filter(book=> book.id !== action.payload);
        case 'updateBook':
            return state.map(u => {
                return u;
            })
        case 'loadingBooks':
            return action.payload;
        case 'loadingSuppliers':
            return action.payload;
        default:
            return state;
    }
}