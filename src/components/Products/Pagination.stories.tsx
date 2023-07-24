import React from "react";
import { Meta, Story } from "@storybook/react";
import Pagination, { PaginationProps } from "./Pagination";

// Export default metadata for the component
export default {
  title: "Components/Pagination",
  component: Pagination,
} as Meta;

// Define the Template as a Story
const Template: Story<PaginationProps> = (args) => <Pagination {...args} />;

// Create Default Story
export const Default = Template.bind({});
Default.args = {
  currentPage: 1,
  totalPages: 10,
  onPageChange: (page: number) => {
    console.log(`Page changed to: ${page}`);
  },
};
