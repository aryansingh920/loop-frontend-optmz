import React from "react";
import { Meta, Story } from "@storybook/react";
import { CSVData } from "../../interface/CSVData";
import ProductCard, { Props } from "./ProductCard";

// Export default metadata for the component
export default {
  title: "Components/ProductCard",
  component: ProductCard,
} as Meta;

// Define the Template as a Story
const Template: Story<Props> = (args) => <ProductCard {...args} />;

// Create Default Story
export const Default = Template.bind({});
Default.args = {
  element: {
    number: 123,
    mod3: 0,
    mod4: 0,
    mod5: 0,
    mod6: 0,
  },
};

// Create Hovered Story
export const Hovered = Template.bind({});
Hovered.args = {
  element: {
    number: 456,
    mod3: 0,
    mod4: 0,
    mod5: 0,
    mod6: 0,
  },
};
