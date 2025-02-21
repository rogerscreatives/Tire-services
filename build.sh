#!/bin/bash

# Enable error reporting
set -e

# Install dependencies
yarn install

# Build the Next.js application
yarn build

# Output the result
echo "Build completed successfully!" 