import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded shadow">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover mb-4"
      />
      <h3 className="text-lg font-bold mb-2">{product.name}</h3>
      <p className="text-gray-600">{product.brand}</p>
      <p className="text-gray-600">Available: {product.availableQuantity}</p>
      <p className="text-xl font-bold mb-2">${product.price}</p>
      <p className="text-yellow-500 mb-4">Rating: {product.rating}</p>
      <Button className="w-full">
        <Link to={`/products/${product.id}`}>See Details</Link>
      </Button>
    </div>
  );
};

export default ProductCard;
