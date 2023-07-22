import React from "react";
import ProductCard from "./ProductCard";

const ProductBox = () => {
  return (
    <div>
      <div className="row addScroll">
        {[...Array(100)].map((e, i) => {
          return <ProductCard element={i + 1} key={i} />;
        })}
      </div>
    </div>
  );
};

export default ProductBox;
