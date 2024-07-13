import { Link } from "react-router-dom";
import { MdCancel } from "react-icons/md";

const Cancel = () => {
  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8 flex flex-col items-center justify-center min-h-screen">
      <MdCancel className="text-red-500 text-6xl mb-4" />
      <h1 className="text-3xl font-bold mb-4">Payment Canceled</h1>
      <p className="text-lg mb-4">
        Your payment has been canceled. If you have any questions, please
        contact our support team.
      </p>
      <Link to="/" className="text-blue-500 underline">
        Go back to Home
      </Link>
    </div>
  );
};

export default Cancel;
