import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-black to-red-950/15 text-gray-300 border-t border-red-300/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-red-200 via-red-400 to-rose-200 bg-clip-text text-transparent">Issam Oubenazha</h3>
            <p className="text-sm">
              Full Stack Developer & AI Engineer crafting exceptional digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-red-200">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-red-200 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-red-200 transition-colors">About</a></li>
              <li><a href="#skills" className="hover:text-red-200 transition-colors">Skills</a></li>
              <li><a href="#work" className="hover:text-red-200 transition-colors">Work</a></li>
              <li><a href="#contact" className="hover:text-red-200 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-red-200">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://github.com/issam-oubenazha"
                 className="h-11 w-11 flex items-center justify-center rounded-xl bg-red-950/25 border border-red-300/20 text-gray-300 hover:text-red-100 hover:bg-red-900/35 transition-all shadow-[0_14px_40px_-20px_rgba(239,68,68,0.75)]"
                 target="_blank"
                 rel="noopener noreferrer">
                <FaGithub className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/issam-oubenazha-651b12352/"
                 className="h-11 w-11 flex items-center justify-center rounded-xl bg-red-950/25 border border-red-300/20 text-gray-300 hover:text-red-100 hover:bg-red-900/35 transition-all shadow-[0_14px_40px_-20px_rgba(239,68,68,0.75)]"
                 target="_blank"
                 rel="noopener noreferrer">
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" 
                 className="h-11 w-11 flex items-center justify-center rounded-xl bg-red-950/25 border border-red-300/20 text-gray-300 hover:text-red-100 hover:bg-red-900/35 transition-all shadow-[0_14px_40px_-20px_rgba(239,68,68,0.75)]"
                 target="_blank"
                 rel="noopener noreferrer">
                <FaTwitter className="h-6 w-6" /> 
              </a>
              <a href="mailto:Issamoubenazha@gmail.com"
                 className="h-11 w-11 flex items-center justify-center rounded-xl bg-red-950/25 border border-red-300/20 text-gray-300 hover:text-red-100 hover:bg-red-900/35 transition-all shadow-[0_14px_40px_-20px_rgba(239,68,68,0.75)]">
                <FaEnvelope className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-8 border-t border-red-300/15 text-center">
          <p className="text-sm">
            © {currentYear} Mohammed Sellak. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
