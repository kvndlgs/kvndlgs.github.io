import React from 'react';
import { Code, Rocket, Users, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const stats = [
    { icon: Code, label: 'Projects Completed', value: '50+' },
    { icon: Users, label: 'Happy Clients', value: '25+' },
    { icon: Rocket, label: 'Years Experience', value: '5+' },
    { icon: Award, label: 'Certifications', value: '10+' },
  ];

  return (
    <section id="about" className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="John working on a project"
                className="rounded-lg shadow-2xl w-full max-w-md mx-auto"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-lg opacity-20"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-primary">
              Passionate About Creating Digital Solutions
            </h3>
            <p className="text-lg text-base-content/80 leading-relaxed">
              I'm a fullstack developer with over 5 years of experience building web applications
              that solve real-world problems. My journey started with a curiosity about how websites
              work, and it has evolved into a passion for creating seamless, user-friendly digital experiences.
            </p>
            <p className="text-lg text-base-content/80 leading-relaxed">
              I specialize in modern JavaScript frameworks, particularly React and Node.js, but I'm
              always eager to learn new technologies and tackle challenging problems. When I'm not
              coding, you'll find me contributing to open-source projects or sharing knowledge with
              the developer community.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
              {stats.map(({ icon: Icon, label, value }) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary">{value}</div>
                  <div className="text-sm text-base-content/60">{label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;