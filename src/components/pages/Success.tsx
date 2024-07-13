import { useEffect } from "react";

const Success = () => {
  // To ensure that the page loads from the top when navigating to the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 pb-10">
      <lottie-player
        src="https://lottie.host/4a282b5f-59f8-4f64-a525-89a052a5d903/AdWFIHO3d6.json"
        background="##FFFFFF"
        speed="1"
        style={{ width: "200px", height: "200px" }}
        loop
        autoplay
        direction="1"
        mode="normal"
      ></lottie-player>
      <h2 className="text-3xl md:text-4xl font-bold text-green-600 mt-4">
        Success!
      </h2>
      <h3 className="text-3xl md:text-4xl font-bold my-4">🏆🎯💎</h3>
      <p className="font-semibold text-lg text-center">
        Your Order Placed successfully.
      </p>
    </div>
  );
};

export default Success;
