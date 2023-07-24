import React, { useState } from "react";
import Multiselect from "multiselect-react-dropdown";
import { Option } from "../../interface/Option";
import { DropdownChange } from "../../interface/DropdownChange";
export interface DropdownProps {
  options: Option[];
  sectionName: string;
  setDropdownChange: React.Dispatch<
    React.SetStateAction<DropdownChange | undefined>
  >;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  sectionName,
  setDropdownChange,
}) => {
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
    setDropdownChange({
      modTables: sectionName,
      selectedValues: selectedList,
    });

    setSelectedValues(selectedList);
  };

  const onRemove = (selectedList: Option[], removedItem: Option) => {
    console.log("removedItem");
    setDropdownChange({
      modTables: sectionName,
      selectedValues: selectedList,
    });
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
