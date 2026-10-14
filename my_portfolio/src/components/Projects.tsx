import React from 'react';
import { Github } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

interface Project {
  name: string;
  description: string;
  technologies: string[];
  githubUrl: string | null;
  demoUrl: string | null;
  featured?: boolean;
}

export const Projects: React.FC = () => {
  const { t, language } = useLanguage();
  const allProjects = translations[language].projects.items as Project[];
  
  // Featured projects: only the top 3 AI/Data relevant projects
  const featuredProjects = allProjects.filter(p => p.featured).slice(0, 3);
  
  // Other projects ordered by AI/Data relevance
  const otherProjects = allProjects
    .filter(p => !p.featured)
    .slice(0, 6); // Limit to 6 other projects for clean layout

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('projects.title')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {t('projects.description')}
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
              {t('projects.featured')}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <ProjectCard key={index} project={project} isFeatured={true} />
              ))}
            </div>
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
              {t('projects.others')}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherProjects.map((project, index) => (
                <ProjectCard key={index} project={project} isFeatured={false} />
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="https://github.com/AbdelilahElgallati"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-gray-700 to-gray-800 text-white px-6 py-3 rounded-lg font-medium hover:from-gray-800 hover:to-gray-900 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Github size={18} />
              <span>View More on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
  isFeatured: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isFeatured }) => {
  const { t } = useLanguage();
  const hasGithubUrl = project.githubUrl && project.githubUrl !== null;

  // Project icon mapping for better visual representation
  const getProjectIcon = (name: string) => {
    if (name.includes('IVEP') || name.includes('Virtual')) return '🏢';
    if (name.includes('MM-CTR') || name.includes('CTR')) return '🎯';
    if (name.includes('RAG') || name.includes('Course')) return '📚';
    if (name.includes('MovieRec') || name.includes('Movie')) return '🎬';
    if (name.includes('AutoToll') || name.includes('Vehicle')) return '🚗';
    if (name.includes('Internship')) return '💼';
    if (name.includes('Anime')) return '🎌';
    return '💻';
  };
  
  return (
    <div className={`bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group ${isFeatured ? 'ring-2 ring-blue-500/20' : ''}`}>
      <div className="p-6 h-full flex flex-col">
        <div className="flex items-start gap-4 mb-4">
          {/* Bigger Project Icon/Avatar */}
          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-2xl shadow-md">
            {getProjectIcon(project.name)}
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
                {project.name}
              </h3>
              {isFeatured && (
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap ml-2">
                  {t('projects.featured')}
                </span>
              )}
            </div>
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1 leading-relaxed text-sm">
          {project.description}
        </p>

        <div className="space-y-4">
          {project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.slice(0, 6).map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-2 py-1 rounded-md text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 6 && (
                <span className="text-gray-500 dark:text-gray-400 text-xs px-2 py-1">
                  +{project.technologies.length - 6} more
                </span>
              )}
            </div>
          )}

          <div className="flex items-center justify-between">
            {hasGithubUrl ? (
              <a
                href={project.githubUrl!}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-medium"
                title={t('projects.viewGithub')}
              >
                <Github size={16} />
                <span>View Code</span>
              </a>
            ) : (
              <span className="text-gray-400 dark:text-gray-500 text-xs italic">
                {t('projects.privateRepo')}
              </span>
            )}
            
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors"
              >
                🚀 {t('projects.liveDemo')}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};