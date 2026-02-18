#!/bin/bash
# deploy-template.sh - Deploy landing page template to Vercel

set -euo pipefail

PROJECT_DIR="$HOME/openclaw-projects/templates/nextjs-sanity-landing"

echo "=== Deploying OpenClaw Landing Template ==="

# Check if Vercel is installed
if ! command -v vercel &> /dev/null; then
    echo "Error: Vercel CLI not found. Install with: npm install -g vercel"
    exit 1
fi

# Check if project has node_modules
if [ ! -d "$PROJECT_DIR/node_modules" ]; then
    echo "Installing dependencies..."
    cd "$PROJECT_DIR" && npm install
fi

# Deploy to Vercel
echo "Deploying to Vercel..."
cd "$PROJECT_DIR"
vercel --prod

echo "✅ Deployment complete!"