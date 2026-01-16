import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Experience from './components/Experience/Experience';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

// Loading Screen Component
const LoadingScreen: React.FC<{ setLoading: (loading: boolean) => void }> = ({ setLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="loading-content"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="loading-logo"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        >
          <span className="loading-letter">A</span>
        </motion.div>
        <motion.div
          className="loading-bar"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />
        <motion.p
          className="loading-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Loading Experience...
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

// Cursor Component
const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });

    const target = e.target as HTMLElement;
    setIsPointer(
      window.getComputedStyle(target).cursor === 'pointer' ||
      target.tagName === 'A' ||
      target.tagName === 'BUTTON'
    );
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return (
    <>
      <motion.div
        className="cursor-dot"
        animate={{ x: position.x - 5, y: position.y - 5 }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />
      <motion.div
        className={`cursor-outline ${isPointer ? 'pointer' : ''}`}
        animate={{ x: position.x - 20, y: position.y - 20 }}
        transition={{ type: 'spring', stiffness: 250, damping: 20 }}
      />
    </>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <ThemeProvider>
      <div className="App">
        <AnimatePresence mode="wait">
          {loading ? (
            <LoadingScreen key="loading" setLoading={setLoading} />
          ) : (
            <motion.div
              key="main"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <CustomCursor />
              <Navbar />
              <main>
                <Hero />
                <About />
                <Services />
                <Portfolio />
                <Experience />
                <Testimonials />
                <Contact />
              </main>
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
}

export default App;
