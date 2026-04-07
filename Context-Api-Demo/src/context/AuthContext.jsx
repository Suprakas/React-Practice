import { useState } from "react";
import { createContext } from "react";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = () => {
        setUser({ name: "Suprakash" });
    };

    const logout = () => {
        setUser(null);
    };

    return(
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;