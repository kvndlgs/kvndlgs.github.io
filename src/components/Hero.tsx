import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen pt-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="container mx-auto">
        <div 
          className="relative overflow-hidden rounded-3xl p-8 sm:p-12 lg:p-16"
          style={{
            background: 'linear-gradient(135deg, #4A148C 0%, #9C27B0 25%, #E91E63 50%, #FF5722 75%, #FFA07A 100%)',
            minHeight: 'calc(100vh - 4rem)',
          }}
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full animate-float"></div>
            <div className="absolute top-1/2 -left-4 w-16 h-16 bg-white/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-1/4 right-1/4 w-20 h-20 bg-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center text-center h-full min-h-[calc(100vh-8rem)]">
            <div className="animate-fade-in">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 animate-slide-up">
                Alex Johnson
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                Full Stack Developer
              </p>
              <p className="text-lg sm:text-xl text-white/80 mb-12 max-w-2xl animate-slide-up" style={{ animationDelay: '0.4s' }}>
                Crafting exceptional digital experiences with modern technologies. 
                Passionate about clean code, user experience, and innovative solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <button className="btn btn-lg bg-white text-primary hover:bg-gray-100 border-none shadow-lg transition-all duration-300 hover:scale-105">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </button>
              <button className="btn btn-lg btn-outline text-white border-white hover:bg-white hover:text-primary hover:border-white transition-all duration-300 hover:scale-105">
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>

            <div className="flex space-x-6 animate-slide-up" style={{ animationDelay: '0.8s' }}>
              <a 
                href="#" 
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6 text-white" />
              </a>
              <a 
                href="#" 
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6 text-white" />
              </a>
              <a 
                href="#" 
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail className="h-6 w-6 text-white" />
              </a>
            </div>
          </div>

          {/* Subtle grid overlay */}
          <div className="absolute inset-0 bg-white/5" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)',
            backgroundSize: '20px 20px'
          }}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;