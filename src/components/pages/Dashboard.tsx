import { useState } from "react";
import {
  useGetProductsQuery,
  useDeleteProductMutation,
  useCreateProductMutation,
  useUpdateProductMutation,
} from "../../redux/api/productApi";
import { UpdatedProduct } from "../utils/interfaces";
import Modal from "../Modal";
import ProductForm from "../ProductForm";

const Dashboard = () => {
  const { data: products, refetch } = useGetProductsQuery(undefined);
  const [deleteProduct] = useDeleteProductMutation();
  const [createProduct] = useCreateProductMutation();
  const [updateProduct] = useUpdateProductMutation();

  const [selectedProduct, setSelectedProduct] = useState<UpdatedProduct | null>(
    null
  );
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const handleDelete = async (id: string) => {
    await deleteProduct(id);
    refetch(); // Refetch products after deletion
  };

  const handleCreate = async (product: UpdatedProduct) => {
    await createProduct(product);
    refetch(); // Refetch products after creation
  };

  const handleUpdate = async (product: UpdatedProduct) => {
    await updateProduct(product);
    refetch(); // Refetch products after update
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Product Management</h2>
      <div className="mb-6 sm:mb-8">
        <ProductForm onSubmit={handleCreate} />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border">
          <thead>
            <tr>
              <th className="border px-2 sm:px-4 py-2">Name</th>
              <th className="border px-2 sm:px-4 py-2">Brand</th>
              <th className="border px-2 sm:px-4 py-2">Price</th>
              <th className="border px-2 sm:px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products?.data?.map((product: UpdatedProduct) => (
              <tr key={product._id}>
                <td className="border px-2 sm:px-4 py-2">{product.name}</td>
                <td className="border px-2 sm:px-4 py-2">{product.brand}</td>
                <td className="border px-2 sm:px-4 py-2">${product.price}</td>
                <td className="border px-2 sm:px-4 py-2">
                  <button
                    className="bg-yellow-500 text-white px-2 sm:px-4 py-1 sm:py-2 rounded mr-2"
                    onClick={() => {
                      setSelectedProduct(product);
                      setUpdateModalOpen(true);
                    }}
                  >
                    Update
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 sm:px-4 py-1 sm:py-2 rounded"
                    onClick={() => {
                      setSelectedProduct(product);
                      setDeleteModalOpen(true);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isUpdateModalOpen && selectedProduct && (
        <Modal onClose={() => setUpdateModalOpen(false)}>
          <ProductForm
            initialData={selectedProduct} // Pass the initialData prop here
            onSubmit={(data) => {
              handleUpdate(data);
              setUpdateModalOpen(false);
            }}
          />
        </Modal>
      )}
      {isDeleteModalOpen && selectedProduct && (
        <Modal onClose={() => setDeleteModalOpen(false)}>
          <div>
            <h2>Are you sure you want to delete this product?</h2>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={() => {
                handleDelete(selectedProduct._id as string);
                setDeleteModalOpen(false);
              }}
            >
              Confirm
            </button>
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded ml-2"
              onClick={() => setDeleteModalOpen(false)}
            >
              Cancel
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Dashboard;
