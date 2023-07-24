import React from "react";
import { Meta, Story } from "@storybook/react";
import ProductBox, { Props } from "./ProductBox";

// Export default metadata for the component
export default {
  title: "Components/ProductBox",
  component: ProductBox,
} as Meta;

// Define the Template as a Story
const Template: Story<Props> = (args) => <ProductBox {...args} />;

// Create Default Story
export const Default = Template.bind({});
Default.args = {
  setModData: () => {}, // You can add some dummy function here
  setCurrentPageApp: () => {}, // You can add some dummy function here
  dropdownChange: undefined, // Or pass some dummy data here
};
