'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

type Testimonial = {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
  stats: {
    clients: number;
    recruits: number;
    earnings: number;
  };
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "dev_ninja42",
    role: "Freelance Developer",
    content: "If I could, I'd blow the guy who founded this site - absolute cash machine, went from struggling to making $500/mo while I sleep!",
    avatar: "DN",
    stats: {
      clients: 15,
      recruits: 2,
      earnings: 500
    }
  },
  {
    id: 2,
    name: "codequeen_87",
    role: "Web Designer",
    content: "Started with just 3 clients, now my network generates more income than my day job - the system actually works if you put in the effort.",
    avatar: "CQ",
    stats: {
      clients: 8,
      recruits: 5,
      earnings: 750
    }
  },
  {
    id: 3,
    name: "stack_overflow_addict",
    role: "Full Stack Developer",
    content: "Holy sh*t this actually works! My girlfriend thought I was dealing drugs because of the sudden income boost - making serious bank now!",
    avatar: "SA",
    stats: {
      clients: 25,
      recruits: 8,
      earnings: 1200
    }
  },
  {
    id: 4,
    name: "midnight_coder",
    content: "The platform handles all technical aspects while I focus on clients - created a sustainable income stream that grows month after month.",
    role: "WordPress Developer",
    avatar: "MC",
    stats: {
      clients: 12,
      recruits: 3,
      earnings: 650
    }
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="bg-background rounded-xl p-8 card-shadow h-full flex flex-col">
      <div className="flex items-start mb-6">
        <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white font-bold mr-4">
          {testimonial.avatar}
        </div>
        <div>
          <h4 className="font-bold">{testimonial.name}</h4>
          <p className="text-sm text-gray-dark">{testimonial.role}</p>
        </div>
        <FaQuoteLeft className="ml-auto text-primary/20 text-3xl" />
      </div>
      
      <p className="text-gray-dark mb-6 flex-grow">{testimonial.content}</p>
      
      <div className="grid grid-cols-3 gap-2 bg-gray-light rounded-lg p-4">
        <div className="text-center">
          <p className="text-xs text-gray-dark">Clients</p>
          <p className="font-bold text-primary">{testimonial.stats.clients}</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-gray-dark">Recruits</p>
          <p className="font-bold text-primary">{testimonial.stats.recruits}</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-gray-dark">Monthly Income</p>
          <p className="font-bold text-primary">${testimonial.stats.earnings}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What <span className="gradient-text">Our Developers</span> Say
          </h2>
          <p className="text-xl text-gray-dark max-w-3xl mx-auto">
            Discover how our members are transforming their careers and generating passive income.
          </p>
        </motion.div>

        {/* Desktop View */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: testimonial.id * 0.1 }}
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="relative">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <TestimonialCard testimonial={testimonials[currentIndex]} />
            </motion.div>
            
            <div className="flex justify-center mt-6 gap-2">
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-gray-light flex items-center justify-center text-gray-dark hover:bg-primary hover:text-white transition-colors"
              >
                <FaChevronLeft />
              </button>
              <div className="flex gap-1 items-center">
                {testimonials.map((_, index) => (
                  <div 
                    key={index}
                    className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-primary' : 'bg-gray'}`}
                  />
                ))}
              </div>
              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-gray-light flex items-center justify-center text-gray-dark hover:bg-primary hover:text-white transition-colors"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl font-bold mb-2">Ready to join our developer community?</p>
          <a href="#join" className="inline-block gradient-bg text-white font-medium px-8 py-4 rounded-full hover:opacity-90 transition-opacity mt-4">
            Start your journey now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 