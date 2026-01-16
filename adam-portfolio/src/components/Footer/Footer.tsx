import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaInstagram, FaDribbble, FaHeart, FaArrowUp } from 'react-icons/fa';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    navigation: [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Services', href: '#services' },
      { name: 'Portfolio', href: '#portfolio' },
      { name: 'Experience', href: '#experience' },
      { name: 'Contact', href: '#contact' },
    ],
    services: [
      { name: 'Brand Strategy', href: '#services' },
      { name: 'Digital Marketing', href: '#services' },
      { name: 'Content Strategy', href: '#services' },
      { name: 'Growth Marketing', href: '#services' },
    ],
  };

  const socialLinks = [
    { icon: <FaLinkedin />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <FaTwitter />, href: 'https://twitter.com', label: 'Twitter' },
    { icon: <FaInstagram />, href: 'https://instagram.com', label: 'Instagram' },
    { icon: <FaDribbble />, href: 'https://dribbble.com', label: 'Dribbble' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-gradient" />
      
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <motion.a
              href="#home"
              className="footer-logo"
              onClick={(e) => handleNavClick(e, '#home')}
              whileHover={{ scale: 1.05 }}
            >
              <span className="logo-text">ADAM</span>
              <span className="logo-dot">.</span>
            </motion.a>
            <p className="footer-tagline">
              Transforming brands through innovative marketing strategies and data-driven solutions.
            </p>
            <div className="footer-social">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-links-column">
              <h4>Navigation</h4>
              <ul>
                {footerLinks.navigation.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-links-column">
              <h4>Services</h4>
              <ul>
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-links-column">
              <h4>Contact</h4>
              <ul className="contact-list">
                <li>adam@marketing-pro.com</li>
                <li>+1 (555) 123-4567</li>
                <li>New York, NY</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} Adam. All rights reserved. Made with{' '}
            <FaHeart className="heart-icon" /> for marketing excellence.
          </p>
          
          <motion.button
            className="scroll-to-top"
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaArrowUp />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
