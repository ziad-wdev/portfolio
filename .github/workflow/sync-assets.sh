#!/bin/bash

# Configuration
REPO_OWNER="ziad-wdev"
PROJECT_NAMES=("AESTHETIC" "FreshFlavor" "DigitalPro")

IMAGE_DIR="src/assets/projects"
DATA_FILE="src/data/projects-data.json"

# Create directories and initialize data file
mkdir -p "$IMAGE_DIR"
mkdir -p "src/data"
echo "[]" > "$DATA_FILE"

for NAME in "${PROJECT_NAMES[@]}"; do
    echo "Processing $NAME..."

    # 1. Fetch GitHub Data
    REPO_DATA=$(curl -s "https://api.github.com/repos/$REPO_OWNER/$NAME")

    # Extract repository data
    NAME=$(echo "$REPO_DATA" | jq -r '.name')
    DESC=$(echo "$REPO_DATA" | jq -r '.description // "placeholder description"')
    TOPICS=$(echo "$REPO_DATA" | jq -c '.topics // []')
    HOMEPAGE=$(echo "$REPO_DATA" | jq -r '.homepage // "https://github.com/'$REPO_OWNER'/'$NAME'"')
    GITHUB_URL=$(echo "$REPO_DATA" | jq -r '.html_url')

    FILE_NAME="${NAME,,}.jpg" # lowercase filename
    LOCAL_IMG_PATH="/projects/$FILE_NAME"

    # 2. Fetch Screenshot using Microlink (only if homepage exists)
    if [ ! -z "$HOMEPAGE" ]; then
        echo "Capturing screenshot for $HOMEPAGE..."
        SCREENSHOT_URL="https://api.microlink.io?screenshot.type=jpeg&viewport.width=1920&viewport.height=1080&url=$HOMEPAGE"
        # Download and save the image locally
        curl -L -s "$(curl -s "$SCREENSHOT_URL" | jq -r '.data.screenshot.url // "https://via.placeholder.com/1920x1080.png"')" -o "$IMAGE_DIR/$FILE_NAME"
    else
        # Fallback image if no homepage exists
        LOCAL_IMG_PATH="https://via.placeholder.com/1920x1080.png"
    fi

    # 3. Build the JSON object to match your ProjectCard props
    NEW_ENTRY=$(jq -n \
        --arg name "$NAME" \
        --arg desc "$DESC" \
        --arg page "$HOMEPAGE" \
        --arg git "$GITHUB_URL" \
        --arg img "$LOCAL_IMG_PATH" \
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
