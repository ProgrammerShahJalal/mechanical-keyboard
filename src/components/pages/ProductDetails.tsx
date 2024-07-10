import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useGetProductByIdQuery } from "../../redux/api/productApi";
import { addToCart } from "../../redux/features/cartSlice";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const { data: product, error, isLoading } = useGetProductByIdQuery(id);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product));
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading product details</div>;
  }

  return (
    <div className="container mx-auto p-8">
      {product && (
        <>
          <div className="flex flex-col md:flex-row">
            <img
              src={product?.data?.image}
              alt={product?.data?.name}
              className="w-full md:w-1/2 h-96 object-cover mb-4 md:mb-0"
            />
            <div className="md:ml-8">
              <h2 className="text-2xl font-bold mb-2">{product?.data?.name}</h2>
              <p className="mb-2">Brand: {product?.data?.brand}</p>
              <p className="mb-2">
                Available Quantity: {product?.data?.availableQuantity}
              </p>
              <p className="mb-2">Price: ${product?.data?.price}</p>
              <p className="mb-2">Rating: {product?.data?.rating} Stars</p>
              <p className="mb-4">{product?.data?.description}</p>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={handleAddToCart}
                disabled={product?.data?.availableQuantity === 0}
              >
                {product?.data?.availableQuantity === 0
                  ? "Out of Stock"
                  : "Add to Cart"}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetails;
