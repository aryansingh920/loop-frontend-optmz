import React from "react";
import { Meta, Story } from "@storybook/react";
import Dropdown, { DropdownProps } from "./Dropdown";
// import { Option } from "../../interface/Option";

// Export default metadata for the component
export default {
  title: "Components/Dropdown",
  component: Dropdown,
} as Meta;

// Define the Template as a Story
const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />;

// Create Default Story
export const Default = Template.bind({});
Default.args = {
  options: [
    { name: "Option 1", id: 1 },
    { name: "Option 2", id: 2 },
    { name: "Option 3", id: 3 },
    // Add more options if needed
  ],
  sectionName: "Dropdown Section",
  setDropdownChange: (dropdownChange) => {
    console.log("Dropdown Change:", dropdownChange);
  },
};
