import React from 'react';
import { X, Github, ExternalLink } from 'lucide-react';

interface CaseStudy {
  name: string;
  problem: string;
  approach: string;
  architecture: string;
  results: string;
  improvements: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
}

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  caseStudy: CaseStudy;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ isOpen, onClose, caseStudy }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{caseStudy.name}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            <X size={24} className="text-gray-500 dark:text-gray-400" />
          </button>
        </div>
        
        <div className="p-6 space-y-8">
          {/* Problem */}
          <section>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
              Problem
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{caseStudy.problem}</p>
          </section>

          {/* Approach */}
          <section>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
              Approach
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{caseStudy.approach}</p>
          </section>

          {/* Architecture */}
          <section>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
              Architecture
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{caseStudy.architecture}</p>
          </section>

          {/* Results */}
          <section>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
              Results
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{caseStudy.results}</p>
          </section>

          {/* Technologies */}
          <section>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {caseStudy.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-3 py-2 rounded-lg text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Future Improvements */}
          <section>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
              What I Would Improve
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{caseStudy.improvements}</p>
          </section>

          {/* Links */}
          <section className="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            {caseStudy.githubUrl && (
              <a
                href={caseStudy.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gray-900 dark:bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
              >
                <Github size={18} />
                View Code
              </a>
            )}
            {caseStudy.demoUrl && (
              <a
                href={caseStudy.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};