import React from "react";
import Dropdown from "./Dropdown";

const Sidebar = () => {
  // Define the options for each dropdown
  const options1 = [
    { name: "Option 1️⃣", id: 1 },
    { name: "Option 2️⃣", id: 2 },
  ];

  const options2 = [
    { name: "Option A", id: 11 },
    { name: "Option B", id: 12 },
    { name: "Option C", id: 13 },
  ];

  const options3 = [
    { name: "Choice X", id: 21 },
    { name: "Choice Y", id: 22 },
    { name: "Choice Z", id: 23 },
  ];

  return (
    <>
      <div
        className="flex-shrink-0 p-3 fixed-top bg-light "
        style={{
          top: "72px",
          width: "280px",
          height: "100%",
          overflowY: "auto",
          overflowX: "hidden",
          borderRight: "1px solid #dee2e6",
        }}
      >
        {/* Pass the options as props to each Dropdown component */}
        <h5>mod3</h5>
        <Dropdown options={options1} />
        <h5>mod4</h5>
        <Dropdown options={options2} />
        <h5>mod5</h5>
        <Dropdown options={options3} />
        <h5>mod6</h5>
        <Dropdown options={options3} />
      </div>
    </>
  );
};

export default Sidebar;
