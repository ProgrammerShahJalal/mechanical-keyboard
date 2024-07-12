const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-green-100 to-teal-100 p-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
          Contact Us
        </h1>
        <p className="text-lg md:text-xl mb-8 animate-slide-in">
          Have questions or feedback? We’d love to hear from you! Reach out to
          us using the information below.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="p-6 bg-white text-black rounded-lg shadow-lg m-4 transform transition duration-500 hover:scale-105 animate-zoom-in">
            <h2 className="text-2xl font-bold mb-2">Email</h2>
            <p>support@mechanicalkeyboards.com</p>
          </div>
          <div className="p-6 bg-white text-black rounded-lg shadow-lg m-4 transform transition duration-500 hover:scale-105 animate-zoom-in delay-200">
            <h2 className="text-2xl font-bold mb-2">Phone</h2>
            <p>(+880) 1303-856860</p>
          </div>
          <div className="p-6 bg-white text-black rounded-lg shadow-lg m-4 transform transition duration-500 hover:scale-105 animate-zoom-in delay-400">
            <h2 className="text-2xl font-bold mb-2">Address</h2>
            <p>Dhaka, Bangladesh</p>
          </div>
        </div>
        <div className="my-8">
          <h2 className="text-3xl font-bold mb-4 animate-fade-in delay-600">
            Send us a message
          </h2>
          <form className="max-w-xl mx-auto bg-white text-black p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label className="block text-lg font-medium mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium mb-2">Message</label>
              <textarea className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
