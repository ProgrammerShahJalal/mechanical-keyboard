import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useGetProductByIdQuery } from "../../redux/api/productApi";
import { addToCart } from "../../redux/features/cartSlice";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const { data: product, error, isLoading } = useGetProductByIdQuery(id);

  const handleAddToCart = () => {
    if (product?.data) {
      console.log("add to cart", product.data);
      dispatch(addToCart(product.data));
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading product details</div>;
  }

  if (!product) {
    return <div>No product found</div>;
  }

  const { data } = product;
  const { image, name, brand, availableQuantity, price, rating, description } =
    data;

  return (
    <div className="container mx-auto p-8">
      <div className="flex flex-col md:flex-row">
        <img
          src={image}
          alt={name}
          className="w-full md:w-1/2 h-96 object-cover mb-4 md:mb-0"
        />
        <div className="md:ml-8">
          <h2 className="text-2xl font-bold mb-2">{name}</h2>
          <p className="mb-2">Brand: {brand}</p>
          <p className="mb-2">Available Quantity: {availableQuantity}</p>
          <p className="mb-2">Price: ${price}</p>
          <p className="mb-2">Rating: {rating} Stars</p>
          <p className="mb-4">{description}</p>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleAddToCart}
            disabled={availableQuantity === 0}
          >
            {availableQuantity === 0 ? "Out of Stock" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
