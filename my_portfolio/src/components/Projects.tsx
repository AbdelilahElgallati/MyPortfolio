import React, { useState } from 'react';
import { Github } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';
import { CaseStudyModal, CaseStudy } from './CaseStudyModal';

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
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  
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
      results: 'Built a working private internship platform with multi-role access, real-time collaboration, multilingual AI assistance, and integrated business workflows. Confidential business metrics are intentionally omitted.',
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
      results: 'Built a functional RAG assistant that answers questions from multiple document types with source attribution, course-specific retrieval, and multilingual responses.',
      improvements: 'Would add hybrid search (combining dense and sparse retrieval), implement query expansion for better recall, add conversation memory for multi-turn interactions, and deploy on Hugging Face Spaces for public access.',
      technologies: ['FastAPI', 'React', 'TypeScript', 'FAISS', 'Sentence-Transformers', 'Groq', 'Llama 3.3', 'LangChain', 'Streamlit'],
      githubUrl: 'https://github.com/AbdelilahElgallati/Course-Materials-RAG'
    }
  };
  const localizedCaseStudies = language === 'fr' ? {
    ...caseStudies,
    IVEP: {
      ...caseStudies.IVEP,
      name: 'IVEP - Plateforme d’exposition virtuelle',
      problem: 'La création d’une plateforme SaaS d’expositions virtuelles assistée par IA nécessitait plusieurs rôles utilisateurs, des interactions en temps réel, un support multilingue et une logique métier complexe.',
      approach: 'Mise en place d’une architecture modulaire avec FastAPI et plus de 30 modules backend. Développement d’un assistant conversationnel RAG avec Sentence-Transformers et ChromaDB, ainsi que de fonctions temps réel avec WebSockets/SSE et Redis pub/sub.',
      architecture: 'Backend FastAPI avec MongoDB, Redis, ChromaDB, Docker et Nginx. Frontend Next.js/TypeScript. Pipelines IA avec Whisper pour la transcription, NLLB-200 pour la traduction et LangChain pour l’orchestration.',
      results: 'Développement d’une plateforme privée fonctionnelle avec gestion multi-rôles, collaboration temps réel, assistance IA multilingue et flux métier intégrés. Les métriques commerciales confidentielles sont volontairement exclues.',
      improvements: 'Ajouter une orchestration Kubernetes, une recherche hybride dense/sparse, une supervision Grafana/Prometheus et un système de recommandation enrichi par le filtrage collaboratif.'
    },
    'MM-CTR': {
      ...caseStudies['MM-CTR'],
      name: 'Challenge WWW 2025 MM-CTR',
      problem: 'Prédire le taux de clic pour la recommandation de vidéos courtes à partir de données multimodales (images, texte et variables catégorielles) sur 3,6M d’échantillons d’entraînement.',
      approach: 'Développement d’un modèle hybride combinant les embeddings CLIP pour la compréhension multimodale et des architectures spécialisées pour la prédiction CTR. Les vecteurs CLIP 512D sont projetés en caractéristiques normalisées 128D.',
      architecture: 'Encodeur CLIP (512D → 128D), fusion, Transformer de 2 couches et 8 têtes, Deep Cross Network et couches denses. Entraînement sur 2 GPU Tesla T4 avec accumulation de gradients.',
      results: 'AUC de validation de 0,9495 sur le leaderboard de la compétition. Le pipeline a traité 3,6M d’échantillons d’entraînement.',
      improvements: 'Tester des mécanismes d’attention intermodale, une sélection de caractéristiques plus avancée, des ensembles de modèles et de nouvelles architectures multimodales.'
    },
    RAG: {
      ...caseStudies.RAG,
      name: 'Assistant RAG pour supports de cours',
      problem: 'Les étudiants avaient besoin d’un assistant capable d’interroger des supports de cours PDF, Markdown et des transcriptions YouTube, avec attribution des sources et support multilingue.',
      approach: 'Construction d’un système RAG avec Sentence-Transformers, FAISS et MMR. La récupération est limitée au cours sélectionné avec un repli global, puis les réponses sont générées via Llama 3.3 70B et Groq.',
      architecture: 'Backend FastAPI et frontend React. Pipeline : extraction, découpage, embeddings, index FAISS, recherche, réordonnancement MMR, assemblage du contexte et génération.',
      results: 'Assistant fonctionnel capable de répondre à partir de plusieurs formats avec attribution des sources et prise en charge de requêtes liées à un cours.',
      improvements: 'Ajouter une recherche hybride, l’expansion des requêtes, une mémoire conversationnelle multi-tour et un déploiement public.'
    }
  } : caseStudies;

  const openCaseStudy = (projectName: string) => {
    const caseStudyKey: keyof typeof caseStudies | null = projectName.includes('IVEP') ? 'IVEP' :
                       projectName.includes('MM-CTR') ? 'MM-CTR' : 
                       projectName.includes('RAG') ? 'RAG' : null;
    
    if (caseStudyKey && localizedCaseStudies[caseStudyKey]) {
      setSelectedCaseStudy(localizedCaseStudies[caseStudyKey]);
    }
  };

  return (
    <section id="projects" className="surface-page py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-primary mb-4">
              {t('projects.title')}
            </h2>
            <p className="mx-auto text-center text-lg text-secondary">
              {t('projects.description')}
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-primary mb-8 text-center">
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
            <h3 className="text-2xl font-semibold text-primary mb-8 text-center">
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
              className="inline-flex items-center space-x-2 bg-slate-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Github size={18} />
              <span>{t('projects.viewMore')}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedCaseStudy && (
        <CaseStudyModal
          isOpen={true}
          onClose={() => setSelectedCaseStudy(null)}
          caseStudy={selectedCaseStudy}
        />
      )}
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
    <div className={`surface-card rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border group hover:-translate-y-1 ${isFeatured ? 'ring-2 ring-primary-500/30 dark:ring-primary-400/30' : ''}`}>
      <div className="p-6 h-full flex flex-col">
        <div className="flex items-start gap-4 mb-5">
          {/* Bigger Project Icon/Avatar */}
          <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary-600 to-teal-600 rounded-xl flex items-center justify-center text-white text-2xl shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300" aria-hidden="true">
            {getProjectIcon(project.name)}
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-bold text-primary group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors leading-tight line-clamp-2">
                {project.name}
              </h3>
              {isFeatured && (
                <span className="bg-primary-700 text-white px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ml-3 shadow-md">
                  ⭐ {t('projects.featured')}
                </span>
              )}
            </div>
          </div>
        </div>

        <p className="text-secondary mb-5 flex-1 leading-relaxed text-sm min-h-[60px]">
          {project.description}
        </p>

        <div className="space-y-4">
          {project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 5).map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="surface-tag text-primary-800 dark:text-primary-200 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 5 && (
                <span className="text-muted text-xs px-3 py-1.5 font-medium">
                  +{project.technologies.length - 5}
                </span>
              )}
            </div>
          )}

          <div className="flex items-center justify-between pt-3 mt-3 border-t border-default">
            <div className="flex items-center gap-3">
              {hasGithubUrl ? (
                <a
                  href={project.githubUrl!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-secondary hover:text-primary-700 dark:hover:text-primary-300 transition-colors text-sm font-medium group/link"
                  title={t('projects.viewGithub')}
                >
                  <Github size={16} className="group-hover/link:scale-110 transition-transform" />
                  <span>{t('projects.code')}</span>
                </a>
              ) : (
                <span className="text-muted text-xs italic">
                  {t('projects.private')}
                </span>
              )}
              
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-teal-700 dark:text-teal-300 hover:text-teal-800 dark:hover:text-teal-200 transition-colors group/demo"
                >
                  <span className="group-hover/demo:scale-110 transition-transform">🚀</span>
                  <span>{t('projects.live')}</span>
                </a>
              )}
            </div>
            
            {isFeatured && onViewDetails && (
              <button
                onClick={() => onViewDetails(project.name)}
                className="surface-hover-primary min-h-11 text-xs text-primary-700 dark:text-primary-300 hover:text-primary-800 dark:hover:text-primary-200 font-medium px-2 py-1 rounded transition-all"
              >
                {t('projects.details')} →
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};