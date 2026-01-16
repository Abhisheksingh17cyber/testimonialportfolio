import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { UilExternalLinkAlt, UilExpandArrows, UilTimes } from '@iconscout/react-unicons';
import './Portfolio.css';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  results: string[];
  tags: string[];
  link: string;
}

const Portfolio: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters = ['all', 'branding', 'digital', 'strategy', 'campaign'];

  const projects: Project[] = [
    {
      id: 1,
      title: 'TechVision Global Rebrand',
      category: 'branding',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      description: 'Complete brand overhaul for a Fortune 500 tech company, including visual identity, messaging, and market positioning.',
      results: ['40% increase in brand recognition', '25% boost in market share', '$15M revenue growth'],
      tags: ['Brand Strategy', 'Visual Identity', 'Market Research'],
      link: '#',
    },
    {
      id: 2,
      title: 'EcoLife Product Launch',
      category: 'campaign',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop',
      description: 'Multi-channel product launch campaign for sustainable lifestyle brand reaching millions globally.',
      results: ['10M+ impressions', '500K new customers', '300% ROI'],
      tags: ['Campaign Strategy', 'Social Media', 'Influencer Marketing'],
      link: '#',
    },
    {
      id: 3,
      title: 'FinanceHub Digital Transformation',
      category: 'digital',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      description: 'Digital marketing transformation for leading financial services provider.',
      results: ['200% increase in leads', '45% cost reduction', '89% customer satisfaction'],
      tags: ['Digital Strategy', 'Marketing Automation', 'Analytics'],
      link: '#',
    },
    {
      id: 4,
      title: 'Luxe Motors Brand Positioning',
      category: 'strategy',
      image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=400&fit=crop',
      description: 'Strategic repositioning of luxury automotive brand for new market segments.',
      results: ['30% new demographic reach', 'Premium pricing achieved', 'Industry award winner'],
      tags: ['Market Strategy', 'Positioning', 'Premium Branding'],
      link: '#',
    },
    {
      id: 5,
      title: 'HealthFirst Awareness Campaign',
      category: 'campaign',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
      description: 'National healthcare awareness campaign driving significant engagement and action.',
      results: ['50M reach', '2M sign-ups', 'Government recognition'],
      tags: ['Awareness Campaign', 'Public Relations', 'Content Marketing'],
      link: '#',
    },
    {
      id: 6,
      title: 'StyleHouse E-commerce Growth',
      category: 'digital',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
      description: 'E-commerce marketing strategy driving exponential growth for fashion retailer.',
      results: ['400% sales growth', '3M monthly visitors', '25% conversion rate'],
      tags: ['E-commerce', 'Performance Marketing', 'UX Strategy'],
      link: '#',
    },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter((project) => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.3 } },
  };

  return (
    <section id="portfolio" className="portfolio section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">
            Featured <span className="gold-text">Success Stories</span>
          </h2>
          <p className="section-subtitle">
            A showcase of transformative marketing campaigns and brand strategies
          </p>
        </motion.div>

        <motion.div
          className="portfolio-filters"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="portfolio-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="portfolio-card"
                variants={itemVariants}
                layout
                whileHover={{ y: -10 }}
              >
                <div className="portfolio-image">
                  <img src={project.image} alt={project.title} loading="lazy" />
                  <div className="portfolio-overlay">
                    <motion.button
                      className="portfolio-action"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setSelectedProject(project)}
                      aria-label="View project details"
                    >
                      <UilExpandArrows size={20} />
                    </motion.button>
                    <motion.a
                      href={project.link}
                      className="portfolio-action"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label="Open project link"
                    >
                      <UilExternalLinkAlt size={20} />
                    </motion.a>
                  </div>
                </div>
                <div className="portfolio-content">
                  <span className="portfolio-category">{project.category}</span>
                  <h3 className="portfolio-title">{project.title}</h3>
                  <p className="portfolio-description">{project.description}</p>
                  <div className="portfolio-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="portfolio-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="portfolio-modal"
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 50 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="modal-close"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close modal"
                >
                  <UilTimes size={24} />
                </button>
                <div className="modal-image">
                  <img src={selectedProject.image} alt={selectedProject.title} />
                </div>
                <div className="modal-content">
                  <span className="modal-category">{selectedProject.category}</span>
                  <h3 className="modal-title">{selectedProject.title}</h3>
                  <p className="modal-description">{selectedProject.description}</p>
                  
                  <div className="modal-results">
                    <h4>Key Results</h4>
                    <ul>
                      {selectedProject.results.map((result) => (
                        <li key={result}>{result}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="modal-tags">
                    {selectedProject.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>

                  <motion.a
                    href={selectedProject.link}
                    className="btn-primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Full Case Study
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;
