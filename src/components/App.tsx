import React, { useState } from "react";
import "../App.css";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header";
import ProductBox from "./Products/ProductBox";
import { CSVData } from "../interface/CSVData";

const style: React.CSSProperties = {
  position: "absolute",
  left: "20rem",
  top: "6rem",
  right: "0",
  height: "85%",
  width: "90%",
};

function App() {
  const [modData, setModData] = useState<CSVData[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  return (
    <div className="removeScroll">
      <Header />
      <Sidebar modData={modData} currentPage={currentPage} />
      <div style={style} className="container-fluid">
        <ProductBox
          setModData={setModData}
          setCurrentPageApp={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default App;
