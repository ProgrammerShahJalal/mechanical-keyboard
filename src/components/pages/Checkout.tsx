import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../redux/store";
import { clearCart } from "../../redux/features/cartSlice";
import { usePlaceOrderMutation } from "../../redux/features/orderSlice";
import { OrderData } from "../utils/interfaces";
import { loadStripe } from "@stripe/stripe-js";

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

    if (
      !userDetails.name ||
      !userDetails.email ||
      !userDetails.phone ||
      !userDetails.address
    ) {
      alert("Please fill in all user details.");
      return;
    }

    const orderData: OrderData = {
      cartItems: cartItems.map((item) => ({
        product: item._id,
        quantity: item.quantity,
      })),
      userDetails,
      paymentMethod,
      totalAmount: totalPrice,
    };

    try {
      const { data } = await placeOrder(orderData).unwrap();

      if (paymentMethod === "stripe") {
        const stripe = await loadStripe(
          "pk_test_51JwIBsFBTfTsSwmz8bqtyXmnIOlnITi40PZxeH94CVw4gw41R2R6chUyOdKef9J0CCNKuB22rOlGeVlfUcS2L9Nf008TuoJ83R"
        );
        if (!stripe) {
          console.error("Failed to load Stripe.");
          alert("Failed to load Stripe. Please try again later.");
          return;
        }

        const { error } = await stripe.redirectToCheckout({
          sessionId: data.sessionId, // Ensure this matches the key from backend
        });

        if (error) {
          console.error("Error redirecting to checkout:", error);
          alert("Failed to redirect to Stripe Checkout. Please try again.");
        } else {
          // Clear cart
          dispatch(clearCart());
          // Redirect to success page if Stripe payment succeeds
          navigate("/success");
        }
      } else {
        // Clear cart for other payment methods
        dispatch(clearCart());
        // Redirect to success page
        navigate("/success");
      }
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
        <div className="flex items-center">
          {paymentMethod === "stripe" && (
            <h2>
              During Stripe payment processing, you may encounter a brief
              message warning about a{" "}
              <span className="font-bold text-lg text-pink-500">
                Page Refresh
              </span>
              . This is a normal security measure by Stripe and can be safely
              ignored. The refresh is an essential part of the secure
              transaction process. If a pop-up appears with options like{" "}
              <span className="font-bold text-green-600 text-lg">
                "Reload," "Ok," or "Confirm"
              </span>
              , please click to continue.{" "}
              <span className="font-bold text-lg">
                We display these warnings when your cart isn't empty to prevent
                any data loss. As your order is already placed, your checkout
                information is secure.
              </span>{" "}
              <span className="font-bold text-lg text-green-600">
                As your order is already placed, your checkout information is
                secure.
              </span>
            </h2>
          )}
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
