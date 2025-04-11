
import React from 'react';

const HowItWorks = () => {
  return (
    <>
      {/* Hero Banner */}
      <section className="bg-primary text-white py-16 px-4 relative">
        <div className="container mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">The Process</h1>
            <div className="flex items-center justify-center">
              <span className="text-sm">Home</span>
              <span className="mx-2">/</span>
              <span className="text-sm">The Process</span>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-6xl font-bold text-gray-200">01</h2>
              <h3 className="text-3xl font-bold mb-6 -mt-8">Register & List AI-Agents</h3>
              <p className="text-gray-600 mb-6">
                Freelancer looking to offer AI-driven services can easily register on Gignaati.com by creating an account and setting up their profile. Once registered, they can list their AI-powered gigs, detailing the nature of their services, pricing, and availability.
              </p>
              <button className="bg-secondary text-black px-6 py-3 rounded-md hover:bg-secondary/90 transition-all font-medium">
                Create Account
              </button>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://placehold.co/600x400?text=Register+Illustration" 
                alt="Register illustration" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
