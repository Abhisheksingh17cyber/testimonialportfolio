#!/bin/bash

# Setup Script for Adam Marketing Portfolio Repository
# This script creates a new GitHub repository and pushes the adam-portfolio code

set -e  # Exit on error

REPO_NAME="adam-marketing-portfolio"
REPO_OWNER="Abhisheksingh17cyber"
REPO_DESCRIPTION="Professional Marketing Head Portfolio for Adam - React TypeScript with Framer Motion"
PORTFOLIO_DIR="adam-portfolio"

echo "=========================================="
echo "Adam Marketing Portfolio Repository Setup"
echo "=========================================="
echo ""

# Check if gh CLI is installed
if ! command -v gh &> /dev/null; then
    echo "Error: GitHub CLI (gh) is not installed."
    echo "Please install it from: https://cli.github.com/"
    echo ""
    echo "Alternative: Use the manual setup instructions in setup-adam-portfolio-repo.md"
    exit 1
fi

# Check if user is authenticated
if ! gh auth status &> /dev/null; then
    echo "Error: Not authenticated with GitHub CLI."
    echo "Please run: gh auth login"
    exit 1
fi

echo "Step 1: Creating GitHub repository..."
if gh repo view "$REPO_OWNER/$REPO_NAME" &> /dev/null; then
    echo "Warning: Repository $REPO_OWNER/$REPO_NAME already exists."
    read -p "Do you want to continue and push to the existing repository? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "Aborted."
        exit 1
    fi
else
    echo "Creating new public repository: $REPO_OWNER/$REPO_NAME"
    gh repo create "$REPO_NAME" \
        --public \
        --description "$REPO_DESCRIPTION" \
        --confirm
    echo "✓ Repository created successfully!"
fi

echo ""
echo "Step 2: Preparing portfolio directory..."

# Check if portfolio directory exists
if [ ! -d "$PORTFOLIO_DIR" ]; then
    echo "Error: Portfolio directory '$PORTFOLIO_DIR' not found."
    exit 1
fi

# Navigate to portfolio directory
cd "$PORTFOLIO_DIR"
echo "✓ Found portfolio directory: $(pwd)"

echo ""
echo "Step 3: Initializing Git repository..."

# Initialize git if not already initialized
if [ ! -d ".git" ]; then
    git init
    echo "✓ Git repository initialized"
else
    echo "✓ Git repository already initialized"
fi

echo ""
echo "Step 4: Adding files to Git..."
git add .
echo "✓ Files staged for commit"

echo ""
echo "Step 5: Creating initial commit..."

# Check if there are changes to commit
if git diff --staged --quiet; then
    echo "No changes to commit. Repository may already be up to date."
else
    git commit -m "Initial commit: Adam Marketing Portfolio

- React 18 with TypeScript
- Framer Motion animations
- Professional design with gold/dark theme
- Interactive components (navigation, hero, about, services, portfolio, experience, testimonials, contact)
- Custom cursor effects
- Responsive design"
    echo "✓ Initial commit created"
fi

echo ""
echo "Step 6: Setting up remote and pushing..."

# Add remote if it doesn't exist
if ! git remote get-url origin &> /dev/null; then
    git remote add origin "https://github.com/$REPO_OWNER/$REPO_NAME.git"
    echo "✓ Remote 'origin' added"
else
    echo "✓ Remote 'origin' already exists"
fi

# Ensure we're on main branch
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" != "main" ]; then
    git branch -M main
    echo "✓ Renamed branch to 'main'"
fi

# Push to GitHub
echo "Pushing to GitHub..."
git push -u origin main --force
echo "✓ Code pushed successfully!"

echo ""
echo "=========================================="
echo "✓ Setup Complete!"
echo "=========================================="
echo ""
echo "Repository URL: https://github.com/$REPO_OWNER/$REPO_NAME"
echo ""
echo "Next steps:"
echo "1. Visit the repository: https://github.com/$REPO_OWNER/$REPO_NAME"
echo "2. Add topics: react, typescript, portfolio, framer-motion, marketing-portfolio"
echo "3. Consider setting up GitHub Pages or deploying to Vercel"
echo "4. Add screenshots to the README"
echo ""
echo "To deploy to Vercel:"
echo "  cd $PORTFOLIO_DIR"
echo "  npm install -g vercel"
echo "  vercel --prod"
echo ""
