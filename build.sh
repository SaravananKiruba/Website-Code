#!/bin/bash

# Install dependencies
echo "Installing dependencies..."
npm install --force

# Build the project
echo "Building project..."
npm run build

echo "Build completed successfully!"
