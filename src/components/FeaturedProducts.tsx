import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetProductsQuery } from "../redux/api/productApi";
import { Product } from "./utils/interfaces";
import { setFeaturedProducts } from "../redux/features/productSlice";
import { Link } from "react-router-dom";
import { Button } from "antd";
import {
  MdOutlineReadMore,
  MdStar,
  MdStarHalf,
  MdStarBorder,
} from "react-icons/md";
import { RootState } from "../redux/store";

const FeaturedProducts = () => {
  const dispatch = useDispatch();
  const featuredProducts =
    useSelector((state: RootState) => state.products.featuredProducts) || [];

  const { data: products, error, isLoading } = useGetProductsQuery(undefined);

  useEffect(() => {
    if (products && Array.isArray(products.data)) {
      const sortedProducts = [...products.data].sort(
        (a: Product, b: Product) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      const featured = sortedProducts.slice(0, 6);
      dispatch(setFeaturedProducts(featured));
    }
  }, [products, dispatch]);
  // LOADING ANIMATION FOR PRODUT FETCHING
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

  // RATING ENHACHING FOR FULL, PARTIAL, HALF, ALMOSTFULL, EMPTY START
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
    <section className="container mx-auto p-8">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {featuredProducts.map((product: Product) => (
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
      <div className="text-center py-10">
        <Link to="/products">
          <Button type="dashed" className="font-medium text-lg p-5 ">
            See More <MdOutlineReadMore />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProducts;
