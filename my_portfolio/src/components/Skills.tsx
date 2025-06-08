import React from 'react';
import { Code, Database, PenTool as Tool, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Skills: React.FC = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t('skills.categories.frontend'),
      icon: Code,
      color: 'from-blue-500 to-blue-600',
      skills: [
        { name: 'React', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Vue.js', level: 75 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'JavaScript', level: 95 }
      ]
    },
    {
      title: t('skills.categories.backend'),
      icon: Database,
      color: 'from-green-500 to-green-600',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Python', level: 75 },
        { name: 'MongoDB', level: 70 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'REST APIs', level: 85 }
      ]
    },
    {
      title: t('skills.categories.tools'),
      icon: Tool,
      color: 'from-purple-500 to-purple-600',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 70 },
        { name: 'AWS', level: 65 },
        { name: 'Webpack', level: 75 },
        { name: 'Jest', level: 80 }
      ]
    },
    {
      title: t('skills.categories.soft'),
      icon: Users,
      color: 'from-orange-500 to-orange-600',
      skills: [
        { name: 'Problem Solving', level: 95 },
        { name: 'Team Collaboration', level: 90 },
        { name: 'Communication', level: 85 },
        { name: 'Project Management', level: 75 },
        { name: 'Mentoring', level: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            {t('skills.title')}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center`}>
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700 dark:text-gray-300 font-medium">
                            {skill.name}
                          </span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};