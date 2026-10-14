import React, { useEffect, useRef } from 'react';
import { X, Github, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export interface CaseStudy {
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
  const { t } = useLanguage();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    previousFocusRef.current = document.activeElement instanceof HTMLElement
      ? document.activeElement
      : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }

      if (event.key !== 'Tab' || !dialogRef.current) return;

      const focusableElements = dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (!firstElement || !lastElement) return;
      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocusRef.current?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      role="presentation"
    >
      <div
        ref={dialogRef}
        className="surface-card rounded-xl max-w-4xl w-full max-h-[calc(100dvh-2rem)] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-title"
      >
        <div className="sticky top-0 surface-card border-b border-default p-4 sm:p-6 flex items-center justify-between gap-4 z-10">
          <h2 id="case-study-title" className="text-xl sm:text-2xl font-bold text-primary">{caseStudy.name}</h2>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="surface-hover-primary min-w-11 min-h-11 p-2 rounded-lg transition-colors"
            aria-label={t('caseStudy.close')}
          >
            <X size={24} className="text-secondary" aria-hidden="true" />
          </button>
        </div>
        
        <div className="p-4 sm:p-6 space-y-8">
          {/* Problem */}
          <section>
            <h3 className="text-xl font-semibold text-primary mb-3 flex items-center">
              <span className="w-2 h-2 bg-accent-500 rounded-full mr-3" aria-hidden="true"></span>
              {t('caseStudy.problem')}
            </h3>
            <p className="text-secondary leading-relaxed">{caseStudy.problem}</p>
          </section>

          {/* Approach */}
          <section>
            <h3 className="text-xl font-semibold text-primary mb-3 flex items-center">
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-3" aria-hidden="true"></span>
              {t('caseStudy.approach')}
            </h3>
            <p className="text-secondary leading-relaxed">{caseStudy.approach}</p>
          </section>

          {/* Architecture */}
          <section>
            <h3 className="text-xl font-semibold text-primary mb-3 flex items-center">
              <span className="w-2 h-2 bg-teal-500 rounded-full mr-3" aria-hidden="true"></span>
              {t('caseStudy.architecture')}
            </h3>
            <p className="text-secondary leading-relaxed">{caseStudy.architecture}</p>
          </section>

          {/* Results */}
          <section>
            <h3 className="text-xl font-semibold text-primary mb-3 flex items-center">
              <span className="w-2 h-2 bg-teal-600 rounded-full mr-3" aria-hidden="true"></span>
              {t('caseStudy.results')}
            </h3>
            <p className="text-secondary leading-relaxed">{caseStudy.results}</p>
          </section>

          {/* Technologies */}
          <section>
            <h3 className="text-xl font-semibold text-primary mb-3">{t('caseStudy.technologies')}</h3>
            <div className="flex flex-wrap gap-2">
              {caseStudy.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="surface-tag text-primary-800 dark:text-primary-200 px-3 py-2 rounded-lg text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Future Improvements */}
          <section>
            <h3 className="text-xl font-semibold text-primary mb-3 flex items-center">
              <span className="w-2 h-2 bg-accent-500 rounded-full mr-3" aria-hidden="true"></span>
              {t('caseStudy.improvements')}
            </h3>
            <p className="text-secondary leading-relaxed">{caseStudy.improvements}</p>
          </section>

          {/* Links */}
          <section className="flex flex-wrap gap-4 pt-4 border-t border-default" aria-label={t('caseStudy.links')}>
            {caseStudy.githubUrl && (
              <a
                href={caseStudy.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-800 text-white px-4 py-3 rounded-lg hover:bg-slate-700 transition-colors"
              >
                <Github size={18} />
                {t('caseStudy.code')}
              </a>
            )}
            {caseStudy.demoUrl && (
              <a
                href={caseStudy.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary-700 text-white px-4 py-3 rounded-lg hover:bg-primary-800 transition-colors"
              >
                <ExternalLink size={18} />
                {t('caseStudy.demo')}
              </a>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};