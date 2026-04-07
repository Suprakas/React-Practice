export default function ProductList({ dispatch }) {
    const products = [
        { id: 1, name: "Shirt", price: 500 },
        { id: 2, name: "Shoes", price: 1000 },
    ];

    return (
        <div>
            <h2>Products</h2>

            {
                products.map(p => (
                    <div key={p.id}>
                        <h4>{p.name} -- {p.price}</h4>

                        <button onClick={() =>
                            dispatch({ type: "ADD_TO_CART", payload: p })
                        }>
                            Add to Cart
                        </button>

                    </div>
                ))
            }
        </div>
    )
}