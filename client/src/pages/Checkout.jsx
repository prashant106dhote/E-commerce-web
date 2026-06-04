function Checkout() {

  return (

    <div className="checkout">

      <h1>Checkout</h1>

      <form>

        <input
          type="text"
          placeholder="Full Name"
        />

        <input
          type="text"
          placeholder="Address"
        />

        <input
          type="text"
          placeholder="Card Number"
        />

        <button>
          Pay Now
        </button>

      </form>

    </div>
  );
}

export default Checkout;