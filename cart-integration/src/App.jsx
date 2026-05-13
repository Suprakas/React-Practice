import { RouterProvider } from "react-router-dom";
import router from "./router";
import { AuthProvider } from "./auth/AuthContext";
import { CartProvider } from "./context/CartContext";

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
