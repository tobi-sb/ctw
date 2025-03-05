'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaArrowRight, FaCheck } from 'react-icons/fa';

const JoinCTA = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log({ name, email });
    setSubmitted(true);
  };

  return (
    <section id="join" className="py-20 bg-gray-light">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-background rounded-2xl overflow-hidden card-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Join <span className="gradient-text">Devs Empire</span>
                </h2>
                <p className="text-xl text-gray-dark mb-8">
                  Start generating passive income today and build your empire.
                </p>
                
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-dark mb-1">
                        Your name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg bg-gray-light focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-dark mb-1">
                        Your email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg bg-gray-light focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full gradient-bg text-white font-medium px-6 py-4 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                    >
                      Join now
                      <FaArrowRight />
                    </button>
                    <p className="text-xs text-gray text-center mt-4">
                      By signing up, you agree to our terms of use and privacy policy.
                    </p>
                  </form>
                ) : (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaCheck className="text-green-500 text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold text-green-800 mb-2">Request sent successfully!</h3>
                    <p className="text-green-700">
                      We have received your request. Our team will contact you very soon to discuss the next steps.
                    </p>
                  </div>
                )}
              </div>
              
              <div className="bg-primary/10 p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-6">Why join us?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full gradient-bg flex-shrink-0 flex items-center justify-center mt-0.5">
                      <FaCheck className="text-white text-xs" />
                    </div>
                    <p>70% commission on each hosted client</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full gradient-bg flex-shrink-0 flex items-center justify-center mt-0.5">
                      <FaCheck className="text-white text-xs" />
                    </div>
                    <p>10% commission on the revenue from developers you recruit</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full gradient-bg flex-shrink-0 flex items-center justify-center mt-0.5">
                      <FaCheck className="text-white text-xs" />
                    </div>
                    <p>5% commission on developers recruited by your recruits</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full gradient-bg flex-shrink-0 flex items-center justify-center mt-0.5">
                      <FaCheck className="text-white text-xs" />
                    </div>
                    <p>100% passive and recurring income</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full gradient-bg flex-shrink-0 flex items-center justify-center mt-0.5">
                      <FaCheck className="text-white text-xs" />
                    </div>
                    <p>No technical management - we take care of everything</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full gradient-bg flex-shrink-0 flex items-center justify-center mt-0.5">
                      <FaCheck className="text-white text-xs" />
                    </div>
                    <p>Automatic and secure payments</p>
                  </li>
                </ul>
                
                <div className="mt-8 p-4 bg-background rounded-lg">
                  <p className="text-center text-sm">
                    <span className="font-bold">Already over 500 developers</span> have joined our network and generate passive income every month.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinCTA; 