
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Robot, Code, Database, LineChart, FileText, MessageSquare, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import GigCard from '@/components/GigCard';
import CategoryCard from '@/components/CategoryCard';

const Home = () => {
  // Sample featured gigs data
  const featuredGigs = [
    {
      id: '1',
      title: 'AI Agent For Insurance Marketplace Automation',
      imageUrl: 'https://placehold.co/600x400?text=Insurance+AI',
      price: 200,
      priceType: 'fixed' as const,
      authorName: 'Mohd Riyaz',
      featured: true,
      categories: ['API Integration', 'Automation']
    },
    {
      id: '2',
      title: 'AI-Powered Virtual Health Assistant',
      imageUrl: 'https://placehold.co/600x400?text=Health+AI',
      price: 150,
      priceType: 'hourly' as const,
      authorName: 'Mohd Riyaz',
      featured: false,
      categories: ['NLP', 'Healthcare']
    },
    {
      id: '3',
      title: 'Social Media Flix Agent',
      imageUrl: 'https://placehold.co/600x400?text=Social+Media+AI',
      price: 100,
      priceType: 'hourly' as const,
      authorName: 'Tanu',
      featured: true,
      categories: ['Social Media', 'Content']
    }
  ];

  // Sample categories
  const categories = [
    { title: 'AI Agents', icon: <Robot size={32} />, link: '/marketplace?category=agents' },
    { title: 'Development', icon: <Code size={32} />, link: '/marketplace?category=development' },
    { title: 'Data & Analytics', icon: <Database size={32} />, link: '/marketplace?category=data' },
    { title: 'Business', icon: <LineChart size={32} />, link: '/marketplace?category=business' },
    { title: 'Content Creation', icon: <FileText size={32} />, link: '/marketplace?category=content' },
    { title: 'Customer Support', icon: <MessageSquare size={32} />, link: '/marketplace?category=support' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section relative overflow-hidden">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="z-10 animate-fade-in">
            <span className="uppercase tracking-wider text-secondary font-medium mb-2 block">GET STARTED</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Marketplace for Verified AI Gigs
            </h1>
            <p className="text-lg mb-8 text-gray-100">
              Welcome to Gignaati, where top AI innovators showcase AI Gigs such as AI Agents, Trained LLMs, and offer ready-to-deploy or custom AI solutions. You can browse gigs & customize with integrations that fits your business needs.
            </p>
            
            {/* Search Box */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="relative flex-grow">
                <input 
                  type="text" 
                  placeholder="What are you looking for?" 
                  className="pl-4 pr-10 py-3 rounded-md w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-secondary"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <Search size={20} className="text-gray-500" />
                </div>
              </div>
              <Button className="bg-secondary text-black hover:bg-secondary/90 py-3 px-6">
                Search
              </Button>
            </div>
            
            {/* Trending Tags */}
            <div className="flex flex-wrap gap-3 items-center">
              <span className="text-gray-200">Trending AI Gigs:</span>
              <Link to="/marketplace?tag=ai-recruiter" className="badge bg-white/20 hover:bg-white/30 transition-colors">
                AI Recruiter
              </Link>
              <Link to="/marketplace?tag=ai-assistant" className="badge bg-white/20 hover:bg-white/30 transition-colors">
                AI Assistant
              </Link>
              <Link to="/marketplace?tag=ai-writer" className="badge bg-white/20 hover:bg-white/30 transition-colors">
                AI Ad Writer
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="hidden md:block relative z-10 animate-slide-in">
            <img 
              src="public/lovable-uploads/a174acaa-868d-42ee-80d9-373303ddf9d9.png" 
              alt="AI Agent Marketplace" 
              className="max-w-full rounded-lg"
            />
          </div>
        </div>
        
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-primary to-transparent"></div>
      </section>

      {/* Featured Gigs Section */}
      <section className="section-padding bg-neutral">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured AI Gigs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the most popular and highly-rated AI gigs from our marketplace. These solutions are ready to deploy and customize for your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredGigs.map(gig => (
              <GigCard key={gig.id} {...gig} />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/marketplace">
              <Button className="bg-primary text-white hover:bg-primary/90">
                View All Gigs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Browse By Category</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find the perfect AI solution by exploring our categories. From AI agents to custom development, we have experts in every field.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <CategoryCard key={index} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Getting started with Gignaati is easy. Follow these simple steps to find and book the perfect AI solution for your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-secondary text-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Browse</h3>
              <p className="text-gray-300">
                Explore our marketplace to find AI gigs that match your requirements. Filter by category, price, and ratings.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-secondary text-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Preview</h3>
              <p className="text-gray-300">
                Test the AI solution with our live demo feature. See exactly how it works before making a purchase.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-secondary text-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Book</h3>
              <p className="text-gray-300">
                Choose the package that suits your needs and book the AI gig. Our experts will help with implementation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Gignaati</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to providing the highest quality AI solutions with security, verification, and moderation at every step.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg shadow-sm">
              <div className="text-primary mb-4">
                <Shield size={48} className="mx-auto" />
              </div>
              <h3 className="text-xl font-bold mb-2">Secure Transactions</h3>
              <p className="text-gray-600">
                All payments are processed securely. Your funds are released only when you're satisfied with the delivery.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg shadow-sm">
              <div className="text-primary mb-4">
                <Robot size={48} className="mx-auto" />
              </div>
              <h3 className="text-xl font-bold mb-2">Verified AI Experts</h3>
              <p className="text-gray-600">
                All our AI experts are thoroughly vetted and verified to ensure they have the skills and experience they claim.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg shadow-sm">
              <div className="text-primary mb-4">
                <MessageSquare size={48} className="mx-auto" />
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Our support team is always available to help with any questions or issues you might have with your AI solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-primary">Start Building or Hiring with AI Today</h2>
          <p className="text-gray-800 mb-8 max-w-2xl mx-auto">
            Whether you're looking to hire AI experts or offer your AI services, Gignaati makes it easy to connect and collaborate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/marketplace">
              <Button className="bg-primary text-white hover:bg-primary/90 px-8 py-3">
                Browse AI Gigs
              </Button>
            </Link>
            <Link to="/register?as=freelancer">
              <Button variant="outline" className="bg-transparent border-primary text-primary hover:bg-primary/10 px-8 py-3">
                Become an AI Expert
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Partner logos */}
      <section className="section-padding bg-white py-12">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-xl font-medium text-gray-600">Trusted by leading AI platforms</h3>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <img src="https://placehold.co/120x40?text=make" alt="Make AI" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
            <img src="https://placehold.co/120x40?text=n8n.io" alt="n8n.io" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
            <img src="https://placehold.co/120x40?text=OpenAI" alt="OpenAI" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
            <img src="https://placehold.co/120x40?text=Deepseek" alt="Deepseek" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
            <img src="https://placehold.co/120x40?text=Mistral+AI" alt="Mistral AI" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
