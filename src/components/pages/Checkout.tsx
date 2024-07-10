import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { clearCart } from "../../redux/features/cartSlice";

const Checkout = () => {
  const dispatch = useDispatch();
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cod");

  const handlePlaceOrder = () => {
    // Process the order here (e.g., call an API)
    dispatch(clearCart());
    alert("Order placed successfully!");
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <div className="mb-4">
        <label className="block mb-2">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border px-4 py-2"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border px-4 py-2"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Phone</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full border px-4 py-2"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Address</label>
        <textarea
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full border px-4 py-2"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Payment Method</label>
        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          className="w-full border px-4 py-2"
        >
          <option value="cod">Cash on Delivery</option>
          <option value="stripe">Stripe</option>
        </select>
      </div>
      <div className="text-right mt-8">
        <h3 className="text-xl font-bold mb-4">Total Price: ${totalPrice}</h3>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handlePlaceOrder}
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
