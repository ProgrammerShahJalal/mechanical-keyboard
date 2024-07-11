const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-10">
      <div className="container mx-auto text-center">
        <p>Contact us at: info@mechanical-keyboard-shop.com</p>
        <p>Follow us on social media</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:underline">
            Facebook
          </a>
          <a href="#" className="hover:underline">
            Twitter
          </a>
          <a href="#" className="hover:underline">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
