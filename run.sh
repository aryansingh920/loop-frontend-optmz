#!/bin/bash

# Install dependencies
npm install

# Start the React app in the background
npm start &

# Wait for a few seconds (adjust the time if needed)
sleep 5

# Run the Storybook in the background
npm exec -- npm run storybook -- --initial-path=/onboarding --quiet &
