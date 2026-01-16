import React from 'react';
import { motion } from 'framer-motion';
import { Link, animateScroll as scroll } from 'react-scroll';
import { UilLinkedin, UilTwitter, UilInstagram, UilDribbble, UilHeart, UilArrowUp } from '@iconscout/react-unicons';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 500, smooth: true });
  };

  const footerLinks = {
    navigation: [
      { name: 'Home', href: 'home' },
      { name: 'About', href: 'about' },
      { name: 'Services', href: 'services' },
      { name: 'Portfolio', href: 'portfolio' },
      { name: 'Experience', href: 'experience' },
      { name: 'Contact', href: 'contact' },
    ],
    services: [
      { name: 'Brand Strategy', href: 'services' },
      { name: 'Digital Marketing', href: 'services' },
      { name: 'Content Strategy', href: 'services' },
      { name: 'Growth Marketing', href: 'services' },
    ],
  };

  const socialLinks = [
    { icon: <UilLinkedin size={20} />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <UilTwitter size={20} />, href: 'https://twitter.com', label: 'Twitter' },
    { icon: <UilInstagram size={20} />, href: 'https://instagram.com', label: 'Instagram' },
    { icon: <UilDribbble size={20} />, href: 'https://dribbble.com', label: 'Dribbble' },
  ];

  return (
    <footer className="footer">
      <div className="footer-gradient" />
      
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <motion.div
              className="footer-logo"
              whileHover={{ scale: 1.05 }}
            >
              <Link to="home" spy={true} smooth={true} offset={-70} duration={500}>
                <span className="logo-text">ADAM</span>
                <span className="logo-dot">.</span>
              </Link>
            </motion.div>
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
                  aria-label={social.label}
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
                    <Link to={link.href} spy={true} smooth={true} offset={-70} duration={500}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-links-column">
              <h4>Services</h4>
              <ul>
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link to={link.href} spy={true} smooth={true} offset={-70} duration={500}>
                      {link.name}
                    </Link>
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
            <UilHeart size={16} className="heart-icon" /> for marketing excellence.
          </p>
          
          <motion.button
            className="scroll-to-top"
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <UilArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
