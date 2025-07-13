import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
}

const Blog: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Building Scalable React Applications with TypeScript',
      excerpt: 'Learn best practices for structuring large React applications using TypeScript, including advanced type patterns and architectural decisions.',
      date: '2024-01-15',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/11035386/pexels-photo-11035386.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['React', 'TypeScript', 'Architecture']
    },
    {
      id: 2,
      title: 'Modern CSS Techniques for Better Performance',
      excerpt: 'Explore modern CSS features like container queries, cascade layers, and CSS-in-JS optimization techniques for faster web applications.',
      date: '2024-01-08',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/11035540/pexels-photo-11035540.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['CSS', 'Performance', 'Web Development']
    },
    {
      id: 3,
      title: 'Database Design Patterns for Modern Applications',
      excerpt: 'Understanding when to use relational vs NoSQL databases, and how to design schemas that scale with your application.',
      date: '2024-01-01',
      readTime: '10 min read',
      image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Database', 'Backend', 'Design Patterns']
    },
    {
      id: 4,
      title: 'The Future of Web Development: AI Integration',
      excerpt: 'How artificial intelligence is reshaping web development workflows and what developers need to know about AI-powered tools.',
      date: '2023-12-28',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['AI', 'Future Tech', 'Web Development']
    },
    {
      id: 5,
      title: 'Microservices vs Monolith: Making the Right Choice',
      excerpt: 'A comprehensive guide to choosing between microservices and monolithic architectures based on your project requirements.',
      date: '2023-12-20',
      readTime: '12 min read',
      image: 'https://images.pexels.com/photos/8438913/pexels-photo-8438913.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Architecture', 'Backend', 'Microservices']
    },
    {
      id: 6,
      title: 'Optimizing React Performance: Advanced Techniques',
      excerpt: 'Deep dive into React performance optimization techniques including memoization, code splitting, and bundle analysis.',
      date: '2023-12-15',
      readTime: '9 min read',
      image: 'https://images.pexels.com/photos/11035382/pexels-photo-11035382.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['React', 'Performance', 'Optimization']
    }
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
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Tech Blog</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Sharing insights, tutorials, and thoughts on modern web development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer"
            >
              <figure className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </figure>
              <div className="card-body">
                <div className="flex items-center gap-4 text-sm text-base-content/60 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>
                
                <h2 className="card-title text-lg mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-base-content/70 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <div key={tag} className="badge badge-outline text-xs">
                      {tag}
                    </div>
                  ))}
                </div>
                
                <div className="card-actions justify-end">
                  <button className="btn btn-primary btn-sm gap-2 group-hover:gap-3 transition-all">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;