import React from 'react';
import { ArrowDown, Download, Dribbble, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero min-h-screen bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
      <div className="hero-content text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="avatar mb-8"
          >
            <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt="Kevin Desloges"
                className="rounded-full"
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            Hello, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Kevin
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl mb-2 text-base-content/80"
          >
            Fullstack Developer Based In Quebec.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg mb-8 max-w-2xl mx-auto text-base-content/70"
          >
            I create exceptional digital experiences with modern web technologies.
            Passionate about clean code, user experience, and building scalable applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <a
              href="/resume.pdf"
              className="btn btn-primary btn-lg gap-2"
              download
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
            <div className="flex gap-2">
              <a
                href="https://github.com/kvndlgs"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-lg btn-circle"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://dribbble.com/kvds"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-lg btn-circle"
                aria-label="dribbble"
              >
                <Dribbble className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            onClick={scrollToAbout}
            className="btn btn-ghost btn-circle animate-bounce-subtle"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;