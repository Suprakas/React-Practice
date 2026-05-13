import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = useContext(CartContext);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Shopping Cart</h2>

      {cart.length === 0 ? (
        <h4>Your Cart Is Empty</h4>
      ) : (
        cart.map((product) => (
          <div className="card mb-3" key={product.id}>
            <div className="row g-0 align-items-center">
              <div className="col-md-2">
                <img
                  src={product.image}
                  alt={product.name}
                  className="img-fluid rounded-start"
                />
              </div>

              <div className="col-md-10">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <h5>{product.name}</h5>

                    <p>₹ {product.price}</p>
                  </div>

                  <button
                    className="btn btn-danger"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: product,
                      })
                    }
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
