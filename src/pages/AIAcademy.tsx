
import React from 'react';
import { Clock, Book, Users } from 'lucide-react';

const AIAcademy = () => {
  // Sample course data
  const courses = [
    {
      id: '1',
      title: 'Become AI CoPilot in 7 Days',
      instructor: 'Yogesh Huja',
      category: 'Become a CoPilot',
      image: 'https://placehold.co/600x400?text=AI+Copilot+Course',
      days: '7 Days',
      level: 'Beginner',
      lessons: 36,
      quizzes: 0,
      students: 341,
      price: 99.00,
      originalPrice: 999.00,
      description: 'Certification: "Certified n8n Co-Pilot". Verified Profile & Gigs on Gignaati.com. Hands-on experience...'
    },
    {
      id: '2',
      title: 'Masterclass: Build AI Agents with n8n.io',
      instructor: 'Yogesh Huja',
      category: 'Masterclass',
      image: 'https://placehold.co/600x400?text=AI+Agents+Course',
      hours: '2 Hours',
      level: 'All Levels',
      lessons: 10,
      quizzes: 0,
      students: 693,
      price: 79.00,
      originalPrice: 199.00,
      description: 'Learn how to build your first AI-powered Personal Assistant using n8n.io – a no-code automation platform.'
    }
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="bg-primary text-white py-16 px-4 relative">
        <div className="container mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">AI Academy</h1>
            <div className="flex items-center justify-center">
              <span className="text-sm">Home</span>
              <span className="mx-2">/</span>
              <span className="text-sm">AI Academy</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Courses Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          {courses.map(course => (
            <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden mb-10 flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-6">
                <h2 className="text-2xl font-bold mb-2">{course.title}</h2>
                <p className="mb-4">by <span className="text-primary font-medium">{course.instructor}</span> in <span className="text-primary font-medium">{course.category}</span></p>
                
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center">
                    <Clock size={16} className="text-secondary mr-2" />
                    {course.days || course.hours}
                  </div>
                  <div className="flex items-center">
                    <span className="text-secondary mr-2">•</span>
                    {course.level}
                  </div>
                  <div className="flex items-center">
                    <Book size={16} className="text-secondary mr-2" />
                    {course.lessons} Lessons
                  </div>
                  <div className="flex items-center">
                    <span className="text-secondary mr-2">•</span>
                    {course.quizzes} Quizzes
                  </div>
                  <div className="flex items-center">
                    <Users size={16} className="text-secondary mr-2" />
                    {course.students} Students
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">{course.description}</p>
                
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-gray-500 line-through">${course.originalPrice.toFixed(2)}</span>
                    <span className="text-2xl font-bold text-primary ml-2">${course.price.toFixed(2)}</span>
                  </div>
                  <button className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-all font-medium">
                    Read more
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AIAcademy;
