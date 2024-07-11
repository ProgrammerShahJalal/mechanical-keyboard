import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../../redux/api/productApi";
import { Product } from "../utils/interfaces";
import { MdStar, MdStarHalf, MdStarBorder } from "react-icons/md";
import "@lottiefiles/lottie-player";
import { MdClear } from "react-icons/md";
import { Button } from "antd";

const Products = () => {
  const { data: products, error, isLoading } = useGetProductsQuery(undefined);
  const [searchTerm, setSearchTerm] = useState("");
  const [priceFilter, setPriceFilter] = useState({ min: 0, max: Infinity });
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  // To ensure that the page loads from the top when navigating to the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // LOADING ANIMATION FOR PRODUCT FETCHING
  if (isLoading) {
    return (
      <div className="grid gap-1 grid-cols-1 justify-items-center">
        <lottie-player
          src="https://lottie.host/0fea4ce6-8b86-47f0-89dd-fabfdeda9fbc/P8PHWLK1QD.json"
          background="##ffffff"
          speed="1"
          style={{ width: "150px", height: "150px" }}
          loop
          autoplay
          direction="1"
          mode="normal"
        ></lottie-player>
        <p className="text-lg font-medium">Loading...</p>
      </div>
    );
  }

  // ERROR HANDLING
  if (error) {
    return (
      <div className="grid gap-1 grid-cols-1 justify-items-center">
        <p className="text-center">
          🤖
          <br />
          We are currently experiencing a technical difficulty loading products.{" "}
          <br />
          We apologize for any inconvenience this may cause.
        </p>
      </div>
    );
  }

  // NO PRODUCT AVAILABLE MESSAGE
  if (!products?.data?.length) {
    return (
      <div>
        <p className="text-center">
          No products available. We are currently out of stock for all products.
        </p>
      </div>
    );
  }

  // HANDLE SEARCH FUNCTIONALITY
  const filteredProducts = products.data.filter((product: Product) => {
    const nameMatches = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const brandMatches = product.brand
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return nameMatches || brandMatches;
  });

  // HANDLE PRICE FILTER FUNCTIONALITY
  const priceFilteredProducts = filteredProducts.filter((product: Product) => {
    return product.price >= priceFilter.min && product.price <= priceFilter.max;
  });

  // HANDLE SORTING FUNCTIONALITY
  const sortedProducts = priceFilteredProducts.sort(
    (a: Product, b: Product) => {
      if (sortOrder === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    }
  );

  // RATING REPRESENTATION FOR FULL, PARTIAL, HALF, ALMOST FULL, EMPTY STAR
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const partialStar = rating % 1;
    const halfStars = partialStar >= 0.25 && partialStar < 0.75 ? 1 : 0;
    const almostFullStar = partialStar >= 0.75 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars - almostFullStar;

    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, index) => (
          <MdStar key={`full-${index}`} className="text-yellow-500" />
        ))}
        {halfStars === 1 && <MdStarHalf className="text-yellow-500" />}
        {almostFullStar === 1 && (
          <MdStarHalf
            style={{ transform: "rotate(180deg)" }}
            className="text-yellow-500"
          />
        )}
        {[...Array(emptyStars)].map((_, index) => (
          <MdStarBorder key={`empty-${index}`} className="text-yellow-500" />
        ))}
      </div>
    );
  };

  // Handle input change for minimum price filter
  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 0) {
      setPriceFilter({ ...priceFilter, min: value });
    }
  };

  // Handle input change for maximum price filter
  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 0) {
      setPriceFilter({ ...priceFilter, max: value });
    }
  };

  return (
    <div className="container mx-auto p-8 my-10">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
        Products
      </h2>
      {/* SEARCH BAR */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name or brand"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md w-full sm:w-auto"
        />
      </div>

      {/* FILTERS */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
        <div className="mb-4 sm:mb-0 sm:flex">
          <div className="mr-4">
            <label className="block font-semibold">Price Range:</label>
            <input
              type="number"
              placeholder="Min"
              value={priceFilter.min}
              onChange={handleMinPriceChange}
              className="px-4 py-2 border border-gray-300 rounded-md mr-2"
            />
            <input
              type="number"
              placeholder="Max"
              value={priceFilter.max}
              onChange={handleMaxPriceChange}
              className="px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mr-4">
            <label className="block font-semibold">Sort by Price:</label>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
              className="px-4 py-2 border border-gray-300 rounded-md"
            >
              <option value="asc">Low to High</option>
              <option value="desc">High to Low</option>
            </select>
          </div>
        </div>
        <div>
          <Button
            onClick={() => {
              setSearchTerm("");
              setPriceFilter({ min: 0, max: Infinity });
              setSortOrder("asc");
            }}
          >
            Clear Filters <MdClear />
          </Button>
        </div>
      </div>

      {/* PRODUCT CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {sortedProducts.map((product: Product) => (
          <div key={product._id} className="bg-white p-4 shadow rounded">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-bold">{product.name}</h3>
            <p>Brand: {product.brand}</p>
            <p>Available Quantity: {product.availableQuantity}</p>
            <p>Price: ${product.price}</p>
            <div className="flex items-center">
              {renderStars(product.rating)}
              <span className="ml-2 text-lg font-semibold">
                ({product.rating.toFixed(1)})
              </span>
            </div>
            <Link to={`/products/${product._id}`}>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                Show Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
