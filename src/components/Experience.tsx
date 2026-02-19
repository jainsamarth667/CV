import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences: any[] = [];

  const education = [
    {
      degree: 'Bachelor of Technology',
      school: 'Parul University',
      location: 'Vadodara, Gujarat',
      period: '2024 - Present',
      details: 'Currently in 1st Year'
    },
    {
      degree: '10 + 2',
      school: 'Central Academy',
      location: 'Bhilwara, Rajasthan',
      period: '2022 - 2024',
      details: 'Completed 10+2 from Central Academy'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-500 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
            Experience & <span className="text-red-600">Education</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto font-sans">
            A journey through my professional experience and educational background
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Section */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3 font-heading">
              <div className="w-10 h-10 bg-red-600 rounded-xl shadow-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              Work Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="p-8 border-l-4 border-red-600 bg-black/50 rounded-lg hover:bg-black/70 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2 font-heading">{exp.title}</h4>
                      <p className="text-red-600 font-semibold mb-2 font-sans">{exp.company}</p>
                    </div>
                    <div className="text-sm text-white/60 md:text-right font-sans">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar size={16} className="text-red-600" />
                        <span className="font-medium">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-red-600" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-white/80 mb-6 leading-relaxed font-sans">{exp.description}</p>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-3 text-white/70 font-sans">
                        <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3 font-heading">
              <div className="w-10 h-10 bg-red-600 rounded-xl shadow-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="p-6 border-l-4 border-red-600 bg-black/50 rounded-lg hover:bg-black/70 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2 font-heading">{edu.degree}</h4>
                      <p className="text-red-600 font-semibold mb-2 font-sans">{edu.school}</p>
                    </div>
                    <div className="text-sm text-white/60 md:text-right font-sans">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar size={16} className="text-red-600" />
                        <span className="font-medium">{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-red-600" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-white/80 leading-relaxed font-sans">{edu.details}</p>
                </div>
              ))}
            </div>

            {/* Skills Section */}
            <div className="mt-12">
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3 font-heading">
                <div className="w-10 h-10 bg-red-600 rounded-xl shadow-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                Technical Skills
              </h3>
              <div className="p-8 bg-black/50 rounded-lg border border-red-600/30">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-white mb-4 text-lg font-heading">Frontend</h4>
                    <div className="flex flex-wrap gap-3">
                      {['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript'].map((skill) => (
                        <span key={skill} className="px-4 py-2 bg-red-600/20 text-red-400 rounded-full text-sm font-medium border border-red-600/30 font-sans">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-4 text-lg font-heading">Backend</h4>
                    <div className="flex flex-wrap gap-3">
                      {['Node.js', 'Python', 'PostgreSQL', 'Java', 'AWS'].map((skill) => (
                        <span key={skill} className="px-4 py-2 bg-red-600/20 text-red-400 rounded-full text-sm font-medium border border-red-600/30 font-sans">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;