import { useEffect, useState, handleCheckout } from "react";


function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const handleCheckout = () => {
  if (cartItems.length === 0) {
    alert("Cart is empty!");
    return;
  }

  alert("Order Placed Successfully ");

  localStorage.removeItem("cart"); // cart clear

  setCartItems([]); // UI update
};
const handleBuy = () => {
  if (cartItems.length === 0) {
    alert("Cart is empty!");
    return;
  }

  // order create (demo)
  const order = {
    items: cartItems,
    total: total,
    date: new Date(),
  };

  localStorage.setItem("order", JSON.stringify(order));

  alert("Order Placed Successfully ");

  localStorage.removeItem("cart");
  setCartItems([]);
};
<button className="buy-btn" onClick={handleBuy}>
  Buy Now 🛒
</button>

  useEffect(() => {
    try {
      const items = JSON.parse(localStorage.getItem("cart"));
      setCartItems(Array.isArray(items) ? items : []);
    } catch (error) {
      console.log("Cart Error:", error);
      setCartItems([]);
    }
  }, []);

  const total = cartItems.reduce(
    (sum, item) => sum + Number(item.price),
    0
  );

  return (
    <div className="cart-container">
      <h1 className="title">Your Cart 🛒</h1>

      {cartItems.length === 0 ? (
        <h2 className="empty">Cart is Empty</h2>
      ) : (
        <>
          <div className="cart-grid">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-card">

                {/* IMAGE */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-img"
                />

                <h3>{item.name}</h3>
                <p className="price">₹ {item.price}</p>
              </div>
            ))}
          </div>

          <div className="total-box">
            <h2>Total: ₹ {total}</h2>
            <button className="checkout-btn" onClick={handleCheckout}>
  Proceed to Checkout
</button>
            <button className="buy-btn" onClick={handleBuy}>
  Buy Now 🛒
</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;