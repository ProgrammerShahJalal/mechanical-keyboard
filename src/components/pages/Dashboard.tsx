import ProductForm from "../form/ProductForm";
import {
  useGetProductsQuery,
  useDeleteProductMutation,
  useCreateProductMutation,
} from "../../redux/api/productApi";
import { Product } from "../utils/interfaces";

const Dashboard = () => {
  const { data: products, refetch } = useGetProductsQuery(undefined);
  const [deleteProduct] = useDeleteProductMutation();
  const [createProduct] = useCreateProductMutation();

  const handleDelete = async (id: string) => {
    await deleteProduct(id);
    refetch(); // Refetch products after deletion
  };

  const handleCreate = async (product: Product) => {
    await createProduct(product);
    refetch(); // Refetch products after creation
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">Product Management</h2>
      <div className="mb-8">
        <ProductForm onSubmit={handleCreate} />
      </div>
      <table className="w-full border">
        <thead>
          <tr>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Brand</th>
            <th className="border px-4 py-2">Price</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products?.data?.map((product: Product) => (
            <tr key={product._id}>
              <td className="border px-4 py-2">{product.name}</td>
              <td className="border px-4 py-2">{product.brand}</td>
              <td className="border px-4 py-2">${product.price}</td>
              <td className="border px-4 py-2">
                <button
                  className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
                  onClick={() => {}}
                >
                  Update
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  onClick={() => handleDelete(product._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
