import React from "react";
import Dropdown from "./Dropdown";
import { CSVData } from "../../interface/CSVData";

interface Props {
  modData: CSVData[];
  currentPage: number;
}

interface Option {
  name: string;
  id: number;
}

const Sidebar: React.FC<Props> = ({ modData, currentPage }: Props) => {
  const itemsPerPage = 100;
  const startElement = (currentPage - 1) * itemsPerPage;
  const endElement = currentPage * itemsPerPage;

  const slicedData = modData.slice(startElement, endElement);

  const mod3Options: Option[] = slicedData.map((item, index) => ({
    name: item.mod3.toString(),
    id: index, // Use the index as the id for the options
  }));

  const mod4Options: Option[] = slicedData.map((item, index) => ({
    name: item.mod4.toString(),
    id: index, // Use the index as the id for the options
  }));

  const mod5Options: Option[] = slicedData.map((item, index) => ({
    name: item.mod5.toString(),
    id: index, // Use the index as the id for the options
  }));

  const mod6Options: Option[] = slicedData.map((item, index) => ({
    name: item.mod6.toString(),
    id: index, // Use the index as the id for the options
  }));

  return (
    <div
      className="flex-shrink-0 p-3 fixed-top bg-light"
      style={{ top: "72px", width: "280px", borderRight: "1px solid #dee2e6" }}
    >
      {/* Pass the options as props to each Dropdown component */}
      <h5>mod3</h5>
      <Dropdown options={mod3Options} />
      <h5>mod4</h5>
      <Dropdown options={mod4Options} />
      <h5>mod5</h5>
      <Dropdown options={mod5Options} />
      <h5>mod6</h5>
      <Dropdown options={mod6Options} />
    </div>
  );
};

export default Sidebar;
