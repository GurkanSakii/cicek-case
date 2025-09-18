import "../styles/product-card.scss";

const ProductCard = ({ product, cart, setCart }) => {
  const cartItem = cart.find((item) => item.id === product.id);

  const addToCart = () => {
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  const increaseQuantity = () => {
    setCart(cart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)));
  };

  const decreaseQuantity = () => {
    setCart(
      cart
        .map((item) => (item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item))
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <p className="product-name">{product.name}</p>
      <p className="product-price">{product.price} TL</p>

      {!cartItem ? (
        <button className="add-btn" onClick={addToCart}>
          Sepete Ekle
        </button>
      ) : (
        <div className="qty-controller">
          <button className="qty-btn" onClick={decreaseQuantity}>
            −
          </button>
          <span className="qty">{cartItem.quantity}</span>
          <button className="qty-btn" onClick={increaseQuantity}>
            +
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
