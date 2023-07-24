import React, { useState } from "react";
import { CSVData } from "../../interface/CSVData";
interface Props {
  element: CSVData;
}

const ProductCard: React.FC<Props> = ({ element }: Props) => {
  const [isHover, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="col-2 m-1 mb-2 mt-2">
      <div>
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="uk-card uk-card-default uk-card-hover uk-card-body"
          style={{
            backgroundColor: isHover ? "#e5e5e5" : "white",
            border: "1px solid #e5e5e5",
          }}
        >
          <h3 className="uk-card-title text-center">{element.number}</h3>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
