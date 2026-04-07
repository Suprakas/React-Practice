import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prev) => [...prev, product]);
    };

    const removeFromCart = (id) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
