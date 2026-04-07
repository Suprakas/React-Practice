export default function Cart({ cart, dispatch }) {

    const totalItems = cart.reduce((acc, item) => acc+ item.qty, 0);
    const totalPrice = cart.reduce((acc, item) => acc+ item.price, 0);
    return (
        <div>
            <h2> Cart</h2>
            <h3>Total items: {totalItems}</h3>
            <h3>Total Billing: {totalPrice}</h3>
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
                        disabled={item.qty === 1} // Cann't decrease the quantity below 1
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