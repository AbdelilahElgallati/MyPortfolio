import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Formations: React.FC = () => {
  const { t } = useLanguage();

  const certifications = [
    { name: 'Machine Learning in Python', provider: '365 Data Science', year: '2025' },
    { name: 'Deep Learning with TensorFlow 2', provider: '365 Data Science', year: '2025' },
    { name: 'Data Ingestion with Pandas', provider: '365 Data Science', year: '2025' },
    { name: 'Power BI', provider: '365 Data Science', year: '2025' },
    { name: 'Intro to Data and Data Science', provider: '365 Data Science', year: '2025' }
  ];

  return (
    <section id="formations" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            {t('formations.title')}
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <GraduationCap className="mr-2" size={24} />
                Education
              </h3>
              <div className="space-y-8">
                {t('formations.items', { returnObjects: true }).map((formation: any, index: number) => (
                  <div
                    key={index}
                    className="relative pl-8 pb-8 border-l-2 border-blue-500 dark:border-blue-400 last:border-l-0 last:pb-0"
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 dark:bg-blue-400" />
                    <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-start justify-between flex-wrap gap-4">
                      <div className="flex-1">
                          <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                              {formation.degree}
                            </h4>
                          <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                            <GraduationCap size={18} className="mr-2" />
                            <span>{formation.institution}</span>
                          </div>
                          <div className="flex items-center text-gray-600 dark:text-gray-400">
                            <Calendar size={18} className="mr-2" />
                            <span>{formation.year}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <Award className="mr-2" size={24} />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-green-500"
                  >
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {cert.name}
                    </h4>
                    <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                      <span>{cert.provider}</span>
                      <span>{cert.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};