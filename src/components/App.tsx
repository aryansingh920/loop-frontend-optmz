import React, { useState } from "react";
import "../App.css";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header";
import ProductBox from "./Products/ProductBox";
import { CSVData } from "../interface/CSVData";
import { DropdownChange } from "../interface/DropdownChange";

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
  const [dropdownChange, setDropdownChange] = useState<
    DropdownChange | undefined
  >();

  return (
    <div className="removeScroll">
      <Header />
      <Sidebar
        setDropdownChange={setDropdownChange}
        modData={modData}
        currentPage={currentPage}
      />
      <div style={style} className="container-fluid">
        <ProductBox
          dropdownChange={dropdownChange}
          setModData={setModData}
          setCurrentPageApp={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default App;
