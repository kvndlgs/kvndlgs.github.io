import React from 'react';
import { motion } from 'framer-motion';
import { Code, Coffee, Music, Camera, Plane, Book } from 'lucide-react';

const About: React.FC = () => {
  const interests = [
    { icon: Code, name: 'Open Source', description: 'Contributing to the developer community' },
    { icon: Coffee, name: 'Coffee', description: 'Fuel for late-night coding sessions' },
    { icon: Music, name: 'Music', description: 'Creating the perfect coding playlist' },
    { icon: Camera, name: 'Photography', description: 'Capturing moments and perspectives' },
    { icon: Plane, name: 'Travel', description: 'Exploring new cultures and ideas' },
    { icon: Book, name: 'Reading', description: 'Staying updated with tech trends' },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About Me</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-primary">My Journey</h2>
            <p className="text-lg text-base-content/80 leading-relaxed">
              My passion for technology began in college when I wrote my first "Hello World" program.
              What started as curiosity quickly evolved into a career spanning over 5 years in fullstack development.
            </p>
            <p className="text-lg text-base-content/80 leading-relaxed">
              I believe in writing clean, maintainable code and creating user experiences that make a difference.
              My approach combines technical expertise with creative problem-solving to deliver solutions that
              not only work but exceed expectations.
            </p>
            <p className="text-lg text-base-content/80 leading-relaxed">
              When I'm not coding, I contribute to open-source projects, mentor aspiring developers, and
              explore emerging technologies. I'm particularly interested in the intersection of AI and web development.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <img
              src="https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="John at work"
              className="rounded-lg shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-secondary to-accent rounded-lg opacity-20"></div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Beyond Coding</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interests.map(({ icon: Icon, name, description }, index) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="card-body items-center text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="card-title text-lg">{name}</h3>
                  <p className="text-base-content/70">{description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;