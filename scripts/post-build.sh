#!/bin/bash

# Define the file path
file="dist/index.html"

# Check if the file exists
if [[ -f "$file" ]]; then
  sed -i 's|/assets/|/dapp-kii-wrapper/assets/|g' "$file"

  sed -i 's|/logo_white.png|/dapp-kii-wrapper/logo_white.png|g' "$file"

  echo "Replacement completed successfully."
else
  echo "File not found: $file"
fi
