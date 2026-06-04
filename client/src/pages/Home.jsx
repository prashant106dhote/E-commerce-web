import { Link } from "react-router-dom";

function Home() {

  return (

    <div className="hero">

      <h1>Welcome To E-Commerce Store</h1>

      <p>
        Buy amazing products at best prices
      </p>

      <Link to="/products">

        <button>
          Shop Now
        </button>

      </Link>

    </div>
  );
}

export default Home;