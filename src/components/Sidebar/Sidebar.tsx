import React from "react";
import Dropdown from "./Dropdown";
import { CSVData } from "../../interface/CSVData";

const style: React.CSSProperties = {
  top: "72px",
  width: "280px",
  borderRight: "1px solid #dee2e6",
  overflowY: "scroll",
  height: "calc(100vh - 72px)",
};

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
  const isDuplicateOption = (
    options: Option[],
    optionName: string
  ): boolean => {
    return options.some((option) => option.name === optionName);
  };

  const mod3Options: Option[] = [];
  const mod4Options: Option[] = [];
  const mod5Options: Option[] = [];
  const mod6Options: Option[] = [];
  slicedData.forEach((item, index) => {
    const mod3Value = item.mod3.toString();
    if (!isDuplicateOption(mod3Options, mod3Value)) {
      mod3Options.push({
        name: mod3Value,
        id: index,
      });
    }

    const mod4Value = item.mod4.toString();
    if (!isDuplicateOption(mod4Options, mod4Value)) {
      mod4Options.push({
        name: mod4Value,
        id: index,
      });
    }

    const mod5Value = item.mod5.toString();
    if (!isDuplicateOption(mod5Options, mod5Value)) {
      mod5Options.push({
        name: mod5Value,
        id: index,
      });
    }

    const mod6Value = item.mod6.toString();
    if (!isDuplicateOption(mod6Options, mod6Value)) {
      mod6Options.push({
        name: mod6Value,
        id: index,
      });
    }
  });

  return (
    <div className="flex-shrink-0 p-3 fixed-top bg-light" style={style}>
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
