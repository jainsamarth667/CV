import React from 'react';
import { Award, Trophy, Star, Target } from 'lucide-react';

const Achievement: React.FC = () => {
  const achievements = [
    {
      title: 'Gold Medalist',
      description: '9th and 10th International Karate Championship',
      icon: Award,
      year: '2018, 2019'
    },
    {
      title: 'Gold Medalist',
      description: '32nd, 33rd, and 34th National Karate Championship',
      icon: Trophy,
      year: '2017, 2018, 2019'
    },
    {
      title: 'Achievement 3',
      description: 'Description of your achievement goes here',
      icon: Star,
      year: '2022'
    },
    {
      title: 'Achievement 4',
      description: 'Description of your achievement goes here',
      icon: Target,
      year: '2021'
    }
  ];

  return (
    <section id="achievement" className="py-20 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-80 h-80 bg-red-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-red-500 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
            <span className="text-red-600">Achievements</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto font-sans">
            Highlights of my accomplishments and milestones
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="p-8 bg-black/50 rounded-lg border border-red-600/30 hover:border-red-600 transition-all duration-300 hover:bg-black/70"
            >
              <div className="flex items-start gap-6">
                <div className="bg-red-600 p-4 rounded-xl shadow-lg flex-shrink-0">
                  <achievement.icon className="text-white" size={32} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white font-heading">{achievement.title}</h3>
                    <span className="text-red-600 text-sm font-medium font-sans">{achievement.year}</span>
                  </div>
                  <p className="text-white/70 leading-relaxed font-sans">{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievement;
