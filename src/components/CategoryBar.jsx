import { useState } from "react";
import "../styles/category-bar.scss";
import categories from "../data/categories.json";

const CategoryBar = ({ setCategory }) => {
  const [active, setActive] = useState("Tüm Kategoriler");

  const handleClick = (cat) => {
    setActive(cat);
    setCategory(cat);
  };

  return (
    <div className="category-bar">
      {categories.map((cat) => (
        <button key={cat} className={`category-btn ${active === cat ? "active" : ""}`} onClick={() => handleClick(cat)}>
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryBar;
