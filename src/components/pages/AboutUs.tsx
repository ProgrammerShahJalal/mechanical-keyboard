const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-100 via-pink-100 to-orange-100 p-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
          About Us
        </h1>
        <p className="text-lg md:text-xl mb-8 animate-slide-in">
          We are passionate about providing the best mechanical keyboards to
          enhance your typing and gaming experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="p-6 bg-white text-black rounded-lg shadow-lg transform transition duration-500 hover:scale-105 animate-zoom-in">
            <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
            <p>
              To deliver high-quality mechanical keyboards that offer a superior
              user experience and cater to both enthusiasts and professionals.
            </p>
          </div>
          <div className="p-6 bg-white text-black rounded-lg shadow-lg transform transition duration-500 hover:scale-105 animate-zoom-in delay-200">
            <h2 className="text-2xl font-bold mb-2">Our Vision</h2>
            <p>
              To be the leading provider of mechanical keyboards globally, known
              for innovation and customer satisfaction.
            </p>
          </div>
          <div className="p-6 bg-white text-black rounded-lg shadow-lg transform transition duration-500 hover:scale-105 animate-zoom-in delay-400">
            <h2 className="text-2xl font-bold mb-2">Our Values</h2>
            <p>
              Quality, innovation, and customer satisfaction are at the heart of
              everything we do.
            </p>
          </div>
        </div>

        <div className="p-6 bg-white text-black rounded-lg shadow-lg transform transition duration-500 hover:scale-105 animate-zoom-in delay-600 mb-8">
          <h2 className="text-2xl font-bold mb-2">Our Story</h2>
          <p>
            Founded in 2010, we started as a small group of keyboard enthusiasts
            who wanted to bring high-quality mechanical keyboards to the market.
            Over the years, we have grown into a global brand, serving customers
            from all around the world. Our journey has been driven by a passion
            for innovation and a commitment to excellence.
          </p>
        </div>

        <div className="p-6 bg-white text-black rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-2">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-4">
              <img
                src="https://i.ibb.co/t3p6gZH/portrait-happy-male-with-broad-smile-176532-8175.jpg"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold">Shah Jalal</h3>
              <p className="text-sm">Founder & CEO</p>
            </div>
            <div className="p-4">
              <img
                src="https://i.ibb.co/6FT5GN1/portrait-man-smiling-city-23-2150771135.jpg"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold">Jane Smith</h3>
              <p className="text-sm">Chief Marketing Officer</p>
            </div>
            <div className="p-4">
              <img
                src="https://i.ibb.co/p3ht2TT/young-asian-man-grey-tshirt-white-background-949828-1644.jpg"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold">Sam Johnson</h3>
              <p className="text-sm">Head of Product Development</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
