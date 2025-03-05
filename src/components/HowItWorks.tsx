'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaUserPlus, FaLink, FaMoneyBillWave, FaUsers } from 'react-icons/fa';

const Step = ({ 
  number, 
  title, 
  description, 
  icon, 
  delay 
}: { 
  number: number; 
  title: string; 
  description: string; 
  icon: React.ReactNode;
  delay: number;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
      className="relative"
    >
      {/* Connecting line */}
      {number < 4 && (
        <div className="absolute top-16 left-10 w-1 h-[calc(100%-4rem)] bg-gray-light md:left-1/2 md:-ml-0.5"></div>
      )}
      
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="relative z-10 flex items-center justify-center w-20 h-20 rounded-full gradient-bg text-white text-2xl font-bold">
          {icon}
        </div>
        
        <div className="md:w-[calc(100%-5rem)]">
          <div className="bg-background rounded-xl p-6 card-shadow">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded-full">
                Step {number}
              </span>
              <h3 className="text-xl font-bold">{title}</h3>
            </div>
            <p className="text-gray-dark">{description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const HowItWorks = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [statementRef, statementInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="how" className="py-20 bg-gray-light">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">How</span> It Works?
          </h2>
          <p className="text-xl text-gray-dark max-w-3xl mx-auto">
            A simple 4-step process to start generating passive income.
          </p>
        </motion.div>

        <div className="space-y-16 max-w-3xl mx-auto">
          <Step
            number={1}
            title="Quick Registration"
            description="Create your account in minutes. We verify your profile and give you access to your personal dashboard."
            icon={<FaUserPlus />}
            delay={0.1}
          />
          
          <Step
            number={2}
            title="Sell Our Hosting Services"
            description="Use your unique link to sell our hosting services to your clients. We take care of all the technical aspects."
            icon={<FaLink />}
            delay={0.2}
          />
          
          <Step
            number={3}
            title="Receive Your Commissions"
            description="Each month, you automatically receive 70% of the amount paid by your clients. Payments are made directly to your account."
            icon={<FaMoneyBillWave />}
            delay={0.3}
          />
          
          <Step
            number={4}
            title="Grow Your Network"
            description="Recruit other developers and earn 10% on their sales and 5% on the sales of developers they recruit."
            icon={<FaUsers />}
            delay={0.4}
          />
        </div>

        <div className="mt-16 bg-background rounded-xl p-8 card-shadow max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-center">Secure and Automated Payments</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="font-bold mb-2">Secure Payments</h4>
              <p className="text-sm text-gray-dark">Integration with Stripe for secure and transparent payments.</p>
            </div>
            
            <div>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-bold mb-2">Instant Payments</h4>
              <p className="text-sm text-gray-dark">Receive your commissions as soon as you reach $50 in earnings.</p>
            </div>
            
            <div>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h4 className="font-bold mb-2">Detailed Tracking</h4>
              <p className="text-sm text-gray-dark">Track your income and performance in real-time in your dashboard.</p>
            </div>
          </div>
        </div>
        
        <motion.div
          ref={statementRef}
          initial={{ opacity: 0, y: 30 }}
          animate={statementInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl md:text-5xl font-bold gradient-text py-6 px-8 inline-block relative">
            The game is rigged, and we&apos;re here to break it.
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-primary"></div>
          </h3>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks; 