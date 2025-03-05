'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaDesktop, FaShoppingCart, FaMobileAlt } from 'react-icons/fa';

const commissionRates = {
  static: 8,
  ecommerce: 32,
  mobile: 42
};

const EarningsCalculator = () => {
  // Client counts for each type - adjusted for >$700 monthly income
  const [staticClients, setStaticClients] = useState(25);
  const [ecommerceClients, setEcommerceClients] = useState(10);
  const [mobileClients, setMobileClients] = useState(4);
  
  const [recruits, setRecruits] = useState(5);
  const [recruitsStaticClients, setRecruitsStaticClients] = useState(10);
  const [recruitsEcommerceClients, setRecruitsEcommerceClients] = useState(4);
  const [recruitsMobileClients, setRecruitsMobileClients] = useState(2);
  
  const [secondLevelRecruits, setSecondLevelRecruits] = useState(3);
  const [secondLevelStaticClients, setSecondLevelStaticClients] = useState(6);
  const [secondLevelEcommerceClients, setSecondLevelEcommerceClients] = useState(2);
  const [secondLevelMobileClients, setSecondLevelMobileClients] = useState(1);
  
  const [totalEarnings, setTotalEarnings] = useState(0);
  const [directEarnings, setDirectEarnings] = useState(0);
  const [firstLevelEarnings, setFirstLevelEarnings] = useState(0);
  const [secondLevelEarnings, setSecondLevelEarnings] = useState(0);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    // Calculate direct earnings for each type
    const directStatic = staticClients * commissionRates.static * 0.7;
    const directEcommerce = ecommerceClients * commissionRates.ecommerce * 0.7;
    const directMobile = mobileClients * commissionRates.mobile * 0.7;
    const directTotal = directStatic + directEcommerce + directMobile;
    
    // Calculate first level earnings for each type
    const firstLevelStatic = recruits * recruitsStaticClients * commissionRates.static * 0.1;
    const firstLevelEcommerce = recruits * recruitsEcommerceClients * commissionRates.ecommerce * 0.1;
    const firstLevelMobile = recruits * recruitsMobileClients * commissionRates.mobile * 0.1;
    const firstLevelTotal = firstLevelStatic + firstLevelEcommerce + firstLevelMobile;
    
    // Calculate second level earnings for each type
    const secondLevelStatic = secondLevelRecruits * secondLevelStaticClients * commissionRates.static * 0.05;
    const secondLevelEcommerce = secondLevelRecruits * secondLevelEcommerceClients * commissionRates.ecommerce * 0.05;
    const secondLevelMobile = secondLevelRecruits * secondLevelMobileClients * commissionRates.mobile * 0.05;
    const secondLevelTotal = secondLevelStatic + secondLevelEcommerce + secondLevelMobile;
    
    setDirectEarnings(directTotal);
    setFirstLevelEarnings(firstLevelTotal);
    setSecondLevelEarnings(secondLevelTotal);
    setTotalEarnings(directTotal + firstLevelTotal + secondLevelTotal);
  }, [
    staticClients, ecommerceClients, mobileClients,
    recruits, recruitsStaticClients, recruitsEcommerceClients, recruitsMobileClients,
    secondLevelRecruits, secondLevelStaticClients, secondLevelEcommerceClients, secondLevelMobileClients
  ]);

  return (
    <section id="earnings" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">How Much</span> Can You Earn?
          </h2>
          <p className="text-xl text-gray-dark max-w-3xl mx-auto">
            Use our calculator to estimate your potential monthly income.
          </p>
        </motion.div>

        <div className="bg-background rounded-xl p-8 card-shadow max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-6">Adjust Parameters</h3>
              
              <div className="space-y-6">
                <div className="bg-gray-light p-6 rounded-lg mb-6">
                  <h4 className="font-medium mb-4">Your Direct Clients</h4>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                        <FaDesktop size={18} />
                      </div>
                      <div className="flex-grow">
                        <div className="flex justify-between mb-1">
                          <label className="text-sm font-medium text-gray-dark">
                            Static Websites <span className="text-primary font-bold">${commissionRates.static}/mo</span>
                          </label>
                          <span className="text-sm font-medium">{staticClients}</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={staticClients}
                          onChange={(e) => setStaticClients(parseInt(e.target.value))}
                          className="w-full h-2 bg-white rounded-lg appearance-none cursor-pointer"
                        />
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                        <FaShoppingCart size={18} />
                      </div>
                      <div className="flex-grow">
                        <div className="flex justify-between mb-1">
                          <label className="text-sm font-medium text-gray-dark">
                            E-commerce <span className="text-primary font-bold">${commissionRates.ecommerce}/mo</span>
                          </label>
                          <span className="text-sm font-medium">{ecommerceClients}</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="30"
                          value={ecommerceClients}
                          onChange={(e) => setEcommerceClients(parseInt(e.target.value))}
                          className="w-full h-2 bg-white rounded-lg appearance-none cursor-pointer"
                        />
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                        <FaMobileAlt size={18} />
                      </div>
                      <div className="flex-grow">
                        <div className="flex justify-between mb-1">
                          <label className="text-sm font-medium text-gray-dark">
                            Mobile Apps <span className="text-primary font-bold">${commissionRates.mobile}/mo</span>
                          </label>
                          <span className="text-sm font-medium">{mobileClients}</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="15"
                          value={mobileClients}
                          onChange={(e) => setMobileClients(parseInt(e.target.value))}
                          className="w-full h-2 bg-white rounded-lg appearance-none cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-light p-6 rounded-lg">
                  <h4 className="font-medium mb-4">Your Network</h4>
                  
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-1">
                        <label className="text-sm font-medium text-gray-dark">
                          Number of recruited developers (1st level)
                        </label>
                        <span className="text-sm font-medium">{recruits}</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="30"
                        value={recruits}
                        onChange={(e) => setRecruits(parseInt(e.target.value))}
                        className="w-full h-2 bg-white rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <label className="text-xs font-medium text-gray-dark">
                            Static/recruit
                          </label>
                          <span className="text-xs font-medium">{recruitsStaticClients}</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="30"
                          value={recruitsStaticClients}
                          onChange={(e) => setRecruitsStaticClients(parseInt(e.target.value))}
                          className="w-full h-2 bg-white rounded-lg appearance-none cursor-pointer"
                        />
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <label className="text-xs font-medium text-gray-dark">
                            Ecom/recruit
                          </label>
                          <span className="text-xs font-medium">{recruitsEcommerceClients}</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="15"
                          value={recruitsEcommerceClients}
                          onChange={(e) => setRecruitsEcommerceClients(parseInt(e.target.value))}
                          className="w-full h-2 bg-white rounded-lg appearance-none cursor-pointer"
                        />
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <label className="text-xs font-medium text-gray-dark">
                            Mobile/recruit
                          </label>
                          <span className="text-xs font-medium">{recruitsMobileClients}</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="8"
                          value={recruitsMobileClients}
                          onChange={(e) => setRecruitsMobileClients(parseInt(e.target.value))}
                          className="w-full h-2 bg-white rounded-lg appearance-none cursor-pointer"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <label className="text-sm font-medium text-gray-dark">
                          Developers recruited by your recruits (2nd level)
                        </label>
                        <span className="text-sm font-medium">{secondLevelRecruits}</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="20"
                        value={secondLevelRecruits}
                        onChange={(e) => setSecondLevelRecruits(parseInt(e.target.value))}
                        className="w-full h-2 bg-white rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <label className="text-xs font-medium text-gray-dark">
                            Static/2nd level
                          </label>
                          <span className="text-xs font-medium">{secondLevelStaticClients}</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="20"
                          value={secondLevelStaticClients}
                          onChange={(e) => setSecondLevelStaticClients(parseInt(e.target.value))}
                          className="w-full h-2 bg-white rounded-lg appearance-none cursor-pointer"
                        />
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <label className="text-xs font-medium text-gray-dark">
                            Ecom/2nd level
                          </label>
                          <span className="text-xs font-medium">{secondLevelEcommerceClients}</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="10"
                          value={secondLevelEcommerceClients}
                          onChange={(e) => setSecondLevelEcommerceClients(parseInt(e.target.value))}
                          className="w-full h-2 bg-white rounded-lg appearance-none cursor-pointer"
                        />
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <label className="text-xs font-medium text-gray-dark">
                            Mobile/2nd level
                          </label>
                          <span className="text-xs font-medium">{secondLevelMobileClients}</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="5"
                          value={secondLevelMobileClients}
                          onChange={(e) => setSecondLevelMobileClients(parseInt(e.target.value))}
                          className="w-full h-2 bg-white rounded-lg appearance-none cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col">
              <h3 className="text-xl font-bold mb-6">Your Estimated Monthly Income</h3>
              
              <div className="bg-gray-light rounded-xl p-6 mb-6">
                <div className="text-center">
                  <p className="text-gray-dark mb-2">Monthly Total</p>
                  <p className="text-4xl font-bold gradient-text">${totalEarnings.toFixed(0)}<span className="text-xl">/month</span></p>
                  <p className="text-sm text-gray mt-2">Recurring passive income</p>
                </div>
              </div>
              
              <div className="space-y-4 flex-grow">
                <div className="bg-gray-light rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium text-gray-dark">Direct Revenue</p>
                      <div className="flex flex-wrap gap-x-3 text-xs text-gray mt-1">
                        <span className="flex items-center gap-1">
                          <FaDesktop className="text-primary" size={12} /> 
                          {staticClients} × ${(commissionRates.static * 0.7).toFixed(0)}
                        </span>
                        <span className="flex items-center gap-1">
                          <FaShoppingCart className="text-primary" size={12} /> 
                          {ecommerceClients} × ${(commissionRates.ecommerce * 0.7).toFixed(0)}
                        </span>
                        <span className="flex items-center gap-1">
                          <FaMobileAlt className="text-primary" size={12} /> 
                          {mobileClients} × ${(commissionRates.mobile * 0.7).toFixed(0)}
                        </span>
                      </div>
                    </div>
                    <p className="font-bold">${directEarnings.toFixed(0)}</p>
                  </div>
                </div>
                
                <div className="bg-gray-light rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium text-gray-dark">1st Level Commissions</p>
                      <p className="text-xs text-gray mt-1">
                        {recruits} developers × 10% commission
                      </p>
                    </div>
                    <p className="font-bold">${firstLevelEarnings.toFixed(0)}</p>
                  </div>
                </div>
                
                <div className="bg-gray-light rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium text-gray-dark">2nd Level Commissions</p>
                      <p className="text-xs text-gray mt-1">
                        {secondLevelRecruits} developers × 5% commission
                      </p>
                    </div>
                    <p className="font-bold">${secondLevelEarnings.toFixed(0)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarningsCalculator; 