import React from "react";

const ProductCard = () => {
  return (
    <div className="col-3  m-1 ">
      <div>
        <div
          className="uk-card uk-card-default  uk-card-hover uk-card-body  "
          style={{
            borderRadius: "25px",
            border: "1px solid #e5e5e5",
            // boxShadow: "0 0 10px rgba(0,0,0,0.5)",
          }}
        >
          <h3 className="uk-card-title">Default</h3>
          <p>
            Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
