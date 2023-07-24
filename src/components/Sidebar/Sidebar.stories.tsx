import React from "react";
import { Meta, Story } from "@storybook/react";
import Sidebar, { Props } from "./Sidebar";
import { CSVData } from "../../interface/CSVData";
// import { Option } from "../../interface/Option";
// import { DropdownChange } from "../../interface/DropdownChange";

// Export default metadata for the component
export default {
  title: "Components/Sidebar",
  component: Sidebar,
} as Meta;

// Create a mock data function
const getMockData = (): CSVData[] => {
  return [
    // Replace this with your mock data or an empty array
  ];
};

// Define the Template as a Story
const Template: Story<Props> = (args) => <Sidebar {...args} />;

// Create Default Story
export const Default = Template.bind({});
Default.args = {
  modData: getMockData(), // Replace this with your CSVData array or a mocked version of the data
  currentPage: 1, // Provide the current page number
  setDropdownChange: (dropdownChange) => {
    console.log("Dropdown Change:", dropdownChange);
  },
};

// Define more stories if needed...
