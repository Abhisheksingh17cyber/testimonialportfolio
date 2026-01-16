# Setup Adam Marketing Portfolio Repository

## Overview
This guide provides instructions to create and publish the Adam Marketing Portfolio to a new GitHub repository.

## Prerequisites
- GitHub account (Abhisheksingh17cyber)
- Git installed locally
- GitHub CLI (`gh`) or GitHub Personal Access Token

## Portfolio Features
The Adam Marketing Portfolio includes:
- **Technology Stack**: React 18 with TypeScript
- **Animations**: Framer Motion for smooth animations
- **Design**: Professional gold/dark masculine color scheme
- **Components**:
  - Animated navigation
  - Hero section with particle background
  - About section with skills and counters
  - Services showcase
  - Portfolio gallery with modal
  - Experience timeline
  - Testimonials slider
  - Contact form with EmailJS integration
  - Custom cursor effects

## Method 1: Using GitHub CLI (Recommended)

### Step 1: Create the Repository
```bash
gh repo create adam-marketing-portfolio --public --description "Professional Marketing Head Portfolio for Adam - React TypeScript with Framer Motion"
```

### Step 2: Navigate to the Portfolio Directory
```bash
cd adam-portfolio
```

### Step 3: Initialize Git (if not already initialized)
```bash
git init
```

### Step 4: Add All Files
```bash
git add .
```

### Step 5: Create Initial Commit
```bash
git commit -m "Initial commit: Adam Marketing Portfolio

- React 18 with TypeScript
- Framer Motion animations
- Professional design with gold/dark theme
- Interactive components (navigation, hero, about, services, portfolio, experience, testimonials, contact)
- Custom cursor effects
- Responsive design"
```

### Step 6: Add Remote and Push
```bash
git branch -M main
git remote add origin https://github.com/Abhisheksingh17cyber/adam-marketing-portfolio.git
git push -u origin main
```

## Method 2: Using GitHub Web Interface

### Step 1: Create Repository on GitHub
1. Go to https://github.com/new
2. Set repository name: `adam-marketing-portfolio`
3. Set visibility: **Public**
4. Description: "Professional Marketing Head Portfolio for Adam - React TypeScript with Framer Motion"
5. Do NOT initialize with README, .gitignore, or license (we have our own)
6. Click "Create repository"

### Step 2: Push Local Code
```bash
cd adam-portfolio
git init
git add .
git commit -m "Initial commit: Adam Marketing Portfolio"
git branch -M main
git remote add origin https://github.com/Abhisheksingh17cyber/adam-marketing-portfolio.git
git push -u origin main
```

## Method 3: Using GitHub API with Personal Access Token

### Step 1: Create Personal Access Token
1. Go to GitHub Settings > Developer settings > Personal access tokens > Tokens (classic)
2. Generate new token with `repo` scope

### Step 2: Create Repository via API
```bash
curl -X POST -H "Authorization: token YOUR_TOKEN" \
  -H "Accept: application/vnd.github.v3+json" \
  https://api.github.com/user/repos \
  -d '{
    "name": "adam-marketing-portfolio",
    "description": "Professional Marketing Head Portfolio for Adam - React TypeScript with Framer Motion",
    "private": false
  }'
```

### Step 3: Push Code
```bash
cd adam-portfolio
git init
git add .
git commit -m "Initial commit: Adam Marketing Portfolio"
git branch -M main
git remote add origin https://github.com/Abhisheksingh17cyber/adam-marketing-portfolio.git
git push -u origin main
```

## Automated Setup Script

See `setup-adam-portfolio-repo.sh` for an automated script that performs these steps.

## Post-Setup Configuration

### Enable GitHub Pages (Optional)
1. Go to repository Settings > Pages
2. Source: Deploy from a branch
3. Branch: `main` / `build` folder
4. Save

### Add Repository Topics
Add relevant topics to make the repository discoverable:
- `react`
- `typescript`
- `portfolio`
- `framer-motion`
- `marketing-portfolio`
- `personal-website`
- `responsive-design`

### Update README
Consider adding:
- Live demo link
- Screenshots
- Installation instructions
- Deployment instructions
- License information

## Deployment Options

### Vercel (Recommended - already configured)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### GitHub Pages
```bash
npm install --save-dev gh-pages
# Add to package.json scripts: "deploy": "gh-pages -d build"
npm run build
npm run deploy
```

## Verification

After pushing, verify:
- [ ] Repository is public and accessible
- [ ] All files are present
- [ ] README is displayed correctly
- [ ] Dependencies are listed in package.json
- [ ] Repository has appropriate description and topics
- [ ] Consider adding screenshots to README

## Support

For issues or questions:
- Check GitHub repository issues
- Review React documentation: https://react.dev/
- Review Framer Motion docs: https://www.framer.com/motion/
