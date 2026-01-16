import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { UilBars, UilTimes } from '@iconscout/react-unicons';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  const navItems = useMemo(() => [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Services', href: 'services' },
    { name: 'Portfolio', href: 'portfolio' },
    { name: 'Experience', href: 'experience' },
    { name: 'Testimonials', href: 'testimonials' },
    { name: 'Contact', href: 'contact' },
  ], []);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);

    const sections = navItems.map(item => item.href);
    for (const section of [...sections].reverse()) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100) {
          setActiveSection(section);
          break;
        }
      }
    }
  }, [navItems]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <motion.nav
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="navbar-container">
        <motion.div
          className="navbar-logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="home" spy={true} smooth={true} offset={-70} duration={500}>
            <span className="logo-text">ADAM</span>
            <span className="logo-dot">.</span>
          </Link>
        </motion.div>

        <div className="navbar-links">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              className={`nav-link-wrapper ${activeSection === item.href ? 'active' : ''}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -2 }}
            >
              <Link
                to={item.href}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={`nav-link ${activeSection === item.href ? 'active' : ''}`}
                onSetActive={() => setActiveSection(item.href)}
              >
                {item.name}
              </Link>
              {activeSection === item.href && (
                <motion.span
                  className="nav-indicator"
                  layoutId="navIndicator"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="navbar-cta"
          whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(212, 175, 55, 0.5)' }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>
            Let's Talk
          </Link>
        </motion.div>

        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <UilTimes size={28} /> : <UilBars size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                className={`mobile-nav-link ${activeSection === item.href ? 'active' : ''}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.href}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={closeMobileMenu}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              className="mobile-cta"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: navItems.length * 0.1 }}
            >
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={closeMobileMenu}
              >
                Let's Talk
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
