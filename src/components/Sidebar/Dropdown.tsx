import React, { useState } from "react";
import Multiselect from "multiselect-react-dropdown";
import { Option } from "../../interface/Option";

interface DropdownProps {
  options: Option[];
  sectionName: string;
}

const Dropdown: React.FC<DropdownProps> = ({ options, sectionName }) => {
  const [selectedValues, setSelectedValues] = useState<Option[]>([]);
  const [onHover, setOnHover] = useState(false);

  const handleMouseEnter = () => {
    setOnHover(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setOnHover(false);
    }, 3000);
  };

  const onSelect = (selectedList: Option[], selectedItem: Option) => {
    console.log("selectedList");
    console.log(sectionName);
    console.log(selectedList, selectedItem);
    setSelectedValues(selectedList);
  };

  const onRemove = (selectedList: Option[], removedItem: Option) => {
    console.log("removedItem");
    console.log(sectionName);
    console.log(selectedList, removedItem);
    setSelectedValues(selectedList);
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <h5>{sectionName}</h5>
      <Multiselect
        style={{
          multiselectContainer: {
            height: onHover ? "300px" : "299px",
          },
          chips: {
            background: "%0096FB",
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
