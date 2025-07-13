import React from 'react';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/johndoe', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/johndoe', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/johndoe', label: 'Twitter' },
    { icon: Mail, href: 'mailto:john@example.com', label: 'Email' },
  ];

  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content">
      <div>
        <div className="grid grid-flow-col gap-4">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-circle hover:text-primary transition-colors duration-200"
              aria-label={label}
            >
              <Icon className="w-6 h-6" />
            </a>
          ))}
        </div>
      </div>
      <div>
        <p className="flex items-center gap-2">
          Made with <Heart className="w-4 h-4 text-red-500" /> by John Doe
        </p>
        <p className="text-sm opacity-70">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;