import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: 'name of the wind', id: 1},
        {title: 'kings', id: 2},
        {title: 'empires', id: 3},
        {title: 'hero', id: 4},
    ]);

    return (
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;