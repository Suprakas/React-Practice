import "./App.css";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Cart from "./Pages/Cart";

const App = () => {
  return (

    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/cart"
        element={<Cart />}
      />

    </Routes>

  );
};

export default App;
