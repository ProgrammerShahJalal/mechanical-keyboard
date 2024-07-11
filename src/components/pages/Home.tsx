import "@lottiefiles/lottie-player";
import Hero from "../Hero";
import Service from "../Service";
import TopFeaturedBrands from "../TopFeaturedBrands";
import FeaturedProducts from "../FeaturedProducts";
import CustomerReviews from "../CustomerReviews";
import WhyChooseMechanicalKeyboards from "../WhyChooseMechanicalKeyboards";
import CustomizableOptions from "../CustomizableOptions";

const Home = () => {
  return (
    <div>
      <Hero />
      <Service />
      <FeaturedProducts />
      <TopFeaturedBrands />
      <CustomerReviews />
      <WhyChooseMechanicalKeyboards />
      <CustomizableOptions />
    </div>
  );
};

export default Home;
