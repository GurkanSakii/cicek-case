import "../styles/cart-bar.scss";

const CartBar = ({ cart }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const freeShipping = total >= 500;
  const remaining = 500 - total;

  return (
    <>
      {cart.length > 0 && (
        <div className="cart-bar">
          {freeShipping ? <p>🎉 Kargonuz Bedava!</p> : <p>⚡ {remaining.toFixed(2)} TL daha ekleyin kargo bedava</p>}

          <div className="progress">
            <div className="fill" style={{ width: `${Math.min((total / 500) * 100, 100)}%` }}></div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartBar;
