import { useEffect, useState } from "react";
import SearchProduct from "./SearchProduct";
import ProductCard from "./ProductCard";
function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products?select=thumbnail,title,price")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  // Search product by title
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">

      <h1 className="text-4xl font-bold text-center text-green-600 mb-6">
        Products
      </h1>

      <SearchProduct
        search={search}
        setSearch={setSearch}
      />

      <div className="flex flex-wrap justify-center gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

    </div>
  );
}

export default App