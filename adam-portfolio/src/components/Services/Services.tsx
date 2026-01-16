import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { UilMegaphone, UilChartLine, UilPen, UilUsersAlt, UilSearchPlus, UilMobileAndroid, UilVideo, UilGlobe } from '@iconscout/react-unicons';
import './Services.css';

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: <UilMegaphone size={32} />,
      title: 'Brand Strategy',
      description: 'Developing comprehensive brand strategies that position your business for market leadership and sustainable growth.',
      features: ['Brand Positioning', 'Market Analysis', 'Competitive Strategy'],
    },
    {
      icon: <UilChartLine size={32} />,
      title: 'Growth Marketing',
      description: 'Data-driven marketing strategies focused on rapid scaling and measurable business outcomes.',
      features: ['Conversion Optimization', 'A/B Testing', 'Funnel Analysis'],
    },
    {
      icon: <UilPen size={32} />,
      title: 'Content Strategy',
      description: 'Creating compelling content that tells your brand story and engages your target audience effectively.',
      features: ['Content Planning', 'Storytelling', 'Editorial Calendar'],
    },
    {
      icon: <UilUsersAlt size={32} />,
      title: 'Team Leadership',
      description: 'Building and mentoring high-performing marketing teams that deliver exceptional results.',
      features: ['Team Building', 'Performance Management', 'Training Programs'],
    },
    {
      icon: <UilSearchPlus size={32} />,
      title: 'Digital Advertising',
      description: 'Strategic paid media campaigns across platforms to maximize ROI and reach target audiences.',
      features: ['PPC Campaigns', 'Social Ads', 'Retargeting'],
    },
    {
      icon: <UilMobileAndroid size={32} />,
      title: 'Social Media',
      description: 'Building engaged communities and driving brand awareness through strategic social media management.',
      features: ['Community Management', 'Influencer Partnerships', 'Social Listening'],
    },
    {
      icon: <UilVideo size={32} />,
      title: 'Video Marketing',
      description: 'Producing engaging video content that captures attention and drives conversions.',
      features: ['Video Strategy', 'Production Oversight', 'Distribution Planning'],
    },
    {
      icon: <UilGlobe size={32} />,
      title: 'Global Marketing',
      description: 'Expanding brands into international markets with culturally relevant strategies.',
      features: ['Market Entry', 'Localization', 'Cultural Adaptation'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="services" className="services section" ref={ref}>
      <div className="services-background">
        <div className="services-grid-pattern" />
      </div>

      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">Services</span>
          <h2 className="section-title">
            What I <span className="gold-text">Bring to the Table</span>
          </h2>
          <p className="section-subtitle">
            Comprehensive marketing solutions tailored to drive your business forward
          </p>
        </motion.div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="service-card"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4)',
              }}
            >
              <div className="service-icon-wrapper">
                <div className="service-icon">{service.icon}</div>
                <div className="service-icon-glow" />
              </div>
              
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              
              <ul className="service-features">
                {service.features.map((feature) => (
                  <li key={feature}>
                    <span className="feature-dot" />
                    {feature}
                  </li>
                ))}
              </ul>

              <motion.div
                className="service-link"
                whileHover={{ x: 10 }}
              >
                Learn More →
              </motion.div>

              <div className="service-number">{String(index + 1).padStart(2, '0')}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="services-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="cta-content">
            <h3>Need a Custom Marketing Solution?</h3>
            <p>Let's discuss your unique challenges and create a tailored strategy for your business.</p>
          </div>
          <motion.a
            href="#contact"
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
