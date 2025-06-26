import React from 'react';
import { Code, Database, PenTool as Tool, Users, Github, GitBranch, Cloud, Package, FlaskConical, FileCode, Feather, MessageCircle, Users as UsersIcon, BarChart2, BookOpen, HelpCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const technicalSkills = [
  { name: 'React', icon: Code, category: 'Frontend' },
  { name: 'TypeScript', icon: FileCode, category: 'Language' },
  { name: 'Vue.js', icon: Code, category: 'Frontend' },
  { name: 'Tailwind CSS', icon: Feather, category: 'Styling' },
  { name: 'JavaScript', icon: FileCode, category: 'Language' },
  { name: 'Node.js', icon: Package, category: 'Backend' },
  { name: 'Python', icon: FlaskConical, category: 'Language' },
  { name: 'MongoDB', icon: Database, category: 'Database' },
  { name: 'PostgreSQL', icon: Database, category: 'Database' },
  { name: 'REST APIs', icon: HelpCircle, category: 'Backend' },
];

const toolsAndSoft = [
  { name: 'Git', icon: GitBranch, category: 'Version Control' },
  { name: 'Webpack', icon: Package, category: 'Build Tools' },
  { name: 'Problem Solving', icon: HelpCircle, category: 'Soft Skills' },
  { name: 'Team Collaboration', icon: UsersIcon, category: 'Soft Skills' },
  { name: 'Communication', icon: MessageCircle, category: 'Soft Skills' },
  { name: 'Project Management', icon: BarChart2, category: 'Soft Skills' },
  { name: 'Mentoring', icon: Users, category: 'Leadership' },
];

export const Skills: React.FC = () => {
  const { t } = useLanguage();

  const SkillCard = ({ skill, index }: { skill: any; index: number }) => {
    const Icon = skill.icon;
    return (
      <div className="group bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Icon size={20} className="text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {skill.name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {skill.category}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            {t('skills.title')}
          </h2>
          
          <div className="space-y-12">
            {/* Technical Skills */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Technical Skills
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {technicalSkills.map((skill, index) => (
                  <SkillCard key={index} skill={skill} index={index} />
                ))}
              </div>
            </div>

            {/* Tools & Soft Skills */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Tools & Soft Skills
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {toolsAndSoft.map((skill, index) => (
                  <SkillCard key={index} skill={skill} index={index} />
                ))}
              </div>
            </div>
          </div>

          {/* Skills Summary */}
          <div className="mt-12 bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Expertise Areas
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Full-Stack Development
                </span>
                <span className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Frontend Architecture
                </span>
                <span className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                  API Development
                </span>
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Database Design
                </span>
                <span className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                  DevOps & Cloud
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};