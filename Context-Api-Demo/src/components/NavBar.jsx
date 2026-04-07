import { ThemeContext } from "../context/ThemeContext";
import useAuth from "../hooks/useAuth";
import useCart from "../hooks/useCart";
import { useContext } from "react";

const Navbar = () => {

    const { user, login, logout } = useAuth();
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { cart } = useCart();

    return (
        <div style={{
            padding: "10px",
            background: theme === "light" ? "#eee" : "#333",
            color: theme === "light" ? "#000" : "#fff",
        }}
        >
            <h3>Context API Demo</h3>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <p>Cart Items: {cart.length}</p>
            {
                user ?
                    (
                        <>
                            <span>Welcome {user.name}</span>
                            <button onClick={logout}>Logout</button>
                        </>
                    ) : (
                        <>
                            <button onClick={login}>Login</button>
                        </>
                    )
            }
        </div>
    )
}

export default Navbar;