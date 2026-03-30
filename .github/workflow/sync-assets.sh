#!/bin/bash

# Configuration
REPO_OWNER="ziad-wdev"
REPOS=("AESTHETIC" "FreshFlavor" "DigitalPro")

# Using public/ so the browser can find the images at "/projects/name.jpg"
IMAGE_DIR="public/projects"
DATA_FILE="src/data/projects-data.json"

# Create directories and initialize data file
mkdir -p "$IMAGE_DIR"
mkdir -p "src/data"
echo "[]" > "$DATA_FILE"

for REPO in "${REPOS[@]}"; do
    echo "--- Processing $REPO ---"

    # 1. Fetch GitHub Data
    # Extract data with safe fallbacks
    echo "Fetching data for $REPO..."
    REPO_DATA=$(curl -s "https://api.github.com/repos/$REPO_OWNER/$REPO")

    NAME=$(echo "$REPO_DATA" | jq -r '.name // "'$REPO'"')
    DESC=$(echo "$REPO_DATA" | jq -r '.description // "A modern web application."')
    TOPICS=$(echo "$REPO_DATA" | jq -c '.topics // []')
    HOMEPAGE=$(echo "$REPO_DATA" | jq -r '.homepage // empty')
    GITHUB_URL=$(echo "$REPO_DATA" | jq -r '.html_url')

    # Logic for image path and screenshot
    FILE_NAME="${REPO,,}.jpeg"
    PLACEHOLDER_PATH="https://via.placeholder.com/1920x1080.png?text=Preview+Coming+Soon"

    if [ ! -z "$HOMEPAGE" ]; then
        echo "Capturing screenshot for $REPO..."
        SCREENSHOT_URL="https://api.microlink.io?screenshot.type=jpeg&viewport.width=1920&viewport.height=1080&url=$HOMEPAGE"

        # Get the actual image URL from Microlink
        IMG_DOWNLOAD_URL=$(curl -s "$SCREENSHOT_URL" | jq -r '.data.screenshot.url // empty')

        if [ ! -z "$IMG_DOWNLOAD_URL" ]; then
            curl -L -s "$IMG_DOWNLOAD_URL" -o "$IMAGE_DIR/$FILE_NAME"
            IMG_PATH="/projects/$FILE_NAME"
        else
            # If Microlink fails, use a generic placeholder
            IMG_PATH="$PLACEHOLDER_PATH"
        fi

    else
        echo "No homepage found. Using GitHub URL as fallback."
        IMG_PATH="$PLACEHOLDER_PATH"
        HOMEPAGE="$GITHUB_URL"
    fi

    # 3. Build the JSON object
    NEW_ENTRY=$(jq -n \
        --arg name "$NAME" \
        --arg desc "$DESC" \
        --arg page "$HOMEPAGE" \
        --arg git "$GITHUB_URL" \
        --arg img "$IMG_PATH" \
        --argjson topics "$TOPICS" \
        '{
            name: $name,
            description: $desc,
            topics: $topics,
            pageUrl: $page,
            githubUrl: $git,
            imageUrl: $img
        }')

    # 4. Append to the JSON file
    jq ". += [$NEW_ENTRY]" "$DATA_FILE" > "${DATA_FILE}.tmp" && mv "${DATA_FILE}.tmp" "$DATA_FILE"
done

echo "Sync Complete!"
