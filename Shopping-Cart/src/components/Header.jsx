import { useContext } from "react";
import { CartContext } from "../context/CartContext";

import { Link } from "react-router-dom";

const Header = () => {

  const {
    state: { cart },
  } = useContext(CartContext);

  return (

    <nav className="navbar navbar-dark bg-dark">

      <div className="container-fluid">

        <Link
          to="/"
          className="navbar-brand"
        >
          Shopping Cart
        </Link>

        <Link
          to="/cart"
          className="btn btn-primary"
        >
          Cart ({cart.length})
        </Link>

      </div>

    </nav>

  );
};

export default Header;