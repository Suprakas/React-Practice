import useCart from "../hooks/useCart";

const ProductCard = () => {
    const { addToCart } = useCart();
    const product = {
        id: 1,
        name: "iPhone"
    };
    return (
        <div style={{marginTop: "20px"}}>
            <h2>{product.name}</h2>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    )
}

export default ProductCard;