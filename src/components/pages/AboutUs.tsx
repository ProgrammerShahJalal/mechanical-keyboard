import { SiTransmission } from "react-icons/si";
import { GiOnTarget } from "react-icons/gi";
import { RiSecurePaymentFill } from "react-icons/ri";

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
            <div className="flex justify-center items-center">
              <SiTransmission className="text-blue-500 text-8xl mb-4" />
            </div>

            <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
            <p>
              To deliver high-quality mechanical keyboards that offer a superior
              user experience and cater to both enthusiasts and professionals.
            </p>
          </div>
          <div className="p-6 bg-white text-black rounded-lg shadow-lg transform transition duration-500 hover:scale-105 animate-zoom-in delay-200">
            <div className="flex justify-center items-center">
              <GiOnTarget className="text-blue-500 text-8xl mb-3" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Our Vision</h2>
            <p>
              To be the leading provider of mechanical keyboards globally, known
              for innovation and customer satisfaction.
            </p>
          </div>
          <div className="p-6 bg-white text-black rounded-lg shadow-lg transform transition duration-500 hover:scale-105 animate-zoom-in delay-400">
            <div className="flex justify-center items-center">
              <RiSecurePaymentFill className="text-blue-500 text-8xl mb-3" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Our Values</h2>
            <p>
              Quality, innovation, and customer satisfaction are at the heart of
              everything we do.
            </p>
          </div>
        </div>

        <div className="p-6 bg-white text-black rounded-lg my-16">
          <h2 className="text-2xl font-bold mb-2">Our Story</h2>
          <p>
            Founded in 2010, we started as a small group of keyboard enthusiasts
            who wanted to bring high-quality mechanical keyboards to the market.
            Over the years, we have grown into a global brand, serving customers
            from all around the world. Our journey has been driven by a passion
            for innovation and a commitment to excellence.
          </p>
        </div>

        <div className="p-6 bg-white text-black rounded-lg my-10">
          <h2 className="text-2xl font-bold mb-2">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-4">
              <img
                src="https://i.ibb.co/DVtVMtW/young-handsome-asian-business-man-black-suit-1303-26721.jpg"
                alt="Team Leader"
                className="w-32 h-auto border border-gray-200 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold">Sultan Mahmud</h3>
              <p className="text-sm">Founder & CEO</p>
            </div>
            <div className="p-4">
              <img
                src="https://i.ibb.co/t41bTkp/smart-attractive-asian-glasses-male-standing-smile-with-freshness-joyful-casual-blue-shirt-portrait.jpg"
                alt="Team Member"
                className="w-32 h-auto border border-gray-200 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold">Munaem Billah</h3>
              <p className="text-sm">Chief Marketing Officer</p>
            </div>
            <div className="p-4">
              <img
                src="https://i.ibb.co/JKy8zZs/handsome-young-asian-man-standing-white-264197-25066.jpg"
                alt="Team Member"
                className="w-32 h-auto rounded-full mx-auto mb-4 border border-gray-200"
              />
              <h3 className="text-xl font-bold">Salman Farshi</h3>
              <p className="text-sm">Head of Product Development</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
