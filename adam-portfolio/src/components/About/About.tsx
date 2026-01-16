import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { UilAward, UilLightbulb, UilRocket, UilUsersAlt } from '@iconscout/react-unicons';
import './About.css';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const skills = [
    { name: 'Brand Strategy', level: 95 },
    { name: 'Digital Marketing', level: 92 },
    { name: 'Team Leadership', level: 90 },
    { name: 'Data Analytics', level: 88 },
    { name: 'Content Strategy', level: 94 },
    { name: 'Growth Marketing', level: 91 },
  ];

  const highlights = [
    { icon: <UilAward size={28} />, title: 'Award Winning', description: 'Multiple industry awards for marketing excellence' },
    { icon: <UilLightbulb size={28} />, title: 'Innovative', description: 'Pioneering new marketing strategies' },
    { icon: <UilRocket size={28} />, title: 'Results Driven', description: 'Consistent ROI improvement' },
    { icon: <UilUsersAlt size={28} />, title: 'Team Builder', description: 'Built & led teams of 50+ marketers' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="about section" ref={ref}>
      <div className="about-background">
        <div className="about-gradient-1" />
        <div className="about-gradient-2" />
      </div>
      
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">About Me</span>
          <h2 className="section-title">
            Crafting Success Stories Through{' '}
            <span className="gold-text">Strategic Marketing</span>
          </h2>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-left"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.div className="about-image-wrapper" variants={itemVariants}>
              <div className="about-image-glow" />
              <div className="about-image">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=700&fit=crop&crop=face"
                  alt="Adam working"
                />
              </div>
              <div className="experience-badge">
                <span className="exp-number">
                  {inView && <CountUp end={15} duration={2.5} />}+
                </span>
                <span className="exp-text">Years Experience</span>
              </div>
            </motion.div>

            <motion.div className="about-highlights" variants={itemVariants}>
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="highlight-card"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="highlight-icon">{item.icon}</div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="about-right"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.p className="about-intro" variants={itemVariants}>
              As a seasoned Marketing Head with over 15 years of experience, I've had the privilege 
              of transforming brands and driving unprecedented growth across diverse industries.
            </motion.p>

            <motion.p className="about-text" variants={itemVariants}>
              My journey in marketing began with a passion for understanding consumer behavior 
              and has evolved into leading comprehensive marketing strategies for Fortune 500 
              companies. I specialize in creating data-driven campaigns that not only capture 
              attention but convert audiences into loyal brand advocates.
            </motion.p>

            <motion.p className="about-text" variants={itemVariants}>
              I believe in the power of authentic storytelling combined with strategic precision. 
              Every campaign I lead is built on a foundation of thorough market research, creative 
              excellence, and measurable outcomes.
            </motion.p>

            <motion.div className="skills-section" variants={itemVariants}>
              <h3 className="skills-title">Core Competencies</h3>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1.5, delay: index * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div className="about-stats-grid" variants={itemVariants}>
              <div className="about-stat">
                <span className="about-stat-number">
                  {inView && <CountUp end={500} duration={2.5} />}+
                </span>
                <span className="about-stat-label">Campaigns Launched</span>
              </div>
              <div className="about-stat">
                <span className="about-stat-number">
                  {inView && <CountUp end={150} duration={2.5} />}M+
                </span>
                <span className="about-stat-label">People Reached</span>
              </div>
              <div className="about-stat">
                <span className="about-stat-number">
                  {inView && <CountUp end={98} duration={2.5} />}%
                </span>
                <span className="about-stat-label">Client Retention</span>
              </div>
            </motion.div>

            <motion.div className="about-cta" variants={itemVariants}>
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
                Let's Work Together
              </motion.a>
              <motion.a
                href="/resume.pdf"
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download CV
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
