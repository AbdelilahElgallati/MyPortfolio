import React from 'react';
import { Mail, MapPin, Briefcase, Phone, Github, Linkedin, ExternalLink, Download } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Contact: React.FC = () => {
  const { t, language } = useLanguage();

  const handleDownloadCV = (lang?: 'en' | 'fr') => {
    const targetLang = lang || language;
    const cvPath = targetLang === 'fr' ? '/cv/Abdelilah_Elgallati_CV_FR.pdf' : '/cv/Abdelilah_Elgallati_CV_EN.pdf';
    const fileName = targetLang === 'fr' ? 'Abdelilah_Elgallati_CV_FR.pdf' : 'Abdelilah_Elgallati_CV_EN.pdf';
    
    const link = document.createElement("a");
    link.href = cvPath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="surface-subtle py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-primary mb-4">
              {t('contact.title')}
            </h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              {t('contact.description')}
            </p>
          </div>

          {/* Contact Information Card */}
          <div className="surface-card rounded-xl p-6 sm:p-8 mx-auto max-w-2xl">
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">
              {t('contact.info.title')}
            </h3>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center space-x-4 p-4 bg-secondary rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900/40 transition-colors">
                <Mail className="text-primary-700 dark:text-primary-300" size={24} />
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-secondary">
                    {t('contact.info.email')}
                  </h4>
                  <a
                    href="mailto:abdelilah.elgallati6@gmail.com"
                    className="text-primary hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                  >
                    abdelilah.elgallati6@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-4 p-4 bg-secondary rounded-lg hover:bg-teal-100 dark:hover:bg-teal-900/40 transition-colors">
                <Phone className="text-teal-700 dark:text-teal-300" size={24} />
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-secondary">
                    {t('contact.info.phone')}
                  </h4>
                  <a
                    href="tel:+212708135350"
                    className="text-primary hover:text-teal-700 dark:hover:text-teal-300 transition-colors"
                  >
                    {t('contact.info.phoneValue')}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center space-x-4 p-4 bg-secondary rounded-lg">
                <MapPin className="text-accent-700 dark:text-accent-300" size={24} />
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-secondary">
                    {t('contact.info.location')}
                  </h4>
                  <p className="text-primary">
                    {t('contact.info.locationValue')}
                  </p>
                </div>
              </div>

              {/* Availability */}
              <div className="flex items-center space-x-4 p-4 bg-secondary rounded-lg">
                <Briefcase className="text-teal-700 dark:text-teal-300" size={24} />
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-secondary">
                    {t('contact.info.availability')}
                  </h4>
                  <p className="text-primary">
                    {t('contact.info.availabilityValue')}
                  </p>
                </div>
              </div>
            </div>

            {/* CV Download Section */}
            <div className="mt-8 pt-8 border-t border-default">
              <h4 className="text-lg font-semibold text-primary mb-4 text-center">
                {t('hero.cv')}
              </h4>
              <div className="flex flex-col items-center gap-3">
                <button
                  onClick={() => handleDownloadCV()}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary-700 hover:bg-primary-800 text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Download size={18} />
                  <span>{t('hero.cv')}</span>
                </button>
                
                <button 
                  onClick={() => handleDownloadCV(language === 'en' ? 'fr' : 'en')}
                  className="min-h-11 text-sm text-primary-700 dark:text-primary-300 hover:underline"
                >
                  {t('hero.cvSecondary')}
                </button>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-8 pt-8 border-t border-default">
              <h4 className="text-lg font-semibold text-primary mb-6 text-center">
                Connect with me
              </h4>
              <div className="flex justify-center space-x-6">
                <a
                  href={t('contact.info.linkedin')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-2 bg-primary-700 hover:bg-primary-800 text-white px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                  <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                
                <a
                  href={t('contact.info.github')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Github size={20} />
                  <span>GitHub</span>
                  <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 