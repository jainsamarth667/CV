import React, { useState } from 'react';
import { Mail, MapPin, Send, Linkedin, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    alert('Thank you for your message! I\'ll get back to you soon.');
  };

  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-red-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-red-500 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
            Get In <span className="text-red-600">Touch</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto font-sans">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-8 font-heading">Contact Information</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6 p-6 bg-black/50 rounded-2xl border border-red-600/30 hover:border-red-600 transition-all duration-300">
                <div className="bg-red-600 p-4 rounded-2xl shadow-lg">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2 text-lg font-heading">Email</h4>
                  <p className="text-white/80 mb-2 font-sans">jaaisam67@gmail.com</p>
                  <a href="mailto:jaaisam67@gmail.com" className="text-red-600 hover:text-red-500 text-sm font-semibold font-sans transition-colors">
                    Send an email
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 p-6 bg-black/50 rounded-2xl border border-red-600/30 hover:border-red-600 transition-all duration-300">
                <div className="bg-red-600 p-4 rounded-2xl shadow-lg">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2 text-lg font-heading">Location</h4>
                  <p className="text-white/80 mb-2 font-sans">Bhilwara, Rajasthan</p>
                  <p className="text-white/60 text-sm font-sans">Available for remote work</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-12">
              <h4 className="font-semibold text-white mb-6 text-lg font-heading">Follow me on</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/samarth-jain-029502284"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black/50 p-4 rounded-2xl border border-red-600/30 hover:border-red-600 transition-all duration-300 text-red-600 hover:text-red-500 hover:-translate-y-1"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://www.instagram.com/samarthhh.17_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black/50 p-4 rounded-2xl border border-red-600/30 hover:border-red-600 transition-all duration-300 text-red-600 hover:text-red-500 hover:-translate-y-1"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="currentColor"/>
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black/50 p-4 rounded-2xl border border-red-600/30 hover:border-red-600 transition-all duration-300 text-red-600 hover:text-red-500 hover:-translate-y-1"
                >
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 bg-black/50 rounded-2xl border border-red-600/30">
            <h3 className="text-2xl font-bold text-white mb-6 font-heading">Send me a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2 font-sans">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-red-600/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-200 bg-black/50 text-white placeholder-white/50 font-sans"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2 font-sans">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-red-600/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-200 bg-black/50 text-white placeholder-white/50 font-sans"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-white/80 mb-2 font-sans">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-red-600/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-200 bg-black/50 text-white placeholder-white/50 font-sans"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2 font-sans">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-red-600/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-200 bg-black/50 text-white placeholder-white/50 resize-none font-sans"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 text-white px-8 py-3 rounded-xl font-medium shadow-lg hover:bg-red-700 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2 font-sans"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;