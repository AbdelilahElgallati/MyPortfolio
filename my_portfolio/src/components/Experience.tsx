import React from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Experience: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            {t('experience.title')}
          </h2>

          <div className="space-y-8">
            {t('experience.items', { returnObjects: true }).map((experience: any, index: number) => (
              <div
                key={index}
                className="relative pl-8 pb-8 border-l-2 border-blue-500 dark:border-blue-400 last:border-l-0 last:pb-0"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 dark:bg-blue-400" />
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {experience.title}
                      </h3>
                      <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                        <Briefcase size={18} className="mr-2" />
                        <span>{experience.company}</span>
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                        <Calendar size={18} className="mr-2" />
                        <span>{experience.duration}</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {experience.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech: string, techIndex: number) => (
                          <span
                            key={techIndex}
                            className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};