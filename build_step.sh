#!/bin/bash
echo "Build script for deployment"

echo "Installing dependencies"
npm install

echo "Building the project"
npm run build