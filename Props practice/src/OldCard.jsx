import Card from "./Card";

function OldCard({ name, price, quality }) {
  return (
    <Card>
      <p>Old Card is {name} and price {price} and quality {quality}</p>
    </Card>
  );
}

export default OldCard;