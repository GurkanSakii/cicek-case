import { useState } from "react";
import Header from "./components/Header";
import CategoryBar from "./components/CategoryBar";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import "./styles/base.scss";

function App() {
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("Tüm Kategoriler");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="app">
      <Header cart={cart} setSearchTerm={setSearchTerm} />
      <CategoryBar setCategory={setCategory} />
      <ProductList category={category} searchTerm={searchTerm} cart={cart} setCart={setCart} />
      <Footer />
    </div>
  );
}

export default App;
