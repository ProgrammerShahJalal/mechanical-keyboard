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
import { MdOutlinePostAdd } from "react-icons/md";
import { MdManageHistory } from "react-icons/md";
import { toast } from "sonner";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";

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
  const [activeSection, setActiveSection] = useState("Product Management");

  const handleDelete = async (id: string) => {
    await deleteProduct(id);
    refetch(); // Refetch products after deletion
    toast("Deleted!", {
      className: "border-red-500 text-base",
      description: "Product deleted Successfully!",
      duration: 3000,
      icon: <IoCheckmarkDoneCircleOutline />,
    });
  };

  const handleCreate = async (product: UpdatedProduct) => {
    await createProduct(product);
    refetch(); // Refetch products after creation
    toast("Success!", {
      className: "border-green-500 text-base",
      description: "Product added Successfully.",
      duration: 3000,
      icon: <IoCheckmarkDoneCircleOutline />,
    });
  };

  const handleUpdate = async (product: UpdatedProduct) => {
    await updateProduct(product);
    refetch(); // Refetch products after update
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8 flex">
      <div className="w-1/4">
        <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Dashboard</h2>
          <ul className="space-y-4">
            <li>
              <button
                className={`w-full text-left px-4 py-2 rounded-lg ${
                  activeSection === "Add Product"
                    ? "bg-blue-500 text-white"
                    : "bg-white"
                }`}
                onClick={() => setActiveSection("Add Product")}
              >
                <div className="flex justify-center items-center">
                  {/* //FOR LARGE SCREEN */}
                  <MdOutlinePostAdd className="md:block text-2xl hidden" />
                  <span className="hidden md:block">Add Product</span>
                  {/* //FOR SMALL SCREEN */}
                  <MdOutlinePostAdd className="block text-2xl md:hidden" />
                  <span className="block md:hidden">Add </span>
                </div>
              </button>
            </li>
            <li>
              <button
                className={`w-full text-left text-wrap px-4 py-2 rounded-lg ${
                  activeSection === "Product Management"
                    ? "bg-blue-500 text-white"
                    : "bg-white"
                }`}
                onClick={() => setActiveSection("Product Management")}
              >
                <div className="flex justify-center items-center gap-x-1">
                  {/* //FOR LARGE SCREEN */}
                  <MdManageHistory className="md:block text-2xl hidden" />
                  <span className="hidden md:block">Product Management</span>
                  {/* //FOR SMALL SCREEN */}
                  <MdManageHistory className="block text-2xl md:hidden" />
                  <span className="block md:hidden">Mgmt</span>
                </div>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-3/4 ml-4">
        {activeSection === "Add Product" && (
          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Add Product</h2>
            <ProductForm onSubmit={handleCreate} closeModal={() => {}} />
          </div>
        )}
        {activeSection === "Product Management" && (
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-4">
              Product Management
            </h2>
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
                      <td className="border px-2 sm:px-4 py-2 text-center">
                        {product.name}
                      </td>
                      <td className="border px-2 sm:px-4 py-2 text-center">
                        {product.brand}
                      </td>
                      <td className="border px-2 sm:px-4 py-2 text-center">
                        ${product.price}
                      </td>
                      <td className="border px-2 sm:px-4 py-2 flex justify-between md:justify-center items-center gap-1 md:gap-8">
                        <button
                          className="bg-lime-500 text-white px-2 sm:px-4 py-1 sm:py-2 rounded mr-2"
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
          </div>
        )}
        {isUpdateModalOpen && selectedProduct && (
          <Modal onClose={() => setUpdateModalOpen(false)}>
            <ProductForm
              initialData={selectedProduct}
              onSubmit={(data) => {
                handleUpdate(data);
                setUpdateModalOpen(false);
              }}
              closeModal={() => setUpdateModalOpen(false)}
            />
          </Modal>
        )}
        {isDeleteModalOpen && selectedProduct && (
          <Modal onClose={() => setDeleteModalOpen(false)}>
            <div className="text-center my-5 flex flex-col items-center justify-center">
              {/* DELETE CONFIRMATION ANIMATION */}
              <lottie-player
                src="https://lottie.host/9cb8c987-840f-478e-8dc6-ea8e83f07324/loKa5GirIL.json"
                background="##FFFFFF"
                speed="1"
                style={{ width: "150px", height: "150px" }}
                loop
                autoplay
                direction="1"
                mode="normal"
              ></lottie-player>
              <h2 className="text-xl font-bold my-3 hidden md:block">
                <span className="text-yellow-500"> Warning: </span>Permanent
                Product Deletion
              </h2>
              <p className="hidden md:block">
                This action will permanently remove the selected product from
                our real-time database. <br />
                This deletion is irreversible, meaning you will not be able to
                recover the product's information or associated data once
                confirmed.
              </p>
              <h2 className="text-lg font-semibold my-3">
                Are you absolutely certain you want to permanently delete this
                product?
              </h2>
              <p>
                By selecting <span className="font-bold">"Confirm"</span>, you
                acknowledge the aforementioned consequences and understand this
                action cannot be reversed.
              </p>
              <div className="grid grid-cols-2 gap-5 mt-10">
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
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
