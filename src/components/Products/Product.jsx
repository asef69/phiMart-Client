import React, { useEffect, useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import ProductItem from "./ProductItem";
import { SwiperSlide, Swiper } from "swiper/react";
import ErrorAlert from "../ErrorAlert";
import "swiper/css";
import "swiper/css/navigation";
import apiClient from "../../services/api-client";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    setIsLoading(true);
    apiClient
      .get("/products/")
      .then((res) => {
        setProducts(res.data.results);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setIsLoading(false));
  }, []);
  return (
    <section className="py-12 p-4 max-w-7xl mx-auto bg-gray-50">
      <div className="flex justify-between items-center px-4 md:px-8 mb-4">
        <h2 className="text-3xl md:text-4xl font-bold px-4 flex justify-center items-center text-black">
          Trending Products
        </h2>

        <a
          href="#"
          className="btn btn-secondary px-6 py-6 rounded-full text-lg"
        >
          View All
        </a>
      </div>
      {/* Spinner  */}
      {isLoading && (
        <div className="flex justify-center items-center mt-8">
          <span className="loading loading-spinner loading-xl text-center text-secondary"></span>
        </div>
      )}
      {error && <ErrorAlert error={error} />}
      {/* Product Slider */}
      {!isLoading && !error && products.length > 0 && (
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={5}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="mt-4 px-4 container"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id} className="flex justify-center">
              <ProductItem key={product.id} product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      {!isLoading && !error && products.length === 0 && (
        <p className="text-center text-gray-500 mt-6">No products available</p>
      )}
    </section>
  );
};

export default Product;
