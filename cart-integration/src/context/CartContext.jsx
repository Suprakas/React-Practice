import { createContext, useContext, useReducer } from "react";
import { cartReducer, initialState, CART_ACTIONS } from "./cartReducer";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart    = (product)   => dispatch({ type: CART_ACTIONS.ADD,      payload: { product } });
  const increase     = (productId) => dispatch({ type: CART_ACTIONS.INCREASE,  payload: { productId } });
  const decrease     = (productId) => dispatch({ type: CART_ACTIONS.DECREASE,  payload: { productId } });
  const removeItem   = (productId) => dispatch({ type: CART_ACTIONS.REMOVE,    payload: { productId } });
  const clearCart    = ()          => dispatch({ type: CART_ACTIONS.CLEAR });

  const getQuantity  = (productId) => state.items[productId]?.quantity ?? 0;
  const isInCart     = (productId) => !!state.items[productId];

  return (
    <CartContext.Provider
      value={{
        items:      state.items,
        totalItems: state.totalItems,
        totalPrice: state.totalPrice,
        addToCart,
        increase,
        decrease,
        removeItem,
        clearCart,
        getQuantity,
        isInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
};
