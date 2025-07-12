import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <NavLink to="/">
            <Logo color="oklch(25% 0.092 26.042)" />
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {/* Projects Dropdown */}
              <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="button" className="text-primary-content btn btn-ghost flex items-center">
                  <NavLink to="/projects">
                  Projects
                  <ChevronDown className="ml-1 h-4 w-4 text-primary-content" />
                  </NavLink>
                </div>
                <ul tabIndex={0} className="text-primary-content dropdown-content menu bg-white rounded-box z-[1] w-52 p-2 shadow-lg border">
                  <li>
                    <NavLink to="/projects/project" className="text-primary-content hover:bg-primary hover:text-white transition-colors">
                      Website & Design
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/projects/case-study" className="text-primary-content hover:bg-primary hover:text-white transition-colors">
                      Case Study
                    </NavLink>
                  </li>
                </ul>
              </div>

              <NavLink to="/about" className="btn btn-ghost hover:bg-primary hover:text-white transition-colors">
                About
              </NavLink>
              <NavLink to="#contact" className="btn btn-ghost hover:bg-primary hover:text-white transition-colors">
                Let's talk
              </NavLink>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="btn btn-ghost btn-circle"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Projects Dropdown Mobile */}
              <div className="collapse collapse-arrow">
                <input type="checkbox" />
                <div className="collapse-title text-primary-content text-base font-medium">Projects</div>
                <div className="collapse-content">
                  <ul className="menu text-primary-content">
                    <li>
                      <NavLink to="/projects/project" onClick={toggleMenu}>Website & Designs</NavLink>
                    </li>
                    <li>
                      <NavLink to="/projects/case-study" onClick={toggleMenu}>Case Study</NavLink>
                    </li>
                  </ul>
                </div>
              </div>

              <NavLink
                to="/about" 
                className="block px-3 py-2 text-base font-medium text-primary-content hover:bg-primary hover:text-white rounded-md transition-colors"
                onClick={toggleMenu}
              >
                About
              </NavLink>
              <NavLink
                to="#contact" 
                className="block px-3 py-2 text-base font-medium text-primary-content hover:bg-primary hover:text-white rounded-md transition-colors"
                onClick={toggleMenu}
              >
                Let's talk
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;