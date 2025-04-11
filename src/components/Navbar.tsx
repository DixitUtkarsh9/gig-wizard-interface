
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white py-4 px-4 md:px-8 lg:px-16 shadow-sm z-50 sticky top-0">
      <div className="container mx-auto flex justify-between items-center">
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
        <nav className="hidden md:flex gap-6 items-center">
          <Link to="/" className="font-medium hover:text-secondary transition-colors">
            Home
          </Link>
          <Link to="/marketplace" className="font-medium hover:text-secondary transition-colors">
            Marketplace
          </Link>
          <Link to="/ai-projects" className="font-medium hover:text-secondary transition-colors">
            AI Projects
          </Link>
          <Link to="/how-it-works" className="font-medium hover:text-secondary transition-colors">
            How It Work
          </Link>
          <Link to="/ai-academy" className="font-medium hover:text-secondary transition-colors">
            AI Academy
          </Link>
          <Link to="/blog" className="font-medium hover:text-secondary transition-colors">
            Blog
          </Link>
        </nav>

        {/* Auth buttons */}
        <div className="hidden md:flex gap-4">
          <Link to="/register">
            <Button variant="default" className="bg-primary text-white hover:bg-primary/90">
              REGISTER
            </Button>
          </Link>
          <Link to="/sign-in">
            <Button variant="outline" className="border-secondary bg-secondary text-primary hover:bg-secondary/90">
              SIGN IN
            </Button>
          </Link>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md p-4 flex flex-col gap-4 z-50">
            <Link to="/" className="font-medium py-2" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/marketplace" className="font-medium py-2" onClick={toggleMenu}>
              Marketplace
            </Link>
            <Link to="/ai-projects" className="font-medium py-2" onClick={toggleMenu}>
              AI Projects
            </Link>
            <Link to="/how-it-works" className="font-medium py-2" onClick={toggleMenu}>
              How It Work
            </Link>
            <Link to="/ai-academy" className="font-medium py-2" onClick={toggleMenu}>
              AI Academy
            </Link>
            <Link to="/blog" className="font-medium py-2" onClick={toggleMenu}>
              Blog
            </Link>
            <div className="flex flex-col gap-2 mt-4">
              <Link to="/register" onClick={toggleMenu}>
                <Button className="w-full bg-primary text-white hover:bg-primary/90">
                  REGISTER
                </Button>
              </Link>
              <Link to="/sign-in" onClick={toggleMenu}>
                <Button className="w-full border-secondary bg-secondary text-primary hover:bg-secondary/90" variant="outline">
                  SIGN IN
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
