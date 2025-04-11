
import React, { useState } from 'react';
import { Search, Filter, Heart, ChevronDown, Sliders, ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Marketplace = () => {
  const [priceRange, setPriceRange] = useState(500);
  const [viewMode, setViewMode] = useState('grid');
  
  const handlePriceChange = (e) => {
    setPriceRange(e.target.value);
  };
  
  return (
    <>
      {/* Hero Banner */}
      <section className="bg-primary pt-32 pb-20 px-4 text-white relative">
        <div className="container mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">AI Agents Marketplace</h1>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Find and hire top AI agents for your business needs. Browse through our marketplace of verified AI solutions.
            </p>
            <div className="flex items-center justify-center">
              <span className="text-sm">Home</span>
              <span className="mx-2">/</span>
              <span className="text-sm text-secondary">Marketplace</span>
            </div>
          </div>
        </div>
        
        {/* Abstract shapes for modern look */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-neutral to-transparent"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/5 to-transparent"></div>
      </section>
      
      {/* Search Bar */}
      <section className="py-8 px-4 bg-neutral">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row gap-4 items-stretch">
            <div className="relative flex-grow">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <Search size={18} className="text-gray-500" />
              </div>
              <Input 
                type="text" 
                placeholder="Search for AI agents, use cases, or keywords" 
                className="pl-12 pr-4 py-6 h-auto rounded-lg w-full text-gray-800 focus:ring-2 focus:ring-secondary"
              />
            </div>
            <div className="w-full md:w-48">
              <select className="h-full px-4 py-3 rounded-lg w-full text-gray-800 focus:ring-2 focus:ring-secondary border border-input bg-white">
                <option value="">All Categories</option>
                <option value="ai-agents">AI Agents</option>
                <option value="development">Development</option>
                <option value="data">Data & Analytics</option>
              </select>
            </div>
            <Button className="bg-secondary text-white hover:bg-secondary/90 py-3 px-6 h-full rounded-lg">
              Search
            </Button>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar - Filters */}
            <div className="lg:w-1/4">
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-bold text-lg">Filters</h3>
                    <button className="text-secondary text-sm hover:underline">
                      Reset
                    </button>
                  </div>
                  
                  {/* Keyword Filter */}
                  <div className="mb-6">
                    <Label className="font-medium mb-2 block">Keywords</Label>
                    <Input 
                      type="text" 
                      placeholder="e.g. chatbot, data analysis" 
                      className="w-full"
                    />
                  </div>
                  
                  {/* Category Filter */}
                  <div className="mb-6">
                    <h4 className="font-medium mb-4">Categories</h4>
                    <div className="space-y-2">
                      {['All Categories', 'Customer Service', 'Data Analysis', 'Content Creation', 'Sales & Marketing', 'HR & Recruiting'].map((category) => (
                        <label key={category} className="flex items-center">
                          <input type="checkbox" className="rounded text-secondary mr-2" />
                          <span className="text-gray-700">{category}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  {/* Price Range Filter */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <Label className="font-medium">Price Range</Label>
                      <span className="text-secondary font-medium">${priceRange}</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="1000"
                      step="10"
                      value={priceRange}
                      onChange={handlePriceChange}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-secondary"
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-2">
                      <span>$0</span>
                      <span>$1000+</span>
                    </div>
                  </div>
                  
                  {/* Rating Filter */}
                  <div className="mb-6">
                    <h4 className="font-medium mb-4">Rating</h4>
                    <div className="space-y-2">
                      {['4★ & up', '3★ & up', '2★ & up', '1★ & up'].map((rating) => (
                        <label key={rating} className="flex items-center">
                          <input type="radio" name="rating" className="text-secondary mr-2" />
                          <span className="text-gray-700">{rating}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full bg-secondary/10 text-secondary hover:bg-secondary/20 font-medium">
                    Apply Filters
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            {/* Main Content - Results */}
            <div className="lg:w-3/4">
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6 border">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <h3 className="font-bold">24 AI Agents Found</h3>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border rounded-md">
                      <button 
                        className={`p-2 ${viewMode === 'grid' ? 'bg-neutral' : ''}`}
                        onClick={() => setViewMode('grid')}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                      </button>
                      <button 
                        className={`p-2 ${viewMode === 'list' ? 'bg-neutral' : ''}`}
                        onClick={() => setViewMode('list')}
                      >
                        <Sliders size={20} />
                      </button>
                    </div>
                    <div className="relative">
                      <select className="appearance-none border rounded-md py-2 px-4 pr-8 focus:outline-none focus:ring-2 focus:ring-secondary">
                        <option>Newest</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                        <option>Popular</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                        <ChevronDown size={16} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'flex flex-col gap-4'}>
                {[1, 2, 3, 4, 5, 6].map(item => (
                  <Card key={item} className={`overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${viewMode === 'list' ? 'flex flex-row' : ''}`}>
                    <div className={`relative ${viewMode === 'list' ? 'w-1/3' : ''}`}>
                      <img 
                        src={`https://placehold.co/600x400/5865F2/ffffff?text=AI+Agent+${item}`}
                        alt={`AI Agent ${item}`}
                        className={`w-full ${viewMode === 'grid' ? 'h-48' : 'h-full'} object-cover`}
                      />
                      <span className="absolute top-2 right-2 px-2 py-1 bg-secondary text-xs font-medium rounded text-white">
                        Featured
                      </span>
                      <button className="absolute top-2 left-2 p-1.5 bg-white rounded-full hover:bg-gray-100">
                        <Heart size={16} className="text-gray-600 hover:text-secondary" />
                      </button>
                    </div>
                    
                    <CardContent className={`p-4 ${viewMode === 'list' ? 'w-2/3' : ''}`}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <img src="https://placehold.co/40x40" alt="Profile" className="w-6 h-6 rounded-full mr-2" />
                          <span className="text-xs text-gray-600">@aicreator</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-yellow-500">★★★★★</span>
                          <span className="text-xs text-gray-600 ml-1">(5.0)</span>
                        </div>
                      </div>
                      
                      <h3 className="font-bold text-lg mb-2 line-clamp-1">AI Customer Service Agent</h3>
                      
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        This AI agent handles customer inquiries, processes returns, and manages support tickets 24/7.
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="px-2 py-1 bg-neutral text-xs rounded-full">Customer Support</span>
                        <span className="px-2 py-1 bg-neutral text-xs rounded-full">24/7</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="text-secondary font-bold">$149</span>
                          <span className="text-gray-500 text-xs">/month</span>
                        </div>
                        <Button className="bg-secondary text-white hover:bg-secondary/90 px-4 py-1 h-auto text-sm">
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* Pagination */}
              <div className="flex justify-center mt-10">
                <div className="inline-flex items-center border rounded-md overflow-hidden">
                  <button className="px-3 py-2 hover:bg-neutral text-gray-600">
                    <ArrowLeft size={16} />
                  </button>
                  <button className="px-4 py-2 bg-secondary text-white border-r">1</button>
                  <button className="px-4 py-2 hover:bg-neutral border-r">2</button>
                  <button className="px-4 py-2 hover:bg-neutral border-r">3</button>
                  <button className="px-3 py-2 hover:bg-neutral text-gray-600">
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Marketplace;
