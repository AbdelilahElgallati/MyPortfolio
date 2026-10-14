import React, { useState } from 'react';
import { Github } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';
import { CaseStudyModal } from './CaseStudyModal';

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
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<any>(null);
  
  // Featured projects: only the top 3 AI/Data relevant projects
  const featuredProjects = allProjects.filter(p => p.featured).slice(0, 3);
  
  // Other projects ordered by AI/Data relevance
  const otherProjects = allProjects
    .filter(p => !p.featured)
    .slice(0, 6); // Limit to 6 other projects for clean layout

  // Case studies for featured projects
  const caseStudies = {
    'IVEP': {
      name: 'IVEP - Virtual Exhibition Platform',
      problem: 'Creating an AI-powered SaaS platform for virtual exhibitions required handling multiple user roles (Admin, Organizer, Enterprise, Visitor), real-time interactions, multilingual support, and complex business logic while maintaining scalability and performance.',
      approach: 'Built a microservices-inspired architecture using FastAPI with 30+ modular backend services. Implemented RAG-based conversational AI using Sentence-Transformers and ChromaDB for scoped assistance. Added real-time features with WebSockets/SSE and Redis pub/sub for chat and notifications.',
      architecture: 'FastAPI backend with MongoDB, Redis for caching/pub-sub, ChromaDB for vector storage, Docker containerization, Nginx reverse proxy. Frontend with Next.js and TypeScript. AI pipeline with Whisper (transcription), NLLB-200 (translation), and LangChain orchestration.',
      results: 'Successfully delivered a production-ready platform with 4 distinct user portals, real-time chat, multilingual AI assistance, and integrated payment processing. Private internship project with confidential business metrics.',
      improvements: 'Would add Kubernetes orchestration for better scalability, implement more sophisticated vector search with hybrid retrieval (dense + sparse), add comprehensive monitoring with Grafana/Prometheus, and enhance the recommendation system with collaborative filtering.',
      technologies: ['FastAPI', 'Next.js', 'TypeScript', 'MongoDB', 'Redis', 'ChromaDB', 'Whisper', 'NLLB-200', 'LangChain', 'Sentence-Transformers', 'Docker', 'Nginx']
    },
    'MM-CTR': {
      name: 'WWW 2025 MM-CTR Challenge',
      problem: 'Predicting click-through rates for short-video recommendations using multimodal data (images, text, categorical features) on a large-scale dataset of 3.6M training samples while achieving high AUC performance in a competitive setting.',
      approach: 'Developed a hybrid deep learning model combining CLIP embeddings for multimodal understanding with specialized CTR prediction architectures. Used CLIP to encode images and text into 512D vectors, then compressed to normalized 128D features for efficiency.',
      architecture: 'CLIP encoder (512D → 128D) → Feature fusion → 2-layer Transformer (8 heads) + Deep Cross Network + Dense layers. Categorical embeddings handled separately and concatenated. Trained on 2x Tesla T4 GPUs with gradient accumulation.',
      results: 'Achieved 0.9495 validation AUC on the competition leaderboard. Successfully handled 3.6M training samples with efficient batch processing and achieved competitive performance in the WWW 2025 challenge.',
      improvements: 'Would experiment with attention mechanisms between modalities, implement more sophisticated feature selection, try ensemble methods, and explore newer multimodal architectures like ALBEF or BLIP for better cross-modal understanding.',
      technologies: ['PyTorch', 'CLIP', 'Transformers', 'Deep Cross Network', 'Hugging Face', 'Pandas', 'NumPy', 'Tesla T4 GPUs'],
      githubUrl: 'https://github.com/AbdelilahElgallati/WWW-2025-MM-CTR-Challenge-Task-1-2-Solution'
    },
    'RAG': {
      name: 'Course Materials RAG Assistant',
      problem: 'Students needed an intelligent assistant to query course materials across different formats (PDFs, Markdown, YouTube transcripts) with accurate source attribution and multilingual support, while maintaining context relevance and avoiding hallucinations.',
      approach: 'Built a RAG system using Sentence-Transformers for semantic embeddings (768D), FAISS for efficient vector search, and MMR for diversity. Implemented course-scoped retrieval with fallback mechanisms and integrated Llama 3.3 70B via Groq API.',
      architecture: 'FastAPI backend with React frontend. Document processing pipeline: text extraction → chunking → embedding (Sentence-Transformers) → FAISS indexing. Query processing: embedding → similarity search → MMR reranking → context assembly → LLM generation.',
      results: 'Successfully deployed a functional RAG assistant capable of answering questions from multiple document types with proper source attribution. Handles course-specific queries with high accuracy and provides multilingual responses.',
      improvements: 'Would add hybrid search (combining dense and sparse retrieval), implement query expansion for better recall, add conversation memory for multi-turn interactions, and deploy on Hugging Face Spaces for public access.',
      technologies: ['FastAPI', 'React', 'TypeScript', 'FAISS', 'Sentence-Transformers', 'Groq', 'Llama 3.3', 'LangChain', 'Streamlit'],
      githubUrl: 'https://github.com/AbdelilahElgallati/Course-Materials-RAG'
    }
  };

  const openCaseStudy = (projectName: string) => {
    const caseStudyKey = projectName.includes('IVEP') ? 'IVEP' : 
                       projectName.includes('MM-CTR') ? 'MM-CTR' : 
                       projectName.includes('RAG') ? 'RAG' : null;
    
    if (caseStudyKey && caseStudies[caseStudyKey]) {
      setSelectedCaseStudy(caseStudies[caseStudyKey]);
    }
  };

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
                <ProjectCard key={index} project={project} isFeatured={true} onViewDetails={openCaseStudy} />
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
                <ProjectCard key={index} project={project} isFeatured={false} onViewDetails={null} />
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

      {/* Case Study Modal */}
      <CaseStudyModal 
        isOpen={!!selectedCaseStudy} 
        onClose={() => setSelectedCaseStudy(null)} 
        caseStudy={selectedCaseStudy} 
      />
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
  isFeatured: boolean;
  onViewDetails: ((projectName: string) => void) | null;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isFeatured, onViewDetails }) => {
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
    <div className={`bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group hover:-translate-y-1 ${isFeatured ? 'ring-2 ring-blue-500/20 dark:ring-blue-400/20' : ''}`}>
      <div className="p-6 h-full flex flex-col">
        <div className="flex items-start gap-4 mb-5">
          {/* Bigger Project Icon/Avatar */}
          <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-2xl shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
            {getProjectIcon(project.name)}
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight line-clamp-2">
                {project.name}
              </h3>
              {isFeatured && (
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ml-3 shadow-md">
                  ⭐ {t('projects.featured')}
                </span>
              )}
            </div>
          </div>
        </div>

        <p className="text-gray-700 dark:text-gray-300 mb-5 flex-1 leading-relaxed text-sm min-h-[60px]">
          {project.description}
        </p>

        <div className="space-y-4">
          {project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 5).map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 5 && (
                <span className="text-gray-500 dark:text-gray-400 text-xs px-3 py-1.5 font-medium">
                  +{project.technologies.length - 5}
                </span>
              )}
            </div>
          )}

          <div className="flex items-center justify-between pt-3 mt-3 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3">
              {hasGithubUrl ? (
                <a
                  href={project.githubUrl!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-medium group/link"
                  title={t('projects.viewGithub')}
                >
                  <Github size={16} className="group-hover/link:scale-110 transition-transform" />
                  <span>Code</span>
                </a>
              ) : (
                <span className="text-gray-400 dark:text-gray-500 text-xs italic">
                  Private
                </span>
              )}
              
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors group/demo"
                >
                  <span className="group-hover/demo:scale-110 transition-transform">🚀</span>
                  <span>Live</span>
                </a>
              )}
            </div>
            
            {isFeatured && onViewDetails && (
              <button
                onClick={() => onViewDetails(project.name)}
                className="text-xs text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 px-2 py-1 rounded transition-all"
              >
                View Details →
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};