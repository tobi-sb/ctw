'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 -z-10" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-5">
        <motion.div 
          className="absolute top-20 right-10 w-64 h-64 rounded-full bg-primary/20 blur-3xl"
          animate={{ 
            x: [0, 30, 0],
            y: [0, 50, 0],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 15,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-secondary/20 blur-3xl"
          animate={{ 
            x: [0, -40, 0],
            y: [0, -30, 0],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 18,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">Earn Passive Income</span> by Selling Hosting
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-dark mb-8">
              Turn each client into monthly passive income. Recruit other devs and earn up to 15% on their sales.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#join" className="gradient-bg text-white font-medium px-8 py-4 rounded-full text-center flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                Join us and start earning
                <FaArrowRight />
              </Link>
              <Link href="#how" className="bg-gray-light text-foreground font-medium px-8 py-4 rounded-full text-center hover:bg-gray/20 transition-colors">
                How does it work?
              </Link>
            </div>
            <div className="mt-8 flex items-center">
              <p className="text-sm text-gray-dark">
                <span className="font-bold">+500 developers</span> have already joined our network
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-background rounded-2xl p-6 card-shadow">
              <div className="absolute -top-3 -right-3 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full">
                70% commission
              </div>
              <h3 className="text-xl font-bold mb-4">Revenue Simulation</h3>
              <div className="space-y-4">
                <div className="bg-gray-light rounded-lg p-4 flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-dark">1 client</p>
                    <p className="font-bold">$10/month</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-dark">Your commission</p>
                    <p className="font-bold text-primary">$7/month</p>
                  </div>
                </div>
                <div className="bg-gray-light rounded-lg p-4 flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-dark">10 clients</p>
                    <p className="font-bold">$100/month</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-dark">Your commission</p>
                    <p className="font-bold text-primary">$70/month</p>
                  </div>
                </div>
                <div className="bg-gray-light rounded-lg p-4 flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-dark">50 clients</p>
                    <p className="font-bold">$500/month</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-dark">Your commission</p>
                    <p className="font-bold text-primary">$350/month</p>
                  </div>
                </div>
                <div className="bg-primary/10 rounded-lg p-4 border border-primary/30">
                  <p className="text-sm text-center mb-2">
                    + Commissions on your network&apos;s sales
                  </p>
                  <div className="flex justify-between text-xs text-gray-dark">
                    <span>10% on 1st level</span>
                    <span>5% on 2nd level</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 