import React, { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { UilEnvelope, UilPhone, UilMapMarker, UilLinkedin, UilTwitter, UilInstagram, UilDribbble, UilMessage } from '@iconscout/react-unicons';
import emailjs from '@emailjs/browser';
import './Contact.css';

// EmailJS Configuration - Replace with your own keys
const EMAILJS_SERVICE_ID = 'service_xxxxxxx'; // Replace with your EmailJS service ID
const EMAILJS_TEMPLATE_ID = 'template_xxxxxxx'; // Replace with your EmailJS template ID
const EMAILJS_PUBLIC_KEY = 'xxxxxxxxxxxxxxx'; // Replace with your EmailJS public key

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setError(null);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Using EmailJS to send emails
      if (formRef.current) {
        await emailjs.sendForm(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          formRef.current,
          EMAILJS_PUBLIC_KEY
        );
      }
      
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setIsSubmitting(false);
      setError('Failed to send message. Please try again or contact directly via email.');
      console.error('EmailJS Error:', err);
    }
  };

  const contactInfo = [
    { icon: <UilEnvelope size={24} />, label: 'Email', value: 'adam@marketing-pro.com', href: 'mailto:adam@marketing-pro.com' },
    { icon: <UilPhone size={24} />, label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: <UilMapMarker size={24} />, label: 'Location', value: 'New York, NY', href: '#' },
  ];

  const socialLinks = [
    { icon: <UilLinkedin size={24} />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <UilTwitter size={24} />, href: 'https://twitter.com', label: 'Twitter' },
    { icon: <UilInstagram size={24} />, href: 'https://instagram.com', label: 'Instagram' },
    { icon: <UilDribbble size={24} />, href: 'https://dribbble.com', label: 'Dribbble' },
  ];

  return (
    <section id="contact" className="contact section" ref={ref}>
      <div className="contact-background">
        <div className="contact-gradient-1" />
        <div className="contact-gradient-2" />
      </div>

      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">Contact</span>
          <h2 className="section-title">
            Let's <span className="gold-text">Connect</span>
          </h2>
          <p className="section-subtitle">
            Ready to transform your marketing strategy? Let's discuss how I can help your business grow.
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3>Get in Touch</h3>
            <p className="contact-intro">
              Whether you're looking to rebrand, launch a new campaign, or scale your marketing efforts, 
              I'm here to help. Let's create something extraordinary together.
            </p>

            <div className="contact-details">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="contact-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <div className="contact-icon">{item.icon}</div>
                  <div className="contact-text">
                    <span className="contact-label">{item.label}</span>
                    <span className="contact-value">{item.value}</span>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="contact-social">
              <p className="social-label">Follow Me</p>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="availability-badge">
              <span className="availability-dot" />
              Currently available for new projects
            </div>
          </motion.div>

          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    autoComplete="name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="consulting">Marketing Consulting</option>
                  <option value="branding">Brand Strategy</option>
                  <option value="campaign">Campaign Development</option>
                  <option value="speaking">Speaking Engagement</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project..."
                  rows={6}
                />
              </div>

              {error && (
                <motion.div 
                  className="form-error"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {error}
                </motion.div>
              )}

              <motion.button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <span className="btn-loading">
                    <span className="spinner" />
                    Sending...
                  </span>
                ) : submitted ? (
                  <span className="btn-success">Message Sent! ✓</span>
                ) : (
                  <>
                    <UilMessage size={20} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
