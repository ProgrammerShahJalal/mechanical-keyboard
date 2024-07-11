import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const cartItemCount = useSelector(
    (state: RootState) => state.cart.items.length
  );

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white text-black p-4 flex justify-between items-center">
      <div>
        <Link to="/" className="text-xl font-bold">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
            MK SHOP
          </span>
        </Link>
      </div>
      <div className="hidden md:flex space-x-4">
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
          <img
            width={32}
            height={32}
            src="https://i.ibb.co/vHDzD3b/cart.png"
            alt="cart icon"
          />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
            {cartItemCount}
          </span>
        </Link>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-black hover:text-gray-700">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden absolute top-16 right-0 bg-white shadow-md z-50">
          <div className="flex flex-col items-center space-y-4 p-4">
            <Link to="/" className="hover:underline" onClick={toggleMenu}>
              Home
            </Link>
            <Link
              to="/products"
              className="hover:underline"
              onClick={toggleMenu}
            >
              Products
            </Link>
            <Link to="/about" className="hover:underline" onClick={toggleMenu}>
              About Us
            </Link>
            <Link
              to="/contact"
              className="hover:underline"
              onClick={toggleMenu}
            >
              Contact Us
            </Link>
            <Link
              to="/dashboard"
              className="hover:underline"
              onClick={toggleMenu}
            >
              Dashboard
            </Link>
            <Link
              to="/cart"
              className="relative hover:underline"
              onClick={toggleMenu}
            >
              <img
                width={32}
                height={32}
                src="https://i.ibb.co/vHDzD3b/cart.png"
                alt="cart icon"
              />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
                {cartItemCount}
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
