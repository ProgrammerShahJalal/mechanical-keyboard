import brands from "../data/brands.json";

const TopFeaturedBrands = () => {
  return (
    <section className="container mx-auto p-8">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
        Top Featured Brands
      </h2>
      <div className="bg-white rounded-3xl shadow-black grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 p-4">
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="flex flex-col items-center justify-center"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="w-32 h-auto object-contain mb-2"
            />
            <h3 className="text-lg font-semibold">{brand.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopFeaturedBrands;
