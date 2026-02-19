import React from 'react';
import { Code2, Palette, Database, Globe } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { name: 'Frontend Development', icon: Code2, skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'] },
    { name: 'UI/UX Design', icon: Palette, skills: ['Figma', 'Adobe XD', 'Photoshop', 'User Research'] },
    { name: 'Backend Development', icon: Database, skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'] },
    { name: 'DevOps & Tools', icon: Globe, skills: ['AWS', 'Docker', 'Git', 'CI/CD'] },
  ];

  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
            About <span className="text-red-600">Me</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto font-sans">
            I'm a passionate full-stack developer with a keen eye for design and user experience. 
            I love turning complex problems into simple, beautiful solutions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div>
            <h3 className="text-3xl font-bold text-white mb-6 font-heading">My Story</h3>
            <p className="text-white/80 mb-4 leading-relaxed font-sans">
              Started my journey as a sportsperson, where discipline and consistency shaped my mindset. Over time, my passion shifted toward technology — building, coding, and constantly learning.
            </p>
            <p className="text-white/80 mb-4 leading-relaxed font-sans">
              I love traveling, partying, and experiencing life beyond work. Contributing to open-source projects gives me real fulfillment — creating, collaborating, and giving back to the community.
            </p>
            <p className="text-white/80 leading-relaxed font-sans">
              A journey balancing sports, tech, and life — still growing every day.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((category, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-red-600 text-white rounded-2xl mb-6 shadow-lg group hover:bg-red-700 transition-all duration-300 hover:-translate-y-1">
                <category.icon size={36} className="group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-4 font-heading">{category.name}</h4>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-white/70 font-medium font-sans">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;