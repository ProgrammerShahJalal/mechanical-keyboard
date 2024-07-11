import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  updateCartQuantity,
} from "../../redux/features/cartSlice";
import { RootState } from "../../redux/store";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);

  const handleRemoveFromCart = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    dispatch(updateCartQuantity({ id, quantity }));
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      <div>
        {cartItems.map((item) => (
          <div
            key={item._id}
            className="flex justify-between items-center mb-4"
          >
            <div className="flex items-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover mr-4"
              />
              <div>
                <h3 className="text-xl">{item.name}</h3>
                <p>Price: ${item.price.toFixed(2)}</p>
                <p>
                  Quantity:
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item._id, Number(e.target.value))
                    }
                    className="w-12 ml-2 border px-2 py-1"
                    min="1"
                  />
                </p>
              </div>
            </div>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={() => handleRemoveFromCart(item._id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="text-right mt-8">
        <h3 className="text-xl font-bold">
          Total Price: ${totalPrice.toFixed(2)}
        </h3>
        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
