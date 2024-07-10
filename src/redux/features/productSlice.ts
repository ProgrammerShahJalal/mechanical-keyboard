import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../components/utils/interfaces";

interface ProductState {
  products: Product[];
  featuredProducts: Product[];
  selectedProduct: Product | null;
}

const initialState: ProductState = {
  products: [],
  featuredProducts: [],
  selectedProduct: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    setFeaturedProducts: (state, action: PayloadAction<Product[]>) => {
      state.featuredProducts = action.payload;
    },
    setSelectedProduct: (state, action: PayloadAction<Product>) => {
      state.selectedProduct = action.payload;
    },
  },
});

export const { setProducts, setFeaturedProducts, setSelectedProduct } =
  productSlice.actions;

export default productSlice.reducer;
