import Link from 'next/link';
import { FaTwitter, FaLinkedin, FaGithub, FaDiscord } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background py-12 border-t border-gray-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold gradient-text">Devs Empire</span>
            </Link>
            <p className="mt-4 text-gray-dark">
              Turn each client into monthly passive income and build your empire.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-dark hover:text-primary transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-dark hover:text-primary transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-dark hover:text-primary transition-colors">
                <FaGithub size={20} />
              </a>
              <a href="#" className="text-gray-dark hover:text-primary transition-colors">
                <FaDiscord size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#why" className="text-gray-dark hover:text-primary transition-colors">
                  Why Join Us
                </Link>
              </li>
              <li>
                <Link href="#earnings" className="text-gray-dark hover:text-primary transition-colors">
                  Revenue Simulator
                </Link>
              </li>
              <li>
                <Link href="#how" className="text-gray-dark hover:text-primary transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-gray-dark hover:text-primary transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#join" className="text-gray-dark hover:text-primary transition-colors">
                  Join Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-dark hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-dark hover:text-primary transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-dark hover:text-primary transition-colors">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-dark hover:text-primary transition-colors">
                  Webinars
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-dark hover:text-primary transition-colors">
                  API Documentation
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-dark hover:text-primary transition-colors">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-dark hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-dark hover:text-primary transition-colors">
                  Legal Notice
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-dark hover:text-primary transition-colors">
                  Cookies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-dark hover:text-primary transition-colors">
                  GDPR
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-light mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-dark text-sm">
            &copy; {currentYear} Devs Empire. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-dark hover:text-primary transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 