import { createContext } from "react";
import run from "../Config/chatflex";

export const Context = createContext();

const ContextProvider = (props) =>{

    const onSent = async (prompt) =>{
        await run(prompt)
    }

    const contextValue ={


    }

    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )

}

export default ContextProvider