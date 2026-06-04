import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ProductDetails() {

  const { id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {

    fetchProduct();

  }, []);

  const fetchProduct = async () => {

    const res = await axios.get(
     `https://e-commerce-web-3m0g.onrender.com/api/products/${id}`
    );

    setProduct(res.data);
  };

  const addToCart = () => {

    const cart = JSON.parse(
      localStorage.getItem("cart")
    ) || [];

    cart.push(product);

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

    alert("Product Added To Cart");
  };

  return (

    <div className="details">

      <img
        src={product.image}
        alt={product.name}
      />

      <h1>{product.name}</h1>

      <p>{product.description}</p>

      <h2>₹ {product.price}</h2>

      <button onClick={addToCart}>
        Add To Cart
      </button>

    </div>
  );
}

export default ProductDetails;
