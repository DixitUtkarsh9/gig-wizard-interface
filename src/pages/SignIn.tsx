
import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, AtSign, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SignIn = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-12 px-4">
      <div className="container max-w-md">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="text-center mb-6">
            <img 
              src="public/lovable-uploads/44c5d80f-1d2f-42a6-81e3-df6c22699575.png" 
              alt="Gignaati Logo" 
              className="h-12 mx-auto mb-4" 
            />
            <h1 className="text-3xl font-bold">Sign In</h1>
            <p className="text-gray-600">Welcome back! Please sign in to continue.</p>
          </div>

          <form>
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

            <div className="mb-6 flex items-center justify-between">
              <label className="flex items-center">
                <input 
                  type="checkbox" 
                  className="rounded text-secondary focus:ring-secondary mr-2"
                />
                <span className="text-gray-700">Remember me</span>
              </label>
              <Link to="/forgot-password" className="text-secondary hover:underline text-sm">
                Forgot password?
              </Link>
            </div>

            <Button className="w-full bg-secondary text-primary hover:bg-secondary/90 py-3">
              Sign In
            </Button>
          </form>
          
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-2 gap-3">
              <button className="flex justify-center items-center py-2.5 border rounded-md hover:bg-gray-50 transition-colors">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Google
              </button>
              <button className="flex justify-center items-center py-2.5 border rounded-md hover:bg-gray-50 transition-colors">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 0a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18.75a8.75 8.75 0 1 1 0-17.5 8.75 8.75 0 0 1 0 17.5z" />
                  <path d="M15.25 10c0-2.63-1.31-4.94-3.25-6.28v12.56c1.94-1.34 3.25-3.65 3.25-6.28zM7.5 3.5v13a6.5 6.5 0 0 1 0-13z" />
                </svg>
                GitHub
              </button>
            </div>
          </div>
          
          <p className="text-center mt-6">
            Don't have an account? <Link to="/register" className="text-secondary hover:underline font-medium">Register now</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
