import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://mechanical-keyboard-shop-backend.vercel.app/api/v1",
  }),
  endpoints: (builder) => ({
    placeOrder: builder.mutation({
      query: (orderData) => ({
        url: "/checkout",
        method: "POST",
        body: orderData,
      }),
    }),
  }),
});

export const { usePlaceOrderMutation } = orderApi;
