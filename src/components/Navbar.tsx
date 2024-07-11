import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Navbar = () => {
  const cartItemCount = useSelector(
    (state: RootState) => state.cart.items.length
  );
  console.log("cartItemCount", cartItemCount);

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div>
        <Link to="/" className="text-xl font-bold">
          MK Shop
        </Link>
      </div>
      <div className="flex space-x-4">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/products" className="hover:underline">
          Products
        </Link>
        <Link to="/about" className="hover:underline">
          About Us
        </Link>
        <Link to="/contact" className="hover:underline">
          Contact Us
        </Link>
        <Link to="/dashboard" className="hover:underline">
          Dashboard
        </Link>
        <Link to="/cart" className="relative hover:underline">
          Cart
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
            {cartItemCount}
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
