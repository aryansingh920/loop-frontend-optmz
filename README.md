# Front End Filter Optimization

## Problem Statement

We aim to develop a dummy business intelligence dashboard with filter functionality that displays data. The goal is to mimic the filter behavior seen on platforms like Amazon, where selecting certain attributes adjusts the available filter options for other attributes based on the selected data.

Notion Link : https://loopxyz.notion.site/Front-End-Filter-Optimization-d8e4f1b0f86d4caeb6ae7385042c71ae

## Website Link

https://loop-frontend.vercel.app/

## How to run the page

```bash

git clone https://github.com/aryansingh920/loop-frontend-optmz.git
bash run.sh

```

and will be accessible at : http://localhost:3000/

## Storyboard Integration

```bash
npm exec -- npm run storybook -- --initial-path=/onboarding --quiet
```

and will be accessible at : http://localhost:6006/?path=/story/components-pagination--default

## Details

The application will have a data table with pagination (100 rows per page) and scrolling (showing 20 entries at a time).

### Dropdown Filter

1. Each column name will have a filter, similar to DataStudio, supporting search and multi-select functionality.
2. **Optional Bonus** - Adding search support to the filters.

### Filter ←→ Table Interaction

1. When users select values in a column filter, the data displayed in the table should be filtered to show only the rows matching the selected filter criteria.

### Filter ←→ Filter Interaction (Most Important)

1. When users select values in a filter for column A (e.g., modulo 3), other filters (e.g., modulo 4, modulo 5, modulo 6) should update their dropdown options to only show relevant values that overlap with the selected values in column A.
2. Column A should display all values but only the selected values should be checked.
3. For example, if only numbers that are 2 modulo 3 are selected, the dropdown for modulo 6 should only show 1 and 3 as options.

### Components

1. For the filter and drop-down with search, we can use a potential component like [multiselect-react-dropdown](https://www.npmjs.com/package/multiselect-react-dropdown). However, custom implementations are also welcome if they are more suitable.
2. For the data table, we can use a potential component like [react-data-table-component](https://www.npmjs.com/package/react-data-table-component), or a custom implementation can be used if it is more appropriate.

## Performance

The filters should be highly performant and should complete their actions within a few milliseconds. The application should be capable of handling large datasets, and for final performance testing, we will use a larger dataset.

## Data

For initial testing, use the provided small dataset:

[dataset_small.csv](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e89846f5-c132-43d5-886f-a086b33a8244/dataset_small.csv)

For final performance testing, use the larger dataset:

[dataset_large.csv](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f9a47d0b-0148-439c-b4f4-e0815e810316/dataset_large.csv)

## Example

1. By default, all values are shown in every filter (diagram 1).
2. When we pick mod350 and select a value 300 (diagram 2), only the values of mod8000 that have an overlap show up (diagram 3).
