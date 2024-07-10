import React, { useState } from "react";

interface ProductFormProps {
  onSubmit: (product: any) => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<any>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({});
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name || ""}
        onChange={handleChange}
        placeholder="Product Name"
        required
      />
      <input
        type="text"
        name="brand"
        value={formData.brand || ""}
        onChange={handleChange}
        placeholder="Brand"
        required
      />
      <input
        type="number"
        name="price"
        value={formData.price || ""}
        onChange={handleChange}
        placeholder="Price"
        required
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
