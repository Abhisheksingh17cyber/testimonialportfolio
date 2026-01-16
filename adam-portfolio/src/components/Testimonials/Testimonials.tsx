import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { UilCommentDots, UilStar, UilAngleLeftB, UilAngleRightB } from '@iconscout/react-unicons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import './Testimonials.css';

const Testimonials: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

        <motion.div
          className="testimonials-wrapper"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={{
              prevEl: '.swiper-button-prev-custom',
              nextEl: '.swiper-button-next-custom',
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <motion.div
                  className="testimonial-card"
                  whileHover={{ y: -10, boxShadow: '0 20px 60px rgba(212, 175, 55, 0.15)' }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="testimonial-quote">
                    <UilCommentDots size={40} className="quote-icon" />
                  </div>
                  
                  <p className="testimonial-text">{testimonial.text}</p>
                  
                  <div className="testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <UilStar key={i} size={20} className="star" />
                    ))}
                  </div>

                  <div className="testimonial-author">
                    <div className="author-image">
                      <img src={testimonial.image} alt={testimonial.name} loading="lazy" />
                    </div>
                    <div className="author-info">
                      <h4 className="author-name">{testimonial.name}</h4>
                      <p className="author-role">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="swiper-navigation">
            <button className="swiper-button-prev-custom" aria-label="Previous testimonial">
              <UilAngleLeftB size={24} />
            </button>
            <button className="swiper-button-next-custom" aria-label="Next testimonial">
              <UilAngleRightB size={24} />
            </button>
          </div>
        </motion.div>

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
