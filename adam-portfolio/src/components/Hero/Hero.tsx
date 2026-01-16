import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedin, FaTwitter, FaInstagram, FaDribbble } from 'react-icons/fa';
import { HiArrowDown } from 'react-icons/hi';
import ParticleBackground from '../ParticleBackground/ParticleBackground';
import './Hero.css';

const Hero: React.FC = () => {
  const socialLinks = [
    { icon: <FaLinkedin />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <FaTwitter />, href: 'https://twitter.com', label: 'Twitter' },
    { icon: <FaInstagram />, href: 'https://instagram.com', label: 'Instagram' },
    { icon: <FaDribbble />, href: 'https://dribbble.com', label: 'Dribbble' },
  ];

  const handleScrollDown = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <ParticleBackground />
      
      <div className="hero-gradient-overlay" />
      
      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <span className="badge-dot" />
            Available for Opportunities
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Hi, I'm <span className="gold-text">Adam</span>
          </motion.h1>

          <motion.div
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <TypeAnimation
              sequence={[
                'Marketing Head',
                2000,
                'Brand Strategist',
                2000,
                'Growth Expert',
                2000,
                'Digital Marketing Leader',
                2000,
                'Creative Director',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="typing-text"
            />
          </motion.div>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            Transforming brands through innovative marketing strategies. With 15+ years of experience,
            I help businesses achieve extraordinary growth and market dominance.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <motion.a
              href="#portfolio"
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get In Touch
            </motion.a>
          </motion.div>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number">200+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number">$50M+</span>
              <span className="stat-label">Revenue Generated</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="hero-image-wrapper">
            <div className="hero-image-glow" />
            <div className="hero-image">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face"
                alt="Adam - Marketing Head"
              />
            </div>
            <motion.div
              className="hero-image-decoration"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
          </div>
          
          <motion.div
            className="floating-card card-experience"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="card-icon">🏆</span>
            <div className="card-content">
              <span className="card-title">Award Winner</span>
              <span className="card-subtitle">Marketing Excellence 2024</span>
            </div>
          </motion.div>

          <motion.div
            className="floating-card card-clients"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="card-icon">🌟</span>
            <div className="card-content">
              <span className="card-title">50+ Brands</span>
              <span className="card-subtitle">Fortune 500 Clients</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="hero-social"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
      >
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            whileHover={{ scale: 1.2, color: '#d4af37' }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2 + index * 0.1 }}
          >
            {social.icon}
          </motion.a>
        ))}
        <div className="social-line" />
      </motion.div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        onClick={handleScrollDown}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <HiArrowDown className="scroll-icon" />
        </motion.div>
        <span>Scroll Down</span>
      </motion.div>
    </section>
  );
};

export default Hero;
