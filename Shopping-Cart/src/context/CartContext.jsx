import { createContext, useReducer } from "react";
import { faker } from "@faker-js/faker";
import CartReducer from "./CartReducer";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const products = [...Array(20)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.url(),
    inStock: faker.helpers.arrayElement([0, 3, 5, 7, 9]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  }));

   const [state, dispatch] = useReducer(
    CartReducer,
    {
      products,
      cart: [],
    }
  );

  return (
    <CartContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
