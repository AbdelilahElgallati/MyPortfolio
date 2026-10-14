import React from 'react';
import { Brain, Cpu, Server, Monitor } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Skills: React.FC = () => {
  const { t } = useLanguage();

  // AI/ML focused skill categories
  const skillCategories = [
    {
      key: 'ai_genai',
      icon: Brain,
      color: 'primary',
      skills: ['Python', 'PyTorch', 'TensorFlow', 'Hugging Face', 'LangChain', 'LlamaIndex', 'RAG Systems', 'Sentence-Transformers', 'CLIP', 'Whisper', 'NLLB-200']
    },
    {
      key: 'ml_data',
      icon: Cpu,
      color: 'teal',
      skills: ['Scikit-learn', 'Pandas', 'NumPy', 'FAISS', 'ChromaDB', 'MLflow', 'SQL', 'PostgreSQL', 'MongoDB', 'OpenCV', 'Matplotlib']
    },
    {
      key: 'backend_mlops',
      icon: Server,
      color: 'teal',
      skills: ['FastAPI', 'Node.js', 'Express.js', 'Flask', 'Docker', 'Redis', 'WebSockets', 'REST APIs', 'JWT Auth', 'Git', 'Linux']
    },
    {
      key: 'frontend',
      icon: Monitor,
      color: 'accent',
      skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Three.js', 'HTML/CSS', 'Vercel', 'Netlify']
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      primary: 'from-primary-600 to-primary-800',
      teal: 'from-teal-600 to-teal-800',
      accent: 'from-accent-500 to-accent-700'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="surface-subtle py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold text-primary mb-3">
              {t('skills.title')}
            </h2>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              const gradient = getColorClasses(category.color);
              
              return (
                <div key={index} className="surface-card rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-10 h-10 bg-gradient-to-r ${gradient} rounded-lg flex items-center justify-center`}>
                      <Icon size={20} className="text-white" />
                    </div>
                    <h3 className="font-bold text-primary">
                      {t(`skills.categories.${category.key}`)}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="surface-control surface-hover-primary px-3 py-2 rounded-md text-sm font-medium text-secondary transition-colors">
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