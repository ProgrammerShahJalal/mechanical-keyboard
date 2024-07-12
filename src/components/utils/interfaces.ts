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
