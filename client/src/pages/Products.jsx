import { useEffect, useState } from "react";
import axios from "axios";


function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("https://e-commerce-web-3m0g.onrender.com/api/products");
      setProducts(res.data);
    } catch (error) {
      console.log("Error:", error);
    }
  };
const addToCart = (product) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const exists = cart.find((item) => item._id === product._id);

  if (!exists) {
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart!");
  } else {
    alert("Already in cart!");
  }
};
  return (
    <div className="container">
      <h2 className="title">Our Products</h2>

      <div className="card-grid">
        {products.length > 0 ? (
          products.map((item) => (
            <div className="card" key={item._id}>
              <button onClick={() => addToCart(item)} className="cart-btn">
                Add to Cart
              </button>

              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.name}
                className="product-img"
              />

              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <span className="price">₹ {item.price}</span>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
}

export default Products;
