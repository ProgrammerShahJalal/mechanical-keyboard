import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../../redux/api/productApi";
import { Product } from "../utils/interfaces";
import "@lottiefiles/lottie-player";
import { useEffect } from "react";
import { MdStar, MdStarHalf, MdStarBorder } from "react-icons/md";

const Products = () => {
  //To ensure that the page loads from the top when you navigate to the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data: products, error, isLoading } = useGetProductsQuery(undefined);
  // LOADING ANIMATION FOR PRODUCT FETCHING
  if (isLoading) {
    return (
      <div className="grid gap-1 grid-cols-1 justify-items-center">
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
  //ERROR HANDLING
  if (error) {
    return (
      <div className="grid gap-1 grid-cols-1 justify-items-center">
        <p className="text-center">
          🤖
          <br />
          We are currently experiencing a technical difficulty loading products.{" "}
          <br />
          We apologize for any inconvenience this may cause.
        </p>
      </div>
    );
  }
  // NO PRODUCT AVAILABLE MESSAGE
  if (!products?.data?.length) {
    return (
      <div>
        <p className="text-center">
          No products available, We are currently out of stock for all products.
        </p>
      </div>
    );
  }
  // RATING REPRESENTATION FOR FULL, PARTIAL, HALF, ALMOSTFULL, EMPTY STAR
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const partialStar = rating % 1;
    const halfStars = partialStar >= 0.25 && partialStar < 0.75 ? 1 : 0;
    const almostFullStar = partialStar >= 0.75 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars - almostFullStar;

    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, index) => (
          <MdStar key={`full-${index}`} className="text-yellow-500" />
        ))}
        {halfStars === 1 && <MdStarHalf className="text-yellow-500" />}
        {almostFullStar === 1 && (
          <MdStarHalf
            style={{ transform: "rotate(180deg)" }}
            className="text-yellow-500"
          />
        )}
        {[...Array(emptyStars)].map((_, index) => (
          <MdStarBorder key={`empty-${index}`} className="text-yellow-500" />
        ))}
      </div>
    );
  };

  return (
    <div className="container mx-auto p-8">
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
            <div className="flex items-center">
              {renderStars(product.rating)}
              <span className="ml-2 text-lg font-semibold">
                ({product.rating.toFixed(1)})
              </span>
            </div>
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
