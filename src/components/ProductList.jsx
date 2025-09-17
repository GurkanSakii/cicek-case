import ProductCard from "./ProductCard";
import "../styles/product-list.scss";
import products from "../data/products.json";

function ProductList({ category, searchTerm, cart, setCart }) {
  let filtered = products;

  if (category !== "Tüm Kategoriler") {
    filtered = filtered.filter((p) => p.category === category);
  }

  if (searchTerm.length >= 3) {
    filtered = filtered.filter((p) => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  return (
    <div className="product-list">
      {filtered.length > 0 ? (
        filtered.map((product) => <ProductCard key={product.id} product={product} cart={cart} setCart={setCart} />)
      ) : (
        <p className="not-found">Ürün bulunamadı</p>
      )}
    </div>
  );
}

export default ProductList;
