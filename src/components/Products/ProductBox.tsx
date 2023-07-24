import React, { useEffect, useState, CSSProperties } from "react";
import Papa from "papaparse";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
// import { CSVData } from "../../interface/CSVData";
import { DropdownChange } from "../../interface/DropdownChange";

const style1: CSSProperties = {
  height: "calc(100vh - 220px)",
  width: "100%",
  overflowY: "scroll",
  overflowX: "hidden",
};

const style2: CSSProperties = {
  backgroundColor: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "fixed",
  marginLeft: "10rem",
  bottom: "0",
  width: "100%",
  left: "0",
  height: "100px",
};

export interface Props {
  setModData: (newData: CSVData[]) => void; // Correct type for setModData prop
  setCurrentPageApp: React.Dispatch<React.SetStateAction<number>>;
  dropdownChange: DropdownChange | undefined;
}

interface FilterOption {
  name: string;
  id: number;
}

interface Filter {
  name: string;
  options: FilterOption[];
}

const filterOptions: Filter[] = [
  { name: "mod3", options: [] },
  { name: "mod4", options: [] },
  { name: "mod5", options: [] },
  { name: "mod6", options: [] },
];

// Add an optional index signature to the CSVData interface
interface CSVData {
  [key: string]: number | string | undefined;
  number: number;
  mod3: number;
  mod4: number;
  mod5: number;
  mod6: number;
}

const ProductBox: React.FC<Props> = ({
  setModData,
  setCurrentPageApp,
  dropdownChange,
}: Props) => {
  const [data, setData] = useState<CSVData[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage: number = 100;

  useEffect(() => {
    console.log("Drop down changed", dropdownChange);
  }, [dropdownChange]);

  useEffect(() => {
    setCurrentPageApp(currentPage);
    const fetchData = async () => {
      try {
        const response = await fetch("./data/dataset_small.csv");
        if (!response.ok) {
          throw new Error("Failed to fetch the data.");
        }

        const text = await response.text();
        const result = Papa.parse<CSVData>(text, {
          header: true,
          transformHeader: (header) => header.trim(),
          transform: (value) => Number(value.trim()),
        });

        setData(result.data);
        setModData(result.data);

        // Update filter options dynamically based on the unique values in the data
        updateFilterOptions(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [currentPage, setCurrentPageApp, setModData]);

  const indexOfLastItem: number = currentPage * itemsPerPage;
  const indexOfFirstItem: number = indexOfLastItem - itemsPerPage;

  const updateFilterOptions = (filteredData: CSVData[]) => {
    filterOptions.forEach((filter) => {
      const selectedOptions: Set<number> = new Set();
      const uniqueOptions: Set<number> = new Set();

      filteredData.forEach((item) => {
        const value = item[filter.name];
        if (typeof value === "number") {
          uniqueOptions.add(value);
          if (!dropdownChange || dropdownChange.modTables !== filter.name) {
            selectedOptions.add(value);
          }
        }
      });

      const updatedOptions: FilterOption[] = Array.from(uniqueOptions).map(
        (option) => ({
          name: option.toString(),
          id: option,
        })
      );
      filter.options = updatedOptions;
    });
  };

  const filterData = (items: CSVData[]): CSVData[] => {
    if (!dropdownChange || !dropdownChange.modTables) {
      return items;
    }

    const selectedFilter = filterOptions.find(
      (filter) => filter.name === dropdownChange.modTables
    );
    if (!selectedFilter) {
      return items;
    }

    const selectedOptionIDs = dropdownChange.selectedValues.map(
      (option) => option.id
    );
    return items.filter((item) => {
      const value = item[selectedFilter.name];
      return typeof value === "number" && selectedOptionIDs.includes(value);
    });
  };

  const filteredData: CSVData[] = filterData(data);

  return (
    <div style={{ position: "relative" }}>
      <div className="row addScroll" style={style1}>
        {filteredData
          .slice(indexOfFirstItem, indexOfLastItem)
          .map((item: CSVData, index: number) => (
            <ProductCard key={index} element={item} />
          ))}
      </div>
      <div style={style2}>
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(filteredData.length / itemsPerPage)}
          onPageChange={(page: number) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default ProductBox;
