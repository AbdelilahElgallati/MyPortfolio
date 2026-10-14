import React from 'react';
import { Brain, Server, Monitor } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Skills: React.FC = () => {
  const { t } = useLanguage();

  // Enhanced skill list with more essential technologies
  const coreSkills = [
    {
      category: 'AI & Machine Learning',
      icon: Brain,
      color: 'blue',
      skills: ['Python', 'PyTorch', 'TensorFlow', 'Scikit-learn', 'RAG Systems', 'LangChain', 'Hugging Face', 'CLIP', 'Whisper', 'OpenCV', 'Pandas', 'NumPy']
    },
    {
      category: 'Backend & APIs',
      icon: Server,
      color: 'purple',  
      skills: ['FastAPI', 'Node.js', 'Express.js', 'Flask', 'MongoDB', 'PostgreSQL', 'Redis', 'Docker', 'WebSockets', 'REST APIs', 'JWT Auth', 'Nginx']
    },
    {
      category: 'Frontend & Tools',
      icon: Monitor,
      color: 'green',
      skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Three.js', 'Git & GitHub', 'Linux', 'Vercel', 'Postman', 'CI/CD', 'Prisma']
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      purple: 'from-purple-500 to-purple-600',
      green: 'from-green-500 to-green-600'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              {t('skills.title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Core technologies for production-oriented AI systems
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {coreSkills.map((category, index) => {
              const Icon = category.icon;
              const gradient = getColorClasses(category.color);
              
              return (
                <div key={index} className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-10 h-10 bg-gradient-to-r ${gradient} rounded-lg flex items-center justify-center`}>
                      <Icon size={20} className="text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white">
                      {category.category}
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="bg-gray-50 dark:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 text-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                        {skill}
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