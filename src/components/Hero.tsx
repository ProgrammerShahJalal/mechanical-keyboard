import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="bg-cover bg-center py-20"
      style={{
        backgroundImage: "url(https://i.ibb.co/s3KhwTF/bg.png)",
      }}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center gap-x-10">
        <div className="flex-1 text-center md:text-left p-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Welcome to{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
              MK SHOP
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            Discover the best mechanical keyboards designed for enthusiasts and
            professionals.
          </p>
          <Link
            to="/products"
            className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700"
          >
            Shop Now
          </Link>
        </div>
        <div className="flex-1 mt-10 md:mt-0">
          <img
            src="https://i.ibb.co/ZVpXhbB/hero-image-gallay.png"
            alt="Mechanical Keyboard"
            className="w-96 h-auto rounded-md shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
