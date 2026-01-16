# Testimonial Portfolio Repository

This repository contains portfolio projects and setup automation tools.

## Contents

### Adam Marketing Portfolio
Located in `adam-portfolio/` directory - A professional marketing head portfolio featuring:
- **Technology**: React 18 with TypeScript
- **Animations**: Framer Motion for smooth, professional animations
- **Design**: Gold and dark masculine color scheme
- **Features**:
  - Animated navigation
  - Hero section with particle background
  - About section with skills and animated counters
  - Services showcase
  - Portfolio gallery with modal view
  - Experience timeline
  - Testimonials slider
  - Contact form with EmailJS integration
  - Custom cursor effects

### Setup Automation

#### Quick Setup (Automated)
To create the `adam-marketing-portfolio` repository and push the code:

```bash
./setup-adam-portfolio-repo.sh
```

**Prerequisites:**
- GitHub CLI (`gh`) installed and authenticated
- Git installed

#### Manual Setup
See `setup-adam-portfolio-repo.md` for detailed manual setup instructions including:
- GitHub CLI method
- GitHub Web Interface method
- GitHub API method
- Deployment options (Vercel, Netlify, GitHub Pages)

## Repository Structure

```
.
├── adam-portfolio/              # Adam Marketing Portfolio source code
│   ├── src/                     # React TypeScript source files
│   ├── public/                  # Static assets
│   ├── package.json             # Dependencies and scripts
│   └── README.md                # Portfolio-specific documentation
├── setup-adam-portfolio-repo.sh # Automated setup script
├── setup-adam-portfolio-repo.md # Detailed setup documentation
└── README.md                    # This file
```

## Quick Start

### Running Adam Portfolio Locally

```bash
cd adam-portfolio
npm install
npm start
```

The application will open at `http://localhost:3000`

### Building for Production

```bash
cd adam-portfolio
npm run build
```

Production-ready files will be in the `build/` directory.

## Creating the GitHub Repository

The adam-portfolio code is ready to be published to its own repository at:
`https://github.com/Abhisheksingh17cyber/adam-marketing-portfolio`

Choose one of these methods:

1. **Automated Script** (Recommended):
   ```bash
   ./setup-adam-portfolio-repo.sh
   ```

2. **Manual Setup**: Follow the guide in `setup-adam-portfolio-repo.md`

## License

See LICENSE file for details.

## Support

For questions or issues:
- Check the setup documentation in `setup-adam-portfolio-repo.md`
- Review the portfolio README in `adam-portfolio/README.md`
