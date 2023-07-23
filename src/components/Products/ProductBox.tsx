import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";

interface CSVData {
  number: number;
  mod3: number;
  mod4: number;
  mod5: number;
  mod6: number;
}

const ProductBox = () => {
  const [data, setData] = useState<CSVData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  useEffect(() => {
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
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // Calculate the index range for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <div className="row addScroll">
        {currentItems.map((item, index) => (
          <ProductCard key={index} element={item} />
        ))}
        {/* move the pagination to center to */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "-100px",
            marginTop: "20px",
          }}
        >
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(data.length / itemsPerPage)}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductBox;
