
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle navbar background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="flex items-center">
          <img 
            src="public/lovable-uploads/44c5d80f-1d2f-42a6-81e3-df6c22699575.png" 
            alt="Gignaati Logo" 
            className="h-10" 
          />
        </Link>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          <Link 
            to="/" 
            className={`font-medium text-sm hover:text-secondary transition-colors ${isActive('/') ? 'text-secondary' : 'text-gray-800'}`}
          >
            Home
          </Link>
          <Link 
            to="/marketplace" 
            className={`font-medium text-sm hover:text-secondary transition-colors ${isActive('/marketplace') ? 'text-secondary' : 'text-gray-800'}`}
          >
            Marketplace
          </Link>
          <Link 
            to="/ai-projects" 
            className={`font-medium text-sm hover:text-secondary transition-colors ${isActive('/ai-projects') ? 'text-secondary' : 'text-gray-800'}`}
          >
            AI Projects
          </Link>
          <div className="relative group">
            <button className="flex items-center font-medium text-sm text-gray-800 hover:text-secondary transition-colors">
              Resources <ChevronDown size={16} className="ml-1" />
            </button>
            <div className="absolute top-full left-0 bg-white shadow-md rounded-md p-3 min-w-48 hidden group-hover:block">
              <Link to="/how-it-works" className="block py-2 px-3 hover:bg-neutral rounded-md text-sm">
                How It Works
              </Link>
              <Link to="/ai-academy" className="block py-2 px-3 hover:bg-neutral rounded-md text-sm">
                AI Academy
              </Link>
              <Link to="/blog" className="block py-2 px-3 hover:bg-neutral rounded-md text-sm">
                Blog
              </Link>
            </div>
          </div>
        </nav>

        {/* Auth buttons */}
        <div className="hidden md:flex gap-4">
          <Link to="/sign-in">
            <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary/10">
              Log in
            </Button>
          </Link>
          <Link to="/register">
            <Button variant="default" className="bg-secondary text-white hover:bg-secondary/90">
              Sign Up
            </Button>
          </Link>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md p-6 flex flex-col gap-4 z-50">
            <Link to="/" className="font-medium py-2 text-gray-800" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/marketplace" className="font-medium py-2 text-gray-800" onClick={toggleMenu}>
              Marketplace
            </Link>
            <Link to="/ai-projects" className="font-medium py-2 text-gray-800" onClick={toggleMenu}>
              AI Projects
            </Link>
            <details className="group">
              <summary className="font-medium py-2 text-gray-800 cursor-pointer list-none flex justify-between items-center">
                Resources <ChevronDown size={18} className="transform group-open:rotate-180 transition-transform" />
              </summary>
              <div className="pl-4 pt-2">
                <Link to="/how-it-works" className="block py-2 text-gray-700" onClick={toggleMenu}>
                  How It Works
                </Link>
                <Link to="/ai-academy" className="block py-2 text-gray-700" onClick={toggleMenu}>
                  AI Academy
                </Link>
                <Link to="/blog" className="block py-2 text-gray-700" onClick={toggleMenu}>
                  Blog
                </Link>
              </div>
            </details>
            <div className="flex flex-col gap-2 mt-4">
              <Link to="/sign-in" onClick={toggleMenu}>
                <Button className="w-full border-secondary text-secondary hover:bg-secondary/10" variant="outline">
                  Log In
                </Button>
              </Link>
              <Link to="/register" onClick={toggleMenu}>
                <Button className="w-full bg-secondary text-white hover:bg-secondary/90">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
