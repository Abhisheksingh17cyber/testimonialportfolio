import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Testimonials.css';

const Testimonials: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, TechVision Inc.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
      text: 'Adam transformed our entire marketing approach. His strategic vision and execution capabilities are unmatched. We saw a 200% increase in brand engagement within the first year.',
      rating: 5,
      company: 'TechVision Inc.',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Founder, InnovateLabs',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      text: 'Working with Adam was a game-changer for our startup. His ability to identify market opportunities and create compelling campaigns helped us achieve unicorn status.',
      rating: 5,
      company: 'InnovateLabs',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'CMO, GlobalBrands',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      text: "Adam's leadership style inspires excellence. He built and mentored a world-class marketing team that consistently delivers exceptional results. A true industry leader.",
      rating: 5,
      company: 'GlobalBrands',
    },
    {
      id: 4,
      name: 'David Park',
      role: 'President, LuxeMotors',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      text: 'The brand repositioning Adam led for our company was nothing short of revolutionary. He has an incredible talent for understanding consumer psychology and market dynamics.',
      rating: 5,
      company: 'LuxeMotors',
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      role: 'VP Marketing, EcoLife',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face',
      text: 'Adam helped us launch our sustainable products with a campaign that resonated globally. His creativity combined with data-driven strategy is rare and incredibly effective.',
      rating: 5,
      company: 'EcoLife',
    },
  ];

  const clients = [
    'Google', 'Microsoft', 'Apple', 'Amazon', 'Meta', 'Tesla', 'Nike', 'Adidas'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section id="testimonials" className="testimonials section" ref={ref}>
      <div className="testimonials-background">
        <div className="testimonial-gradient" />
      </div>

      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">
            What <span className="gold-text">Clients Say</span>
          </h2>
        </motion.div>

        <div className="testimonials-wrapper">
          <button className="testimonial-nav prev" onClick={handlePrev}>
            <FaChevronLeft />
          </button>

          <div className="testimonial-slider">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="testimonial-card"
              >
                <div className="testimonial-quote">
                  <FaQuoteLeft className="quote-icon" />
                </div>
                
                <p className="testimonial-text">{testimonials[currentIndex].text}</p>
                
                <div className="testimonial-rating">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <FaStar key={i} className="star" />
                  ))}
                </div>

                <div className="testimonial-author">
                  <div className="author-image">
                    <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} />
                  </div>
                  <div className="author-info">
                    <h4 className="author-name">{testimonials[currentIndex].name}</h4>
                    <p className="author-role">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button className="testimonial-nav next" onClick={handleNext}>
            <FaChevronRight />
          </button>
        </div>

        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
            />
          ))}
        </div>

        <motion.div
          className="clients-section"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="clients-label">Trusted by Leading Brands</p>
          <div className="clients-logos">
            {clients.map((client, index) => (
              <motion.div
                key={client}
                className="client-logo"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.1, color: '#d4af37' }}
              >
                {client}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
