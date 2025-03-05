'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold gradient-text">Devs Empire</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#why" className="text-foreground hover:text-primary transition-colors">
              Why Join Us
            </Link>
            <Link href="#earnings" className="text-foreground hover:text-primary transition-colors">
              Your Earnings
            </Link>
            <Link href="#how" className="text-foreground hover:text-primary transition-colors">
              How It Works
            </Link>
            <Link href="#testimonials" className="text-foreground hover:text-primary transition-colors">
              Testimonials
            </Link>
            <Link href="#join" className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full transition-colors">
              Join Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-md"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <Link href="#why" className="text-foreground hover:text-primary transition-colors py-2" onClick={() => setIsOpen(false)}>
                Why Join Us
              </Link>
              <Link href="#earnings" className="text-foreground hover:text-primary transition-colors py-2" onClick={() => setIsOpen(false)}>
                Your Earnings
              </Link>
              <Link href="#how" className="text-foreground hover:text-primary transition-colors py-2" onClick={() => setIsOpen(false)}>
                How It Works
              </Link>
              <Link href="#testimonials" className="text-foreground hover:text-primary transition-colors py-2" onClick={() => setIsOpen(false)}>
                Testimonials
              </Link>
              <Link href="#join" className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full transition-colors text-center" onClick={() => setIsOpen(false)}>
                Join Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar; 