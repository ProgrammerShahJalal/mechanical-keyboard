import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* MK SHOP Information */}
          <div className="mb-6 md:mb-0 md:w-1/2">
            <Link to="/" className="text-xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
                MK SHOP
              </span>
            </Link>
            <p className="mt-4 mr-12">
              MK SHOP is your premier destination for high-quality mechanical
              keyboards. Our team of enthusiasts and experts is dedicated to
              providing the best selection of customizable and durable keyboards
              to enhance your typing and gaming experience.
            </p>
          </div>
          {/* Contact Information */}
          <div className="mb-6 md:mb-0 md:w-1/3">
            <h4 className="text-xl font-bold mb-4">Contact Information</h4>
            <p>123 Mechanical Keyboard St.</p>
            <p>Dhaka, Bangladesh.</p>
            <p>Email: shah.jalal.ju.bd@gmail.com</p>
            <p>Phone: (+880) 1303-856860</p>
          </div>

          {/* Quick Links */}
          <div className="mb-6 md:mb-0 md:w-1/3">
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul>
              <li className="mb-2">
                <Link to="/about" className="hover:text-gray-400">
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/products" className="hover:text-gray-400">
                  Products
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="hover:text-gray-400">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="mb-6 md:mb-0 md:w-1/3">
            <h4 className="text-xl font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://web.facebook.com/shahjalal.programmer"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com/mdshahjalal01"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://www.instagram.com/shahjalal.programmer/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/ProgrammerShahJalal/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-6">
          <p>&copy; {new Date().getFullYear()} MK SHOP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
