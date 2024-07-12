import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../redux/store";
import { clearCart } from "../../redux/features/cartSlice";
import { usePlaceOrderMutation } from "../../redux/features/orderSlice";

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);

  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [paymentMethod, setPaymentMethod] = useState<
    "cashOnDelivery" | "stripe"
  >("cashOnDelivery");

  const [placeOrder] = usePlaceOrderMutation();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handlePlaceOrder = async () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    const orderData = {
      cartItems,
      userDetails,
      paymentMethod,
      totalAmount: totalPrice,
    };

    try {
      await placeOrder(orderData).unwrap();
      // Clear cart
      dispatch(clearCart());
      // Redirect to success page
      navigate("/success");
    } catch (error) {
      console.error("Order failed:", error);
      alert("Order placement failed. Please try again.");
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">User Details</h3>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={userDetails.name}
            onChange={handleInputChange}
            className="p-2 border rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={userDetails.email}
            onChange={handleInputChange}
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={userDetails.phone}
            onChange={handleInputChange}
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="address"
            placeholder="Delivery Address"
            value={userDetails.address}
            onChange={handleInputChange}
            className="p-2 border rounded"
          />
        </div>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">Payment Method</h3>
        <div className="flex items-center mb-2">
          <input
            type="radio"
            name="paymentMethod"
            value="cashOnDelivery"
            checked={paymentMethod === "cashOnDelivery"}
            onChange={() => setPaymentMethod("cashOnDelivery")}
            className="mr-2"
          />
          <label>Cash on Delivery</label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            name="paymentMethod"
            value="stripe"
            checked={paymentMethod === "stripe"}
            onChange={() => setPaymentMethod("stripe")}
            className="mr-2"
          />
          <label>Stripe</label>
        </div>
      </div>
      <div className="text-right mt-8">
        <h3 className="text-xl font-bold mb-4">
          Total Price: ${totalPrice.toFixed(2)}
        </h3>
        <button
          onClick={handlePlaceOrder}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
