import React, { useState, useEffect } from "react";
import { ProductFormProps, UpdatedProduct } from "./utils/interfaces";
import {
  useCreateProductMutation,
  useGetProductsQuery,
  useUpdateProductMutation,
} from "../redux/api/productApi";
import { toast } from "sonner";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";

const ProductForm: React.FC<ProductFormProps> = ({
  initialData,
  closeModal,
}) => {
  const { refetch } = useGetProductsQuery(undefined);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState<UpdatedProduct>({
    _id: "",
    name: "",
    price: 0,
    description: "",
    availableQuantity: 1,
    rating: 4.5,
    image: "",
    brand: "",
  });

  const [createProduct] = useCreateProductMutation();
  const [updateProduct] = useUpdateProductMutation();

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]:
        name === "price" || name === "availableQuantity" || name === "rating"
          ? parseFloat(value)
          : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (formData._id) {
      // Update product
      await updateProduct({ id: formData._id, ...formData });
    } else {
      // Create new product
      await createProduct(formData);
    }
    refetch();
    setLoading(false);
    closeModal();

    toast("Success!", {
      className: "border-green-500 text-base",
      description: "Product Successfully Saved!",
      duration: 3000,
      icon: <IoCheckmarkDoneCircleOutline />,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 space-x-4">
      <div>
        <label className="block text-sm font-medium">Name</label>
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Price</label>
        <input
          type="number"
          name="price"
          required
          value={formData.price}
          min={0}
          max={Infinity}
          step={0.01}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Description</label>
        <textarea
          name="description"
          required
          value={formData.description}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Available Quantity</label>
        <input
          type="number"
          name="availableQuantity"
          required
          value={formData.availableQuantity}
          min={0}
          max={Infinity}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Rating</label>
        <input
          type="number"
          name="rating"
          required
          value={formData.rating}
          min={1.0}
          max={5.0}
          step={0.5}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Image URL</label>
        <input
          type="text"
          name="image"
          required
          value={formData.image}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Brand</label>
        <input
          type="text"
          name="brand"
          required
          value={formData.brand}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
        />
      </div>
      <button
        type="submit"
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        disabled={loading}
      >
        {loading ? "Saving..." : "Save Product"}
      </button>
    </form>
  );
};

export default ProductForm;
