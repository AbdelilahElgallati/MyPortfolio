import React from 'react';
import { Heart, Coffee } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import profileImage from '../ressources/images/image.jpg';

export const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            {t('about.title')}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Avatar/Image */}
            <div className="text-center">
              <div className="w-64 h-64 mx-auto rounded-full overflow-hidden shadow-lg border-2 border-white dark:border-gray-800 transform hover:scale-105 transition-all duration-300">
                <img
                  src={profileImage}
                  alt={t('hero.name')}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: '50% 35%' }}
                />
              </div>
            </div>
            
            {/* Content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {t('about.bio')}
              </p>
              
              <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400">
                <Heart size={20} />
                <span className="font-medium">Passionate about clean code & innovation</span>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500">
                <div className="flex items-center space-x-2">
                  <Coffee size={20} className="text-blue-600 dark:text-blue-400" />
                  <p className="text-gray-700 dark:text-gray-300 italic">
                    {t('about.funFact')}
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Problem Solver
                </div>
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Team Player
                </div>
                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Continuous Learner
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};