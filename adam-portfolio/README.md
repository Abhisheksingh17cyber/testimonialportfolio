# Adam Marketing Portfolio

A professional, modern portfolio website for a marketing head, built with React 18 and TypeScript. Features smooth animations, interactive components, and a sophisticated gold and dark color scheme.

![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-3178C6?style=flat-square&logo=typescript)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.26.2-FF0055?style=flat-square&logo=framer)

## ✨ Features

### Interactive Components
- **Animated Navigation** - Smooth, responsive navigation with scroll effects
- **Hero Section** - Eye-catching intro with particle background effects
- **About Section** - Skills showcase with animated counters
- **Services** - Professional service offerings display
- **Portfolio Gallery** - Image gallery with modal view
- **Experience Timeline** - Career history in an interactive timeline
- **Testimonials Slider** - Client feedback with Swiper integration
- **Contact Form** - Functional contact form with EmailJS integration
- **Custom Cursor** - Enhanced user experience with custom cursor effects

### Technical Highlights
- ⚡ Built with **React 18** and **TypeScript** for type safety
- 🎨 **Framer Motion** for smooth, professional animations
- 📱 Fully **responsive design** for all devices
- 🎯 **GSAP** for advanced animations
- 📧 **EmailJS** integration for contact form
- 🎪 Modern UI with **Swiper** carousel
- 🎭 Professional **gold and dark** color scheme
- ♿ Accessibility-focused with semantic HTML

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Abhisheksingh17cyber/adam-marketing-portfolio.git
cd adam-marketing-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000).
The page will reload when you make edits.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder.
The build is optimized and ready for deployment.

### `npm run eject`
⚠️ **Note: this is a one-way operation!**

Ejects from Create React App, giving you full control over configuration files.

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| React 18 | UI Framework |
| TypeScript | Type Safety |
| Framer Motion | Animations |
| GSAP | Advanced Animations |
| EmailJS | Contact Form |
| React Icons | Icon Library |
| Swiper | Carousels & Sliders |
| React CountUp | Animated Counters |
| React Type Animation | Text Animations |
| React Scroll | Smooth Scrolling |

## 📁 Project Structure

```
adam-portfolio/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   ├── App.tsx          # Main application component
│   ├── App.css          # Application styles
│   ├── index.tsx        # Application entry point
│   └── index.css        # Global styles
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
└── README.md           # This file
```

## 🚀 Deployment

### Vercel (Recommended)
The project includes a `vercel.json` configuration file for easy deployment.

```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Deploy the build folder via Netlify CLI or drag-and-drop
```

### GitHub Pages
```bash
npm install --save-dev gh-pages

# Add to package.json scripts:
# "predeploy": "npm run build",
# "deploy": "gh-pages -d build"

npm run deploy
```

## 🎨 Customization

### Colors
The color scheme can be customized in `src/index.css` and `src/App.css`:
- Primary: Gold (#D4AF37)
- Background: Dark shades
- Text: White/Light gray

### Content
Update component content in the `src/components/` directory:
- Hero section text
- About information
- Services offered
- Portfolio items
- Experience timeline
- Testimonials
- Contact information

### EmailJS Setup
To enable the contact form:
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service
3. Create an email template
4. Add your credentials to the contact form component

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

For questions or feedback about this portfolio:
- Visit the live website (add your URL here)
- Open an issue on GitHub
- Connect on LinkedIn (add your profile)

---

**Note**: This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

For more information about Create React App, visit the [official documentation](https://create-react-app.dev/).
