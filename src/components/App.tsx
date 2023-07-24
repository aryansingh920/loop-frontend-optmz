import React, { useState, useEffect } from "react";
import "../App.css";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header";
import ProductCard from "./Products/ProductCard";
import ProductBox from "./Products/ProductBox";
import { CSVData } from "../interface/CSVData";

function App() {
  const [modData, setModData] = useState<CSVData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  // useEffect(() => {
  //   console.log("modData", modData[currentPage - 1], currentPage);
  // }, [modData, currentPage]);

  return (
    <div className="removeScroll">
      <Header />
      <Sidebar modData={modData} currentPage={currentPage} />
      <div
        style={{
          position: "absolute",
          left: "20rem",
          top: "6rem",
          right: "0",
          height: "85%",
          width: "90%",
        }}
        className="container-fluid"
      >
        <ProductBox
          setModData={setModData}
          setCurrentPageApp={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default App;
