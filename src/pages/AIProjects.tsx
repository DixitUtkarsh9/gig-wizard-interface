
import React from 'react';

const AIProjects = () => {
  return (
    <>
      {/* Hero Banner */}
      <section className="bg-primary text-white py-16 px-4 relative">
        <div className="container mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">AI Projects</h1>
            <div className="flex items-center justify-center">
              <span className="text-sm">Home</span>
              <span className="mx-2">/</span>
              <span className="text-sm">AI Projects</span>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Coming Soon</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            We're currently working on this page. Please check back later for updates on AI projects.
          </p>
        </div>
      </section>
    </>
  );
};

export default AIProjects;
