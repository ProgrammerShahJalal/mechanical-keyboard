import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useGetProductByIdQuery } from "../../redux/api/productApi";
import { addToCart, updateCartQuantity } from "../../redux/features/cartSlice";
import "@lottiefiles/lottie-player";
import { useEffect, useState } from "react";
import { MdStar, MdStarHalf, MdStarBorder } from "react-icons/md";
import { RootState } from "../../redux/store";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const { data: product, error, isLoading } = useGetProductByIdQuery(id);
  const [quantity, setQuantity] = useState(1);

  // Redux state
  const cartItems = useSelector((state: RootState) => state.cart.items);

  //To ensure that the page loads from the top when you navigate to the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAddToCart = () => {
    if (product?.data) {
      const { _id, availableQuantity } = product.data;

      // Check if product is already in the cart
      const cartItem = cartItems.find((item) => item._id === _id);

      if (cartItem) {
        // Update quantity if not exceeding available stock
        const newQuantity = cartItem.quantity + quantity;
        if (newQuantity <= availableQuantity) {
          dispatch(updateCartQuantity({ id: _id, quantity: newQuantity }));
          setQuantity(1); // Reset quantity after adding to cart
        } else {
          alert("Cannot add more than available quantity!");
        }
      } else {
        // Add new item to cart if not already present
        if (quantity <= availableQuantity) {
          dispatch(addToCart(product.data));
          setQuantity(1); // Reset quantity after adding to cart
        } else {
          alert("Cannot add more than available quantity!");
        }
      }
    }
  };

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

  if (error || !product || !product.data) {
    return <div>Error loading product details</div>;
  }

  const { image, name, brand, availableQuantity, price, rating, description } =
    product.data;

  // Check if product is already in the cart
  const isInCart = cartItems.some((item) => item._id === product.data._id);

  // Function to render stars based on rating
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
    <div className="container mx-auto my-10 p-8">
      <div className="flex flex-col md:flex-row">
        <img
          src={image}
          alt={name}
          className="w-full rounded-md md:w-1/2 h-96 object-cover mb-4 md:mb-0"
        />
        <div className="md:ml-8">
          <h2 className="text-2xl font-bold mb-2">{name}</h2>
          <p className="mb-2">
            <span className="font-semibold">Brand:</span> {brand}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Available Quantity:</span>{" "}
            {availableQuantity}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Price:</span> ${price}
          </p>
          <div className="flex items-center mb-2">
            <span className="mr-1">
              <span className="font-semibold">Rating:</span>
            </span>
            {renderStars(rating)}
            <span className="ml-2 text-lg font-semibold">
              ({rating.toFixed(1)})
            </span>
          </div>
          <p className="mb-4">{description}</p>

          <button
            className={`bg-blue-500 text-white px-4 py-2 rounded ${
              availableQuantity === 0 || isInCart
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            onClick={handleAddToCart}
            disabled={availableQuantity === 0 || isInCart}
          >
            {availableQuantity === 0
              ? "Out of Stock"
              : isInCart
              ? "Already in Cart"
              : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
