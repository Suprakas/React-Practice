import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Home = () => {

  const {
    state: { products, cart },
    dispatch,
  } = useContext(CartContext);

  return (
    <div className="container mt-4">
      <div className="row">

        {products.map((product) => (

          <div
            className="col-md-3 mb-4"
            key={product.id}
          >
            <div className="card h-100">

              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
                style={{
                  height: "200px",
                  objectFit: "cover",
                }}
              />

              <div className="card-body d-flex flex-column">

                <h5>{product.name}</h5>

                <h6>₹ {product.price}</h6>

                <p>
                  {product.fastDelivery
                    ? "Fast Delivery"
                    : "4 Days Delivery"}
                </p>

                <p>Rating: {product.ratings}</p>

                <button
                  className="btn btn-primary mt-auto"
                  disabled={product.inStock === 0}
                  onClick={() =>
                    dispatch({
                      type: "ADD_TO_CART",
                      payload: product,
                    })
                  }
                >
                  {product.inStock === 0
                    ? "Out of Stock"
                    : "Add To Cart"}
                </button>

              </div>
            </div>
          </div>

        ))}

      </div>
    </div>
  );
};

export default Home;