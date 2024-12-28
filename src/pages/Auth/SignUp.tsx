import React from 'react';
import { Mail, Lock, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
    name: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add validation and signup logic here
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
      <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Welcome to AI Social Publisher
          </h1>
          <p className="text-gray-600 mt-2">Start creating amazing content today</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                <User size={16} />
                Full Name
              </label>
              <input
                type="text"
                className="w-full p-3 border rounded-lg bg-white/50 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                <Mail size={16} />
                Email
              </label>
              <input
                type="email"
                className="w-full p-3 border rounded-lg bg-white/50 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                placeholder="john@example.com"
                required
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                <Lock size={16} />
                Password
              </label>
              <input
                type="password"
                className="w-full p-3 border rounded-lg bg-white/50 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-[1.02]"
          >
            Create Account
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <a href="/login" className="text-purple-600 hover:text-purple-700 font-medium">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}