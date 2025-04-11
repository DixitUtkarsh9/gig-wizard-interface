
import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, User, AtSign, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Register = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [accepted, setAccepted] = React.useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccepted(e.target.checked);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-6">Register With Us</h1>
            <p className="text-gray-600 mb-8">
              Create a new account with us and start using the most trusted platform to hire freelancers and provide services
            </p>

            <form>
              <div className="mb-6">
                <div className="relative">
                  <User size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="Display name" 
                    className="pl-10 pr-4 py-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                  />
                </div>
              </div>

              <div className="mb-6">
                <div className="relative">
                  <User size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="Username" 
                    className="pl-10 pr-4 py-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                  />
                </div>
              </div>

              <div className="mb-6">
                <div className="relative">
                  <AtSign size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input 
                    type="email" 
                    placeholder="Email address" 
                    className="pl-10 pr-4 py-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                  />
                </div>
              </div>

              <div className="mb-6">
                <div className="relative">
                  <Lock size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="Password" 
                    className="pl-10 pr-12 py-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                  />
                  <button 
                    type="button" 
                    onClick={togglePasswordVisibility} 
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div className="mb-6 flex items-center">
                <input 
                  type="checkbox" 
                  id="terms" 
                  className="rounded text-secondary focus:ring-secondary mr-2"
                  checked={accepted}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="terms" className="text-gray-700">
                  I agree to the <Link to="/terms" className="text-primary hover:underline font-medium">Terms and Conditions</Link>
                </label>
              </div>

              <Button 
                className="w-full bg-secondary text-primary hover:bg-secondary/90 disabled:bg-gray-300 disabled:text-gray-500 py-3"
                disabled={!accepted}
              >
                Create Account
              </Button>
            </form>
            
            <p className="text-center mt-6">
              Already have an account? <Link to="/sign-in" className="text-secondary hover:underline font-medium">Login here</Link>
            </p>
          </div>

          <div className="hidden md:block relative">
            <img 
              src="public/lovable-uploads/f23eb93c-f6b5-4436-b682-e0cba147c7be.png" 
              alt="Register image" 
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-6 rounded-lg">
              <div className="flex items-center mb-3">
                <img 
                  src="https://placehold.co/50x50?text=Dashboard" 
                  alt="Dashboard icon" 
                  className="w-12 h-12 rounded-md mr-4"
                />
                <h3 className="font-bold text-xl">User Dashboard</h3>
              </div>
              <p className="text-gray-700">
                Each user will have their own dashboard and enjoy working
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
