import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12 border-t border-red-600/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-heading">Samarth Jain</h3>
            <p className="text-white/70 mb-4 font-sans">
              Full Stack Developer passionate about creating innovative solutions 
              and beautiful user experiences.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-red-600 transition-colors duration-200"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/samarth-jain-029502284"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-red-600 transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:jaaisam67@gmail.com"
                className="text-white/70 hover:text-red-600 transition-colors duration-200"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-heading">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-white/70 hover:text-red-600 transition-colors duration-200 font-sans">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-red-600 transition-colors duration-200 font-sans">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="text-white/70 hover:text-red-600 transition-colors duration-200 font-sans">
                  Experience
                </a>
              </li>
              <li>
                <a href="#achievement" className="text-white/70 hover:text-red-600 transition-colors duration-200 font-sans">
                  Achievement
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-red-600 transition-colors duration-200 font-sans">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-red-600/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 text-sm mb-4 md:mb-0 font-sans">
              © {currentYear} Samarth Jain. All rights reserved.
            </p>
            <p className="text-white/70 text-sm flex items-center gap-1 font-sans">
              Made with <Heart size={16} className="text-red-600" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;