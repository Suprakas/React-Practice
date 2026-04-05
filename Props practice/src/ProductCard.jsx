import Card from "./Card";

function ProductCard({ name, price, quality, onDelete, onPriceIncrease }) {
  return (
    <Card>
      <p>My product is {name} and price {price} and quality {quality}</p>
      <button onClick={onDelete}>Delete Product</button>
      <button onClick={onPriceIncrease}>Increase Price</button>
    </Card>
  );
}

export default ProductCard;