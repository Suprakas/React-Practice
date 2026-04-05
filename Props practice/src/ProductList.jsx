import ProductCard from "./ProductCard"

function ProductList({items, onDelete, onPriceIncrese}){
    return (
        <div>
        {items.map((item) => (
            <ProductCard
            key={item.id}
            name={item.name}
            price={item.price}
            quality={item.quality}
            onDelete={() => onDelete(item.id)}
            onPriceIncrease={() => onPriceIncrese(item.id)}
            />
        ))}
        </div>
    )
}

export default ProductList;