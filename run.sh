#!/bin/bash
# Local development start script

# Ensure dependencies are installed
if [ ! -d "node_modules" ]; then
    echo "node_modules not found. Installing dependencies..."
    npm install
fi

# Run the development server
echo "Starting local development server..."
npm start
