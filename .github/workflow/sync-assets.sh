#!/bin/bash
set -e # Exit on error

# Configuration
REPO_OWNER="ziad-wdev"
REPOS=("AESTHETIC" "FreshFlavor" "DigitalPro")

IMAGE_DIR="public/projects"
DATA_FILE="src/data/projects-data.json"

# Create directories and initialize data file
mkdir -p "$IMAGE_DIR" "src/data"
echo "[]" > "$DATA_FILE"

for REPO in "${REPOS[@]}"; do
    echo "--- Processing $REPO ---"

    # 1. Fetch GitHub Data (Using Header for auth if GITHUB_TOKEN is passed)
    AUTH_HEADER=""
    if [ ! -z "$GITHUB_TOKEN" ]; then
        AUTH_HEADER="-H \"Authorization: token $GITHUB_TOKEN\""
    fi

    REPO_DATA=$(curl -s $AUTH_HEADER "https://api.github.com/repos/$REPO_OWNER/$REPO")

    # Check if REPO_DATA actually contains valid JSON
    if ! echo "$REPO_DATA" | jq -e . >/dev/null 2>&1; then
        echo "Error: Could not fetch data for $REPO. Skipping."
        continue
    fi

    NAME=$(echo "$REPO_DATA" | jq -r '.name // "'$REPO'"')
    DESC=$(echo "$REPO_DATA" | jq -r '.description // "A modern web application."')
    TOPICS=$(echo "$REPO_DATA" | jq -c '.topics // []')
    HOMEPAGE=$(echo "$REPO_DATA" | jq -r '.homepage // ""')
    GITHUB_URL=$(echo "$REPO_DATA" | jq -r '.html_url')

    FILE_NAME="${REPO,,}.jpeg"
    PLACEHOLDER_PATH="https://via.placeholder.com/1920x1080.png?text=Preview+Coming+Soon"

    # 2. Screenshot Logic
    if [ -n "$HOMEPAGE" ] && [ "$HOMEPAGE" != "null" ]; then
        echo "Capturing screenshot for $REPO..."
        # Added wait and overlay parameters for better quality
        MICROLINK_API="https://api.microlink.io?url=$HOMEPAGE&screenshot=true&meta=false&type=jpeg&viewport.width=1920&viewport.height=1080"

        IMG_DOWNLOAD_URL=$(curl -s "$MICROLINK_API" | jq -r '.data.screenshot.url // empty')

        if [ -n "$IMG_DOWNLOAD_URL" ]; then
            # Download with a timeout to prevent hanging
            if curl -L --max-time 30 -s "$IMG_DOWNLOAD_URL" -o "$IMAGE_DIR/$FILE_NAME"; then
                IMG_PATH="/projects/$FILE_NAME"
            else
                IMG_PATH="$PLACEHOLDER_PATH"
            fi
        else
            IMG_PATH="$PLACEHOLDER_PATH"
        fi
    else
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
