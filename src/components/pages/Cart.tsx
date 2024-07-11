import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Button } from "antd";
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
    if (quantity > 0) {
      dispatch(updateCartQuantity({ id, quantity }));
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="grid gap-4 grid-cols-1 justify-items-center py-10">
        <img
          width={160}
          height={160}
          src="https://i.ibb.co/MNdqpvP/icon-empty-cart.png"
          alt="empty-cart-icon"
        />
        <h1 className="md:text-3xl text-base font-semibold">
          Your Cart is Empty!
        </h1>
        <p className="text-sm font-medium">
          Looks like you haven't made any orders yet. Add some items to your
          cart.
        </p>
        <Link to="/products">
          <button className="bg-primary text-white font-semibold py-2 px-4 rounded-md">
            Continue Shopping
          </button>
        </Link>
      </div>
    );
  }

  const isOutOfStock = cartItems.some((item) => item.availableQuantity === 0);

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
                <div className="flex items-center">
                  <button
                    className="bg-gray-200 px-2 py-1"
                    onClick={() =>
                      handleQuantityChange(item._id, item.quantity - 1)
                    }
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item._id, Number(e.target.value))
                    }
                    className="w-12 ml-2 border px-2 py-1 text-center"
                    min="1"
                  />
                  <button
                    className="bg-gray-200 px-2 py-1"
                    onClick={() =>
                      handleQuantityChange(item._id, item.quantity + 1)
                    }
                    disabled={item.quantity >= item.availableQuantity}
                  >
                    +
                  </button>
                </div>
                {item.availableQuantity === 0 && (
                  <p className="text-red-500">Out of Stock</p>
                )}
              </div>
            </div>
            <Button
              type="primary"
              danger
              ghost
              onClick={() => handleRemoveFromCart(item._id)}
            >
              Remove <RiDeleteBin6Line />
            </Button>
          </div>
        ))}
      </div>
      <div className="text-right mt-8">
        <h3 className="text-xl font-bold">
          Total Price: ${totalPrice.toFixed(2)}
        </h3>
        <button
          className={`${
            isOutOfStock ? "bg-gray-400" : "bg-blue-500"
          } text-white px-4 py-2 rounded mt-4`}
          disabled={isOutOfStock}
        >
          {isOutOfStock ? (
            "Some items are out of stock"
          ) : (
            <Link to="/checkout">Proceed to Checkout</Link>
          )}
        </button>
      </div>
    </div>
  );
};

export default Cart;
