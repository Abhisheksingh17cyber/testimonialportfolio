import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import './Experience.css';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      type: 'work',
      title: 'Chief Marketing Officer',
      company: 'GlobalTech Industries',
      period: '2021 - Present',
      description: 'Leading global marketing strategy for a $5B tech company. Overseeing 50+ marketing professionals across 12 countries.',
      achievements: ['Increased brand value by 45%', 'Generated $50M in new revenue', 'Launched 15 successful products'],
    },
    {
      type: 'work',
      title: 'VP of Marketing',
      company: 'InnovateCorp',
      period: '2017 - 2021',
      description: 'Directed all marketing operations including digital, content, and brand strategy for Fortune 500 company.',
      achievements: ['Built team from 10 to 35 members', 'Achieved 200% ROI on campaigns', 'Won 5 industry awards'],
    },
    {
      type: 'work',
      title: 'Senior Marketing Director',
      company: 'BrandMasters Agency',
      period: '2013 - 2017',
      description: 'Managed key client accounts and developed integrated marketing strategies for diverse portfolio.',
      achievements: ['Managed $20M annual budget', 'Grew client retention to 95%', 'Led 100+ successful campaigns'],
    },
    {
      type: 'work',
      title: 'Marketing Manager',
      company: 'StartupVentures',
      period: '2010 - 2013',
      description: 'Established marketing foundations for early-stage startups, driving growth and market presence.',
      achievements: ['Helped 10+ startups scale', 'Created viral campaigns', 'Built strong industry network'],
    },
  ];

  const education = [
    {
      type: 'education',
      title: 'MBA, Marketing & Strategy',
      company: 'Harvard Business School',
      period: '2008 - 2010',
      description: 'Graduated with distinction. Focus on digital marketing transformation and brand management.',
    },
    {
      type: 'education',
      title: 'Bachelor of Commerce',
      company: 'Stanford University',
      period: '2004 - 2008',
      description: 'Major in Marketing with minor in Psychology. Dean\'s List all semesters.',
    },
  ];

  const certifications = [
    'Google Analytics Certified',
    'HubSpot Inbound Marketing',
    'Facebook Blueprint',
    'Salesforce Marketing Cloud',
    'Adobe Experience Manager',
    'Six Sigma Green Belt',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="experience" className="experience section" ref={ref}>
      <div className="experience-background">
        <div className="exp-gradient-1" />
        <div className="exp-gradient-2" />
      </div>

      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">Experience</span>
          <h2 className="section-title">
            My Professional <span className="gold-text">Journey</span>
          </h2>
        </motion.div>

        <div className="experience-content">
          <motion.div
            className="experience-timeline"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <div className="timeline-header">
              <FaBriefcase className="timeline-icon" />
              <h3>Work Experience</h3>
            </div>
            
            <div className="timeline">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  className="timeline-item"
                  variants={itemVariants}
                >
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <span className="timeline-period">{exp.period}</span>
                    <h4 className="timeline-title">{exp.title}</h4>
                    <span className="timeline-company">{exp.company}</span>
                    <p className="timeline-description">{exp.description}</p>
                    {exp.achievements && (
                      <ul className="timeline-achievements">
                        {exp.achievements.map((achievement) => (
                          <li key={achievement}>{achievement}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="experience-side">
            <motion.div
              className="education-section"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              <div className="timeline-header">
                <FaGraduationCap className="timeline-icon" />
                <h3>Education</h3>
              </div>
              
              <div className="timeline education-timeline">
                {education.map((edu) => (
                  <motion.div
                    key={edu.title}
                    className="timeline-item"
                    variants={itemVariants}
                  >
                    <div className="timeline-dot" />
                    <div className="timeline-content">
                      <span className="timeline-period">{edu.period}</span>
                      <h4 className="timeline-title">{edu.title}</h4>
                      <span className="timeline-company">{edu.company}</span>
                      <p className="timeline-description">{edu.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="certifications-section"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3>Certifications</h3>
              <div className="certifications-grid">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert}
                    className="certification-badge"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -3 }}
                  >
                    <span className="cert-check">✓</span>
                    {cert}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
