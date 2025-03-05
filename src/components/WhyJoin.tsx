'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaSearch, FaMoneyBillWave, FaServer, FaUsers } from 'react-icons/fa';

const FeatureCard = ({ icon, title, description, delay }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
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
      className="bg-background rounded-xl p-6 card-shadow"
    >
      <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-dark">{description}</p>
    </motion.div>
  );
};

const WhyJoin = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="why" className="py-20 bg-gray-light">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why This Is a <span className="gradient-text">Unique Opportunity</span>?
          </h2>
          <p className="text-xl text-gray-dark max-w-3xl mx-auto">
            Get paid for something you already doing for free, recommend hosting platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            icon={<FaSearch className="text-white text-xl" />}
            title="No More Constant Search"
            description="No need to constantly look for new clients. Each client becomes a source of recurring revenue."
            delay={0.1}
          />
          <FeatureCard
            icon={<FaMoneyBillWave className="text-white text-xl" />}
            title="Financial Stability"
            description="Create a predictable monthly income that grows with each new client you add."
            delay={0.2}
          />
          <FeatureCard
            icon={<FaServer className="text-white text-xl" />}
            title="Zero Technical Management"
            description="We handle hosting, maintenance, and support. You focus solely on sales."
            delay={0.3}
          />
          <FeatureCard
            icon={<FaUsers className="text-white text-xl" />}
            title="Leverage Effect"
            description="Recruit other developers and earn commissions on their sales, multiplying your income."
            delay={0.4}
          />
        </div>

        <div className="mt-16 bg-background rounded-xl p-8 card-shadow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">The Freelance Developer Problem</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">✗</span>
                  <p>Constant search for new projects and clients</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">✗</span>
                  <p>Irregular and unpredictable income</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">✗</span>
                  <p>Time-consuming technical management and customer support</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">✗</span>
                  <p>Difficulty scaling income without working more hours</p>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Solution</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <p>70% commission on each monthly subscription</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <p>Passive and recurring monthly income</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <p>We manage all the technical infrastructure</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <p>Commissions on 2 levels of recruitment (10% and 5%)</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoin; 