import { FaShippingFast, FaDollarSign, FaHeadset } from "react-icons/fa";

const Service = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Why Shop With Us?
        </h2>
        <div className="flex flex-col md:flex-row justify-around items-center gap-10">
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
            <FaShippingFast className="text-blue-500 text-6xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Free Shipping
            </h3>
            <p className="text-gray-700">
              Enjoy free shipping on all orders with no minimum purchase
              required.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
            <FaDollarSign className="text-green-500 text-6xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Lowest Delivery Charge
            </h3>
            <p className="text-gray-700">
              We offer the lowest delivery charges for fast and reliable
              service.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
            <FaHeadset className="text-red-500 text-6xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              24/7 Support
            </h3>
            <p className="text-gray-700">
              Our support team is available 24/7 to assist you with any queries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
