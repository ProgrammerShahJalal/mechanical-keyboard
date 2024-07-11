import "@lottiefiles/lottie-player";
import Hero from "../Hero";
import Service from "../Service";
import TopFeaturedBrands from "../TopFeaturedBrands";
import FeaturedProducts from "../FeaturedProducts";

const Home = () => {
  return (
    <div>
      <Hero />
      <Service />
      <FeaturedProducts />
      <TopFeaturedBrands />
    </div>
  );
};

export default Home;
