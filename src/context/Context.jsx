import { createContext, useState } from "react";
import axios from "axios"

export const BooksContext = createContext();


const BooksContextProvider = ({children}) => {
    const [input, setInput] = useState("");

    const handleInput = (e) => {
        setInput(e.target.value)
    }


    





    return <BooksContext.Provider value = {{handleInput, input}}>
        {children}
    </BooksContext.Provider>
};


export default BooksContextProvider;