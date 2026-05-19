import './App.css'
import { useState, useEffect } from "react";
import { PAGE_SIZE } from "./constants";
import ProductCard from "./components/ProductCard";
import Pagination from "./components/Pagination";

export default function App() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const fetchData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products?limit=500");

      const data = await response.json();

      setProducts(data.products);
    } catch (error) {
      console.log("Fetch API call failed !!", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const totalProducts = products.length;

  const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);

  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const handlePageChange = (n) => {
    setCurrentPage(n);
  };

  const goToNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const goToPrevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  return !products.length ? (
    <div>No products Found</div>
  ) : (
    <div className="App">
      <h1>Pagination</h1>

      <div className="product-container">
        {products.slice(start, end).map((p) => (
          <ProductCard key={p.id} image={p.thumbnail} title={p.title} />
        ))}
      </div>
      <Pagination
        goToPrevPage={goToPrevPage}
        goToNextPage={goToNextPage}
        handlePageChange={handlePageChange}
        currentPage={currentPage}
        noOfPages={noOfPages}
      />
    </div>
  );
}
