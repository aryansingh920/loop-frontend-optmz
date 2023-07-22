import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header";
import ProductCard from "./components/Products/ProductCard";
import ProductBox from "./components/Products/ProductBox";

function App() {
  return (
    <div className="removeScroll">
      <Header />
      <Sidebar />
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
        <ProductBox />
      </div>
    </div>
  );
}

export default App;
