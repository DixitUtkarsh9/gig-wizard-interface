
import React from 'react';
import { Calendar } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      id: '1',
      title: 'AI Solutions Transforming Businesses: A Strategic Guide',
      image: 'https://placehold.co/600x400?text=AI+Solutions',
      author: 'Shubham',
      date: 'April 3, 2025',
      excerpt: 'AI Solutions Transforming Businesses: A Strategic Guide Artificial Intelligence (AI) has taken...'
    },
    {
      id: '2',
      title: 'Will AI Replace Real Estate Agents?',
      image: 'https://placehold.co/600x400?text=AI+Real+Estate',
      author: 'Yogesh',
      date: 'March 25, 2025',
      excerpt: 'Exploring the Impact and Future of Artificial Intelligence in Real Estate Estimated...'
    },
    {
      id: '3',
      title: 'Google AI Studio: Free 1.5 Billion Tokens',
      image: 'https://placehold.co/600x400?text=Google+AI',
      author: 'Shubham',
      date: 'April 3, 2025',
      excerpt: 'Google AI Studio offers free access to AI models for developers with 1.5 billion tokens...'
    }
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="bg-primary text-white py-16 px-4 relative">
        <div className="container mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Blog</h1>
            <div className="flex items-center justify-center">
              <span className="text-sm">Home</span>
              <span className="mx-2">/</span>
              <span className="text-sm">Blog</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Posts */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(post => (
              <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 rounded-full bg-gray-300 mr-3"></div>
                    <div>
                      <p className="font-medium">{post.author}</p>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar size={14} className="mr-1" />
                        {post.date}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <a href="#" className="text-secondary font-medium hover:underline">
                    Read More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
