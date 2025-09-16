import HeroCarousel from "../components/Home/Carousel/HeroCarousel";
import Features from "../components/Home/Features";
import Product from "../components/Products/Product";
import DiscountSection from "../components/Home/Discount/DiscountSection";
import Category from "../components/Home/Categories/Category";
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