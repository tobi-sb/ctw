'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaArrowRight, FaCheck, FaGithub, FaGlobe, FaExclamationTriangle, FaDiscord } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

// Identifiants EmailJS fournis par l'utilisateur
const EMAILJS_SERVICE_ID = 'service_h9estjs'; 
const EMAILJS_PUBLIC_KEY = 'xxNXFucuqIoyHW39x';

// Template ID fourni par l'utilisateur
const EMAILJS_TEMPLATE_ID = 'template_0dv8r19';

const JoinCTA = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    portfolio: '',
    github: '',
    discord: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    // Clear error when user starts typing again
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Préparation des paramètres pour l'email
      const templateParams = {
        from_name: formData.name,
        reply_to: formData.email,
        to_email: 'tobibelaw@gmail.com',
        subject: 'New Contact Form Submission - Devs Empire',
        message: formData.message,
        portfolio: formData.portfolio || 'Not provided',
        github: formData.github || 'Not provided',
        discord: formData.discord || 'Not provided',
        // Ajout d'un champ contenant toutes les informations formatées
        full_message: `
Name: ${formData.name}
Email: ${formData.email}
Portfolio: ${formData.portfolio || 'Not provided'}
GitHub: ${formData.github || 'Not provided'}
Discord: ${formData.discord || 'Not provided'}

Message:
${formData.message || 'No message provided'}
        `
      };
      
      console.log('Sending email with params:', templateParams);
      
      // Envoi direct via EmailJS avec la méthode send et le template ID
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      
      console.log('Email sent successfully', result.text);
      setSubmitted(true);
    } catch (error: unknown) {
      console.error('Error submitting form:', error);
      
      // Message d'erreur spécifique pour le template ID manquant
      if (typeof error === 'object' && error !== null && 'text' in error && 
          (error as { text: string }).text.includes('template ID')) {
        setError('Template ID not found. Please create a template in EmailJS and update the EMAILJS_TEMPLATE_ID constant.');
      } else {
        setError(
          typeof error === 'object' && error !== null && 'text' in error
            ? (error as { text: string }).text
            : 'Failed to submit form. Please try again later.'
        );
      }
    } finally {
      setIsSubmitting(false);
    }
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
                  <>
                    {error && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 text-center">
                        <div className="flex items-center justify-center gap-2 text-red-600 mb-2">
                          <FaExclamationTriangle />
                          <span className="font-bold">Error</span>
                        </div>
                        <p className="text-red-700">{error}</p>
                      </div>
                    )}
                    
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-dark mb-1">
                          Your name
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={formData.name}
                          onChange={handleChange}
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
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-gray-light focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="portfolio" className="block text-sm font-medium text-gray-dark mb-1">
                          Portfolio website
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FaGlobe className="text-gray" />
                          </div>
                          <input
                            type="url"
                            id="portfolio"
                            value={formData.portfolio}
                            onChange={handleChange}
                            className="w-full pl-10 px-4 py-3 rounded-lg bg-gray-light focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="https://yourportfolio.com"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="github" className="block text-sm font-medium text-gray-dark mb-1">
                            GitHub
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <FaGithub className="text-gray" />
                            </div>
                            <input
                              type="text"
                              id="github"
                              value={formData.github}
                              onChange={handleChange}
                              className="w-full pl-10 px-4 py-3 rounded-lg bg-gray-light focus:outline-none focus:ring-2 focus:ring-primary"
                              placeholder="username"
                            />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="discord" className="block text-sm font-medium text-gray-dark mb-1">
                            Discord
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <FaDiscord className="text-gray" />
                            </div>
                            <input
                              type="text"
                              id="discord"
                              value={formData.discord}
                              onChange={handleChange}
                              className="w-full pl-10 px-4 py-3 rounded-lg bg-gray-light focus:outline-none focus:ring-2 focus:ring-primary"
                              placeholder="username"
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-dark mb-1">
                          Additional information
                        </label>
                        <textarea
                          id="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={3}
                          className="w-full px-4 py-3 rounded-lg bg-gray-light focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Tell us a bit about yourself and your experience..."
                        />
                      </div>
                      
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full gradient-bg text-white font-medium px-6 py-4 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-70"
                      >
                        {isSubmitting ? 'Submitting...' : 'Join now'}
                        {!isSubmitting && <FaArrowRight />}
                      </button>
                      <p className="text-xs text-gray text-center mt-4">
                        By signing up, you agree to our terms of use and privacy policy.
                      </p>
                    </form>
                  </>
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