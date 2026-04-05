import Card from "./Card";

function NewCard({ name, price, quality, onFeatured }) {
  return (
    <Card>
      <p>New Card is {name} and price {price} and quality {quality}</p>
      <button onClick={onFeatured}>Mark as Featured</button>
    </Card>
  );
}

export default NewCard;