'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLaptopCode, FaRobot, FaTools, FaChartLine } from 'react-icons/fa';

interface ToolCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ToolCard: React.FC<ToolCardProps> = ({ icon, title, description, delay }) => {
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
      <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center mb-4 text-white">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-dark">{description}</p>
    </motion.div>
  );
};

export default function ToolsWeProvide() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="tools" className="py-20 bg-gray-light">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Tools</span> We Provide
          </h2>
          <p className="text-xl text-gray-dark max-w-3xl mx-auto">
            Exclusive tools to help you deliver more value to your clients and increase your earnings.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ToolCard
            icon={<FaLaptopCode />}
            title="Free 5-Page Websites"
            description="We create free static 5-page websites, SEO optimized for FREE for any of your clients."
            delay={0.1}
          />
          <ToolCard
            icon={<FaRobot />}
            title="Massive Scraping Tools"
            description="Access powerful data scraping tools to gather valuable information for your projects and clients."
            delay={0.2}
          />
          <ToolCard
            icon={<FaTools />}
            title="Developer Toolkit"
            description="Complete suite of development tools to streamline your workflow and increase productivity."
            delay={0.3}
          />
          <ToolCard
            icon={<FaChartLine />}
            title="Analytics Dashboard"
            description="Track your referrals and earnings with our comprehensive analytics dashboard."
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
} 