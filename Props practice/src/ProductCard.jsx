import Card from "./Card";
import ProductDetails from "./ProductDetails";

function ProductCard({ name, price, quality, onDelete, onPriceIncrease }) {
  return (
    <Card>
      <h3>{name}</h3>
      <ProductDetails price={price} quality={quality} />
      <button onClick={onDelete}>Delete Product</button>
      <button onClick={onPriceIncrease}>Increase Price</button>
    </Card>
  );
}

export default ProductCard;