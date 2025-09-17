import "../styles/header.scss";
import sepetLogo from "../assets/sepet.svg";
import CartBar from "./CartBar";

function Header({ cart, searchTerm, setSearchTerm }) {
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <header className="header">
        <div className="header-top">
          <div className="logo">
            <img src={sepetLogo} alt="ÇiçekSepeti" />
          </div>

          <div className="search-bar">
            <input
              type="text"
              placeholder="Ürün Ara"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="search-btn">Ara</button>
          </div>

          <div className="cart">
            <span>Sepetim</span>
            {totalCount > 0 && <span className="badge">{totalCount}</span>}
            <CartBar cart={cart} />
          </div>
        </div>
      </header>

      <h1 className="header-title">
        <p>Çiçek sepeti h1</p>
      </h1>
    </>
  );
}

export default Header;
