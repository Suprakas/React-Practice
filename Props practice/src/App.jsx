import "./App.css";
import ProductCard from "./ProductCard";
import NewCard from "./NewCard";
import OldCard from "./OldCard";
import ProductList from "./ProductList";
import { useState, Fragment } from "react";

const ProductItems = [
  { id: 1, name: "Laptop", price: 45000, quality: "good" },
  { id: 2, name: "Mobile", price: 20000, quality: "good" },
  { id: 3, name: "Tab", price: 5000, quality: "average" },
];

function App() {
  const [product, setProduct] = useState(ProductItems);

  function handleDelete(id) {
    setProduct(product.filter((item) => item.id !== id));
  }

  function handlePriceIncrease(id) {
    setProduct(
      product.map((item) =>
        item.id === id ? { ...item, price: item.price + 1000 } : item
      )
    );
  }

  function handleFeature(id) {
    setProduct(
      product.map((item) =>
        item.id === id ? { ...item, quality: "featured" } : item
      )
    );
  }

  const totalPrice = product.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <p>Total Price: ₹{totalPrice}</p>
       <ProductList
        items={product}
        onDelete={handleDelete}
        onPriceIncrease={handlePriceIncrease}
      />
      {product.map((item) => (
        <Fragment key={item.id}>
          <NewCard
            name={item.name}
            price={item.price}
            quality={item.quality}
            onFeatured={() => handleFeature(item.id)}
          />
          <OldCard
            name={item.name}
            price={item.price}
            quality={item.quality}
          />
        </Fragment>
      ))}
    </div>
  );
}

export default App;