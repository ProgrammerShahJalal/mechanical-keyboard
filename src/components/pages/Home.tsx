import "@lottiefiles/lottie-player";
import Hero from "../Hero";
import Service from "../Service";
import TopFeaturedBrands from "../TopFeaturedBrands";
import FeaturedProducts from "../FeaturedProducts";
import CustomerReviews from "../CustomerReviews";

const Home = () => {
  return (
    <div>
      <Hero />
      <Service />
      <FeaturedProducts />
      <TopFeaturedBrands />
      <CustomerReviews />
    </div>
  );
};

export default Home;
