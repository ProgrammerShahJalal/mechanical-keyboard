import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import reviews from "../data/reviews.json";

const CustomerReviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <section className="container mx-auto p-8 bg-gradient-to-r from-indigo-50 from-10% via-sky-50 via-30% to-emerald-50 to-80%">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
        Customer Reviews
      </h2>
      <div className="slider-container">
        <Slider {...settings}>
          {reviews.map((review) => (
            <div key={review.id} className="p-4">
              <div className="flex flex-col items-center">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-24 h-24 rounded-full object-cover mb-4"
                />
                <p className="text-lg italic text-center mb-4">
                  "{review.review}"
                </p>
                <h3 className="text-xl font-bold pb-5">{review.name}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CustomerReviews;
