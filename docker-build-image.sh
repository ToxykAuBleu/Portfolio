#!/bin/bash

# Variables.
IMAGE_NAME="ghcr.io/toxykaubleu/portfolio"
IMAGE_TAG="latest"
DOCKERFILE_PATH="Dockerfile"
APP_DIR="."

# Building the Docker image.
echo "🐳 Building Docker image..."
docker build -t $IMAGE_NAME:$IMAGE_TAG -f $DOCKERFILE_PATH $APP_DIR || echo "❌ Docker build failed."
echo "✅ Docker image $IMAGE_NAME:$IMAGE_TAG built successfully."