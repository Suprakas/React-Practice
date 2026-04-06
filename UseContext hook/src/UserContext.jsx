import { useState, createContext, useContext } from "react"

const UserContext = createContext(); 
// createContext = BUILD empty water tank

// Provider = FILL tank with data
export function UserProvider({children}) { 

    const [user, setUser] = useState("Suprakash");
    return (
            // value = water flowing to all flats
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

// useContext = OPEN tap in any flat directly, useUser is a custom hook to provide UserContext in other components.
export function useUser(){
    return useContext(UserContext); 
}

