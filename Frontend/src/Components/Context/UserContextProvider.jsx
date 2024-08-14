import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children})=>{
    const [category, setCategory] = useState("")

    return (
        <UserContext.Provider value={{category, setCategory}}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider