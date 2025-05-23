#!/bin/bash

# Get the post title from command line argument or prompt for it
if [ -z "$1" ]; then
    read -p "Enter post title: " title
else
    title="$1"
fi

# Generate the filename-friendly version of the title
# Convert to lowercase, replace spaces with hyphens, remove special characters
filename=$(echo "$title" | tr '[:upper:]' '[:lower:]' | tr ' ' '-' | sed 's/[^a-z0-9-]//g')

# Get today's date
date=$(date +%Y-%m-%d)

# Create the full filename
post_file="_posts/${date}-${filename}.md"

# Copy the template and replace placeholders
cp _templates/post-template.md "$post_file"

# Replace the title and date in the new post
sed -i '' "s/Your Title Here/$title/" "$post_file"
sed -i '' "s/YYYY-MM-DD/$date/" "$post_file"

echo "Created new post: $post_file"
echo "Edit this file to add your content!" 