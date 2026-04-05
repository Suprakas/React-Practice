import PriceTag from "./PriceTag";

function ProductDetails({ price, quality }) {
  return (
    <div>
      <p>Quality: {quality}</p>
      <PriceTag price={price} />
    </div>
  );
}

export default ProductDetails;