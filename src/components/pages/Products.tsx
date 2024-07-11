import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../../redux/api/productApi";
import { Product } from "../utils/interfaces";
import "@lottiefiles/lottie-player";

const Products = () => {
  const { data: products, error, isLoading } = useGetProductsQuery(undefined);

  if (isLoading) {
    return (
      <div className="grid gap-1 grid-cols-1 justify-items-center	">
        <lottie-player
          src="https://lottie.host/0fea4ce6-8b86-47f0-89dd-fabfdeda9fbc/P8PHWLK1QD.json"
          background="##ffffff"
          speed="1"
          style={{ width: "150px", height: "150px" }}
          loop
          autoplay
          direction="1"
          mode="normal"
        ></lottie-player>
        <p className="text-lg font-medium">Loading...</p>
      </div>
    );
  }

  if (error) {
    return <div>Error loading products</div>;
  }

  if (!products?.data?.length) {
    return <div>No products available</div>;
  }

  return (
    <div className="bg-gray-100 container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.data.map((product: Product) => (
          <div key={product._id} className="bg-white p-4 shadow rounded">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-bold">{product.name}</h3>
            <p>Brand: {product.brand}</p>
            <p>Available Quantity: {product.availableQuantity}</p>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating} Stars</p>
            <Link to={`/products/${product._id}`}>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                Show Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
