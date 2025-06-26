import React from 'react';
import { Code, Database, PenTool as Tool, Users, Github, GitBranch, Cloud, Package, FlaskConical, FileCode, Feather, MessageCircle, Users as UsersIcon, BarChart2, BookOpen, HelpCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const skillList1 = [
  { name: 'React', icon: Code },
  { name: 'TypeScript', icon: FileCode },
  { name: 'Vue.js', icon: Code },
  { name: 'Tailwind CSS', icon: Feather },
  { name: 'JavaScript', icon: FileCode },
  { name: 'Node.js', icon: Package },
  { name: 'Python', icon: FlaskConical },
  { name: 'MongoDB', icon: Database },
  { name: 'PostgreSQL', icon: Database },
  { name: 'REST APIs', icon: HelpCircle },
];

const skillList2 = [
  { name: 'Git', icon: GitBranch },
  { name: 'Docker', icon: Package },
  { name: 'AWS', icon: Cloud },
  { name: 'Webpack', icon: Package },
  { name: 'Jest', icon: BookOpen },
  { name: 'Problem Solving', icon: HelpCircle },
  { name: 'Team Collaboration', icon: UsersIcon },
  { name: 'Communication', icon: MessageCircle },
  { name: 'Project Management', icon: BarChart2 },
  { name: 'Mentoring', icon: Users },
];

export const Skills: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-12 drop-shadow-lg">
          {t('skills.title')}
        </h2>
        <div className="space-y-10">
          {/* Row 1 */}
          <div className="overflow-hidden relative">
            <div className="flex animate-marquee space-x-6 w-max">
              {skillList1.concat(skillList1).map((skill, idx) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center space-x-2 bg-gray-50 dark:bg-gray-800 rounded-full px-6 py-3 shadow-md hover:scale-105 transition-transform border border-gray-200 dark:border-gray-700"
                  >
                    <Icon size={24} className="text-blue-500 dark:text-blue-400" />
                    <span className="font-semibold text-gray-700 dark:text-gray-300 text-lg">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Row 2 (opposite direction) */}
          <div className="overflow-hidden relative">
            <div className="flex animate-marquee-reverse space-x-6 w-max">
              {skillList2.concat(skillList2).map((skill, idx) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center space-x-2 bg-gray-50 dark:bg-gray-800 rounded-full px-6 py-3 shadow-md hover:scale-105 transition-transform border border-gray-200 dark:border-gray-700"
                  >
                    <Icon size={24} className="text-purple-500 dark:text-purple-400" />
                    <span className="font-semibold text-gray-700 dark:text-gray-300 text-lg">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* Animations */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 30s linear infinite;
        }
      `}</style>
    </section>
  );
};