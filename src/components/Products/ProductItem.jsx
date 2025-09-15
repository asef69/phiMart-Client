import React from "react";
import defaultImage from "../../assets/default_product.jpg";
const ProductItem = ({product}) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure className="px-10 pt-10">
        <img
          src={product.images.length>0 ? product.images[0].image : defaultImage}
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{product.name}</h2>
        <h3 className="text-lg font-semibold">${product.price}</h3>
        <p>
          {product.description}
        </p>
        <div className="card-actions mt-1">
          <button className="btn btn-secondary">Buy Now</button>
        </div> 
      </div>
    </div>
  );
};

export default ProductItem;
