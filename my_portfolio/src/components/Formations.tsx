import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

export const Formations: React.FC = () => {
  const { t, language } = useLanguage();
  const formations = t('formations.items', { returnObjects: true }) as readonly Formation[];
  const certifications = translations[language].formations.certifications;

  return (
    <section id="formations" className="surface-subtle py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl font-bold text-center text-primary mb-12">
            {t('formations.title')}
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-6 flex items-center">
                <GraduationCap className="mr-2" size={24} />
                {t('formations.educationTitle')}
              </h3>
              <div className="space-y-8">
                {formations.map((formation, index) => (
                  <div
                    key={index}
                    className="relative pl-8 pb-8 border-l-2 border-primary-600 dark:border-primary-400 last:border-l-0 last:pb-0"
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-600 dark:bg-primary-400" />
                    <div className="surface-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-start justify-between flex-wrap gap-4">
                      <div className="flex-1">
                          <h4 className="text-xl font-bold text-primary mb-2">
                              {formation.degree}
                            </h4>
                          <div className="flex items-center text-secondary mb-2">
                            <GraduationCap size={18} className="mr-2" />
                            <span>{formation.institution}</span>
                          </div>
                          <div className="flex items-center text-secondary">
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
              <h3 className="text-2xl font-semibold text-primary mb-6 flex items-center">
                <Award className="mr-2" size={24} />
                {t('formations.certificationsTitle')}
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="surface-card rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-teal-600"
                  >
                    <h4 className="font-semibold text-primary mb-1">
                      {cert.name}
                    </h4>
                    <div className="flex items-center justify-between text-sm text-secondary">
                      <span>{cert.issuer}</span>
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

interface Formation {
  degree: string;
  institution: string;
  year: string;
}