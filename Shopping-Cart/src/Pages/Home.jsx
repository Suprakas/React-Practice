import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Home = () => {
  const {
    state: { products, cart },
    dispatch,
  } = useContext(CartContext);

  return (
    <div className="p-5">
      <div className="grid grid-cols-4 gap-5">
        {products.map((product) => (
          <div
            key={product.id}
            className="border border-gray-300 rounded-lg p-3 flex flex-col"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-[200px] w-full object-cover rounded-lg"
            />

            <div className="mt-3 flex flex-col gap-2 flex-1">
              <h3 className="text-lg font-semibold">
                {product.name}
              </h3>

              <h4 className="text-md font-medium">
                ₹ {product.price}
              </h4>

              <p>
                {product.fastDelivery
                  ? "Fast Delivery"
                  : "4 Days Delivery"}
              </p>

              <p>Rating: {product.ratings}</p>

              <button
                disabled={product.inStock === 0}
                onClick={() =>
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: product,
                  })
                }
                className={`mt-auto p-2 rounded-md text-white ${
                  product.inStock === 0
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-500 cursor-pointer"
                }`}
              >
                {product.inStock === 0
                  ? "Out of Stock"
                  : "Add To Cart"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;