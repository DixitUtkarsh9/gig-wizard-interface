
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1 - Logo and About */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img 
                src="public/lovable-uploads/44c5d80f-1d2f-42a6-81e3-df6c22699575.png" 
                alt="Gignaati Logo" 
                className="h-10 invert" 
              />
            </Link>
            <p className="text-gray-300 mb-4">
              The marketplace for AI agents and services. Connect with AI experts and find the perfect solution for your needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-secondary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/marketplace" className="text-gray-300 hover:text-secondary transition-colors">Marketplace</Link></li>
              <li><Link to="/ai-projects" className="text-gray-300 hover:text-secondary transition-colors">AI Projects</Link></li>
              <li><Link to="/how-it-works" className="text-gray-300 hover:text-secondary transition-colors">How It Works</Link></li>
              <li><Link to="/ai-academy" className="text-gray-300 hover:text-secondary transition-colors">AI Academy</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-secondary transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Column 3 - Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors">API References</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors">Community</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors">Security</a></li>
            </ul>
          </div>

          {/* Column 4 - Legal */}
          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors">GDPR</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 mt-6 text-center md:flex md:justify-between md:text-left">
          <p className="text-gray-400">© {new Date().getFullYear()} Gignaati. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-secondary transition-colors mx-2">Terms</a>
            <a href="#" className="text-gray-400 hover:text-secondary transition-colors mx-2">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-secondary transition-colors mx-2">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
