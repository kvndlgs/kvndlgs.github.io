import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Form submitted:', data);
    alert('Message sent successfully!');
    reset();
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      content: 'San Francisco, CA',
      description: 'Available for remote work worldwide',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      description: 'Available Mon-Fri, 9AM-6PM PST',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'john@example.com',
      description: 'Response within 24 hours',
    },
    {
      icon: Clock,
      title: 'Response Time',
      content: '24 hours',
      description: 'Usually much faster!',
    },
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
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Get In Touch</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6">Let's Talk</h2>
              <p className="text-lg text-base-content/70 mb-8">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a project in mind or just want to connect, I'd love to hear from you.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map(({ icon: Icon, title, content, description }, index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="card bg-base-100 shadow-lg"
                >
                  <div className="card-body items-center text-center p-6">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="text-primary font-medium">{content}</p>
                    <p className="text-sm text-base-content/60">{description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="card bg-base-100 shadow-2xl"
          >
            <div className="card-body">
              <h2 className="card-title text-2xl mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Name</span>
                  </label>
                  <input
                    {...register('name')}
                    type="text"
                    placeholder="Your name"
                    className={`input input-bordered w-full ${errors.name ? 'input-error' : ''}`}
                  />
                  {errors.name && (
                    <label className="label">
                      <span className="label-text-alt text-error">{errors.name.message}</span>
                    </label>
                  )}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Email</span>
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    placeholder="your.email@example.com"
                    className={`input input-bordered w-full ${errors.email ? 'input-error' : ''}`}
                  />
                  {errors.email && (
                    <label className="label">
                      <span className="label-text-alt text-error">{errors.email.message}</span>
                    </label>
                  )}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Subject</span>
                  </label>
                  <input
                    {...register('subject')}
                    type="text"
                    placeholder="What's this about?"
                    className={`input input-bordered w-full ${errors.subject ? 'input-error' : ''}`}
                  />
                  {errors.subject && (
                    <label className="label">
                      <span className="label-text-alt text-error">{errors.subject.message}</span>
                    </label>
                  )}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Message</span>
                  </label>
                  <textarea
                    {...register('message')}
                    placeholder="Tell me about your project..."
                    rows={5}
                    className={`textarea textarea-bordered w-full ${errors.message ? 'textarea-error' : ''}`}
                  />
                  {errors.message && (
                    <label className="label">
                      <span className="label-text-alt text-error">{errors.message.message}</span>
                    </label>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full gap-2"
                >
                  {isSubmitting ? (
                    <span className="loading loading-spinner loading-sm"></span>
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;