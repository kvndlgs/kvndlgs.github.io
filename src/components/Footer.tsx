import React, { useState } from 'react';
import { Mail, Send, Code, Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Newsletter Subscription */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Mail className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-bold">Stay Updated</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              Subscribe to get notified about new projects, blog posts, and tech insights. 
              Join the community of developers and stay ahead of the curve.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="input input-bordered w-full bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-primary focus:bg-white/20 transition-all duration-300"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary hover:btn-secondary transition-all duration-300 hover:scale-105 shadow-lg"
                  disabled={isSubscribed}
                >
                  {isSubscribed ? (
                    <>
                      <span className="loading loading-spinner loading-sm"></span>
                      Subscribed!
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Subscribe
                    </>
                  )}
                </button>
              </div>
              {isSubscribed && (
                <div className="alert alert-success bg-green-500/20 border-green-500/30 text-green-300">
                  <span>✓ Thank you for subscribing! You'll hear from us soon.</span>
                </div>
              )}
            </form>
          </div>

          {/* Brand and Social Links */}
          <div className="space-y-6 text-center lg:text-right">
            <div className="flex items-center justify-center lg:justify-end space-x-3">
              <Code className="h-10 w-10 text-primary" />
              <span className="text-2xl font-bold">DevPortfolio</span>
            </div>
            
            <p className="text-gray-300 text-lg">
              Building the future, one line of code at a time.
            </p>

            <div className="flex justify-center lg:justify-end space-x-4">
              <a 
                href="#" 
                className="p-3 bg-white/10 rounded-full hover:bg-primary hover:scale-110 transition-all duration-300 group"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 group-hover:text-white" />
              </a>
              <a 
                href="#" 
                className="p-3 bg-white/10 rounded-full hover:bg-primary hover:scale-110 transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 group-hover:text-white" />
              </a>
              <a 
                href="#" 
                className="p-3 bg-white/10 rounded-full hover:bg-primary hover:scale-110 transition-all duration-300 group"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 group-hover:text-white" />
              </a>
              <a 
                href="#" 
                className="p-3 bg-white/10 rounded-full hover:bg-primary hover:scale-110 transition-all duration-300 group"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Alex Johnson. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;