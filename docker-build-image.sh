#!/bin/bash

# Variables.
IMAGE_NAME="ghcr.io/toxykaubleu/portfolio"
IMAGE_TAG="latest"
DOCKERFILE_PATH="Dockerfile"
APP_DIR="."

# Function to handle errors and exit.
error_exit() {
    echo "❌ $1"
    exit 1
}

# Building the application if -b flag is provided.
if [[ "$1" == "-b" ]]; then
    echo "🚀 Building the application with Bun..."
    ~/.bun/bin/bun ci --frozen-lockfile
    ~/.bun/bin/bun run build
    BUILD_STATUS=$?

    if [ $BUILD_STATUS -ne 0 ]; then
        echo "⚠️ Bun build failed. Trying fallback with Node + Angular CLI..."

        # Check for Node.js using NVM.
        if [ -d "$HOME/.nvm" ]; then
            # Find the latest Node version installed via NVM.
            NODE_DIR=$(ls -d $HOME/.nvm/versions/node/v*/bin 2>/dev/null | sort -V | tail -n 1)

            if [ -n "$NODE_DIR" ] && [ -x "$NODE_DIR/node" ]; then
                echo "🟢 Using Node from: $NODE_DIR"
                "$NODE_DIR/node" node_modules/@angular/cli/bin/ng build
                BUILD_STATUS=$?
            else
                error_exit "No valid Node version found under ~/.nvm/versions/node. Build failed."
            fi
        else
            error_exit "NVM not found on this system. Build failed."
        fi

        if [ $BUILD_STATUS -ne 0 ]; then
            error_exit "Fallback build with Node failed. Exiting."
        else
            echo "✅ Application built successfully with Angular CLI."
        fi
    else
        echo "✅ Application built successfully with Bun."
    fi
fi

# Building the Docker image.
echo "🐳 Building Docker image..."
docker build -t $IMAGE_NAME:$IMAGE_TAG -f $DOCKERFILE_PATH $APP_DIR || error_exit "Docker build failed."
echo "✅ Docker image $IMAGE_NAME:$IMAGE_TAG built successfully."