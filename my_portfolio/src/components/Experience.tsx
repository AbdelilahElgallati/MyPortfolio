import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Experience: React.FC = () => {
  const { t } = useLanguage();
  const experiences = t('experience.items', { returnObjects: true }) as readonly ExperienceItem[];

  return (
    <section id="experience" className="surface-page py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl font-bold text-center text-primary mb-12">
            {t('experience.title')}
          </h2>

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="relative pl-8 pb-8 border-l-2 border-primary-600 dark:border-primary-400 last:border-l-0 last:pb-0"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-600 dark:bg-primary-400" />
                <div className="surface-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary mb-2">
                        {experience.title}
                      </h3>
                      <div className="flex items-center text-secondary mb-2">
                        <Briefcase size={18} className="mr-2" />
                        <span>{experience.company}</span>
                      </div>
                      <div className="flex items-center text-secondary mb-4">
                        <Calendar size={18} className="mr-2" />
                        <span>{experience.duration}</span>
                      </div>
                      <p className="text-secondary mb-4 leading-relaxed">
                        {experience.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech: string, techIndex: number) => (
                          <span
                            key={techIndex}
                            className="surface-tag text-primary-800 dark:text-primary-200 px-3 py-1 rounded-full text-sm font-medium"
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

interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  description: string;
  technologies: readonly string[];
}