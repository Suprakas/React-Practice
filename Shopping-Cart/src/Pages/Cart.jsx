import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = useContext(CartContext);

  return (
    <div className="p-5">
      <h2 className="text-3xl font-bold mb-5">
        Shopping Cart
      </h2>

      {cart.length === 0 ? (
        <h4 className="text-xl font-medium">
          Your Cart Is Empty
        </h4>
      ) : (
        <div className="flex flex-col gap-4">
          {cart.map((product) => (
            <div
              key={product.id}
              className="border border-gray-300 rounded-lg p-4 flex items-center justify-between"
            >
              <div className="flex items-center gap-5">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-[120px] h-[120px] object-cover rounded-lg"
                />

                <div className="flex flex-col gap-2">
                  <h5 className="text-xl font-semibold">
                    {product.name}
                  </h5>

                  <p className="text-lg">
                    ₹ {product.price}
                  </p>
                </div>
              </div>

              <button
                onClick={() =>
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: product,
                  })
                }
                className="bg-red-500 text-white  px-4 py-2 rounded-md hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;