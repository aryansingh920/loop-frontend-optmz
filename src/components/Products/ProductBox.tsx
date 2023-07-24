import React, { useEffect, useState, CSSProperties } from "react";
import Papa from "papaparse";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import { CSVData } from "../../interface/CSVData";

const style1: CSSProperties = {
  height: "calc(100vh - 220px)", // Subtract the height of pagination from the viewport height
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
  height: "100px", // Set a fixed height for the pagination box
};

interface Props {
  setModData: React.Dispatch<React.SetStateAction<CSVData[]>>;
  setCurrentPageApp: React.Dispatch<React.SetStateAction<number>>;
}

const ProductBox: React.FC<Props> = ({
  setModData,
  setCurrentPageApp,
}: Props) => {
  const [data, setData] = useState<CSVData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 100; // Show 100 items per page

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
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [currentPage, setCurrentPageApp, setModData]);

  // Calculate the index range for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div style={{ position: "relative" }}>
      <div className="row addScroll" style={style1}>
        {currentItems.map((item, index) => (
          <ProductCard key={index} element={item} />
        ))}
      </div>
      {/* move the pagination to the bottom center */}
      <div style={style2}>
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(data.length / itemsPerPage)}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default ProductBox;
