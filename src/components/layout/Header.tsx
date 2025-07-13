import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, Code } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="navbar bg-base-100 shadow-lg sticky top-0 z-50 backdrop-blur-sm bg-opacity-90">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost text-xl font-bold">
          <Code className="w-6 h-6 mr-2 text-primary" />
          John Doe
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`${
                  isActive(item.path)
                    ? 'text-primary font-semibold'
                    : 'hover:text-primary'
                } transition-colors duration-200`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end">
        <button
          onClick={toggleTheme}
          className="btn btn-ghost btn-circle mr-2"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
        </button>

        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="btn btn-ghost btn-circle"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-base-100 shadow-lg lg:hidden">
          <ul className="menu menu-vertical px-4 py-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`${
                    isActive(item.path)
                      ? 'text-primary font-semibold'
                      : 'hover:text-primary'
                  } transition-colors duration-200`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;