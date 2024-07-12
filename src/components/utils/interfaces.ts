export interface Product {
  _id: string;
  name: string;
  brand: string;
  price: number;
  availableQuantity: number;
  rating: number;
  image: string;
  description: string;
  createdAt: string;
}

export interface UpdatedProduct {
  _id: string;
  name: string;
  price: number;
  description: string;
  availableQuantity: number;
  rating: number;
  image: string;
  brand: string;
}

export interface ProductFormProps {
  onSubmit: (data: UpdatedProduct) => void;
  initialData?: UpdatedProduct; // Marking initialData as optional
}

export interface OrderData {
  cartItems: {
    product: string;
    quantity: number;
  }[];
  userDetails: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  paymentMethod: "cashOnDelivery" | "stripe";
  totalAmount: number;
}
