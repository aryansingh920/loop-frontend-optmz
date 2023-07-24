import React, { useState } from "react";
import Multiselect from "multiselect-react-dropdown";

interface Option {
  name: string;
  id: number;
}

interface DropdownProps {
  options: Option[];
}

const Dropdown: React.FC<DropdownProps> = ({ options }) => {
  const [selectedValues, setSelectedValues] = useState<Option[]>([]);
  const [onHover, setOnHover] = useState(false);

  const handleMouseEnter = () => {
    setOnHover(true);
  };

  const handleMouseLeave = () => {
    // change to false in 5sec
    setTimeout(() => {
      setOnHover(false);
    }, 3000);
    // setOnHover(false);
  };

  const onSelect = (selectedList: Option[], selectedItem: Option) => {
    setSelectedValues(selectedList);
  };

  const onRemove = (selectedList: Option[], removedItem: Option) => {
    setSelectedValues(selectedList);
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Multiselect
        style={{
          multiselectContainer: {
            height: onHover ? "200px" : "60px",
          },
          chips: {
            background: "lightblue",
          },
        }}
        options={options}
        selectedValues={selectedValues}
        onSelect={onSelect}
        onRemove={onRemove}
        displayValue="name"
      />
    </div>
  );
};

export default Dropdown;