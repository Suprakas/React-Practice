export default function Cart({ cart, dispatch }) {
    return (
        <div>
            <h2> Cart</h2>
            {cart.length === 0 && <p>Cart is empty</p>}

            {cart.map(item => (
                <div key={item.id}>
                    <h4>{item.name}</h4>
                    <p>Qty: {item.qty}</p>

                    <button
                        onClick={() =>
                            dispatch({ type: "INCREASE_QTY", payload: item.id })
                        }>
                        Increase
                    </button>
                    <button
                        onClick={() =>
                            dispatch({ type: "DECREASE_QTY", payload: item.id })
                        }>
                        Decrease
                    </button>
                    <button
                        onClick={() =>
                            dispatch({ type: "REMOVE_FROM_CART", payload: item.id })
                        }>
                        Remove
                    </button>
                </div>
            ))}
        </div>
    );
}