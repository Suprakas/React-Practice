function PriceTag({ price }) {
  return (
    <p style={{ color: "green", fontWeight: "bold" }}>
      ₹{price.toLocaleString("en-IN")}
    </p>
  );
}

export default PriceTag;