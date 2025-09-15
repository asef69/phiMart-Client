import HeroCarousel from "../components/Carousel/HeroCarousel";
import Features from "../components/Features";
import Product from "../components/Products/Product";
import DiscountSection from "../components/Discount/DiscountSection";
import Category from "../components/Categories/Category";
const Home = () => {
  return (
    <div>
      <HeroCarousel />
      <Features />
      <Product />
      <Category />
      
      <DiscountSection />
    </div>
  );
};

export default Home;