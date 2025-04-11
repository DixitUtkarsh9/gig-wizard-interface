
import React from 'react';
import { Search, Filter, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Marketplace = () => {
  return (
    <>
      {/* Hero Banner */}
      <section className="bg-primary text-white py-16 px-4 relative">
        <div className="container mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Marketplace</h1>
            <div className="flex items-center justify-center">
              <span className="text-sm">Home</span>
              <span className="mx-2">/</span>
              <span className="text-sm">Marketplace</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Search Bar */}
      <section className="py-8 px-4 bg-neutral">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <input 
                type="text" 
                placeholder="What are you looking for?" 
                className="pl-4 pr-10 py-3 rounded-md w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>
            <div className="w-full md:w-64">
              <select className="pl-4 pr-10 py-3 rounded-md w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-secondary">
                <option value="">Select Category</option>
                <option value="ai-agents">AI Agents</option>
                <option value="development">Development</option>
                <option value="data">Data & Analytics</option>
              </select>
            </div>
            <Button className="bg-secondary text-black hover:bg-secondary/90 py-3 px-6">
              Search
            </Button>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar - Filters */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg">Search Filters</h3>
                  <button className="text-secondary text-sm hover:underline">Clear Result</button>
                </div>
                
                {/* Keyword Filter */}
                <div className="mb-6">
                  <h4 className="font-medium mb-2 flex justify-between items-center">
                    <span>Keywords</span>
                    <span className="text-gray-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </span>
                  </h4>
                  <div className="border rounded-md">
                    <input 
                      type="text" 
                      placeholder="Search by Keyword" 
                      className="p-3 w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                  </div>
                </div>
                
                {/* Category Filter */}
                <div className="mb-6">
                  <h4 className="font-medium mb-2 flex justify-between items-center">
                    <span>Category</span>
                    <span className="text-gray-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </span>
                  </h4>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded text-secondary focus:ring-secondary mr-2" />
                      <span>Customer Support</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded text-secondary focus:ring-secondary mr-2" />
                      <span>Healthcare</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded text-secondary focus:ring-secondary mr-2" />
                      <span>Human Resource</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded text-secondary focus:ring-secondary mr-2" />
                      <span>Marketing</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded text-secondary focus:ring-secondary mr-2" />
                      <span>Sales & CRMs</span>
                    </label>
                  </div>
                </div>
                
                {/* Price Filter */}
                <div className="mb-6">
                  <h4 className="font-medium mb-2 flex justify-between items-center">
                    <span>Price</span>
                    <span className="text-gray-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </span>
                  </h4>
                  <div className="mb-4">
                    <input
                      type="range"
                      min="0"
                      max="1500"
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                  <div className="flex justify-between">
                    <span>$0</span>
                    <span>$1500</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Main Content - Results */}
            <div className="lg:w-3/4">
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold">Found 12 Results</h3>
                  <div className="flex items-center gap-4">
                    <button className="p-2 border rounded hover:bg-gray-100">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                      </svg>
                    </button>
                    <button className="p-2 border rounded bg-secondary text-white">
                      <Filter size={20} />
                    </button>
                    <div className="relative">
                      <select className="appearance-none border rounded py-2 px-4 pr-8 focus:outline-none focus:ring-2 focus:ring-secondary">
                        <option>Sort by</option>
                        <option>Newest</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                        <option>Popular</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <div className="relative">
                    <img 
                      src="https://placehold.co/600x400?text=Real+Estate+AI" 
                      alt="RealAI" 
                      className="w-full h-48 object-cover"
                    />
                    <span className="absolute top-2 right-2 badge-feature">
                      Featured
                    </span>
                    <button className="absolute top-2 left-2 p-2 bg-white rounded-full hover:bg-gray-100">
                      <Heart size={18} className="text-gray-500 hover:text-red-500" />
                    </button>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2">RealAI - Real Estate AI Agent</h3>
                    <div className="text-sm text-red-500 mb-3">No Reviews</div>
                    <div className="mt-4">
                      <Button className="w-full bg-secondary text-primary hover:bg-secondary/90">
                        Send Proposal
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <div className="relative">
                    <img 
                      src="https://placehold.co/600x400?text=Personalized+AI" 
                      alt="Personalized AI Agent" 
                      className="w-full h-48 object-cover"
                    />
                    <span className="absolute top-2 right-2 badge-feature">
                      Featured
                    </span>
                    <button className="absolute top-2 left-2 p-2 bg-white rounded-full hover:bg-gray-100">
                      <Heart size={18} className="text-gray-500 hover:text-red-500" />
                    </button>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2">Personalized AI Agent</h3>
                    <div className="text-sm text-red-500 mb-3">No Reviews</div>
                    <div className="mt-4">
                      <Button className="w-full bg-secondary text-primary hover:bg-secondary/90">
                        Send Proposal
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <div className="relative">
                    <img 
                      src="https://placehold.co/600x400?text=Social+Media+AI" 
                      alt="Social Media Flix Agent" 
                      className="w-full h-48 object-cover"
                    />
                    <span className="absolute top-2 right-2 badge-feature">
                      Featured
                    </span>
                    <button className="absolute top-2 left-2 p-2 bg-white rounded-full hover:bg-gray-100">
                      <Heart size={18} className="text-gray-500 hover:text-red-500" />
                    </button>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2">Social Media Flix Agent</h3>
                    <div className="text-sm text-red-500 mb-3">No Reviews</div>
                    <div className="mt-4">
                      <Button className="w-full bg-secondary text-primary hover:bg-secondary/90">
                        Send Proposal
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center mt-8">
                <div className="inline-flex">
                  <button className="px-4 py-2 border rounded-l-md bg-primary text-white">1</button>
                  <button className="px-4 py-2 border-t border-b border-r">2</button>
                  <button className="px-4 py-2 border-t border-b border-r">3</button>
                  <button className="px-4 py-2 border-t border-b border-r rounded-r-md">Next</button>
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
