import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AE</span>
                </div>
                <span className="font-bold text-xl">{t('hero.name')}</span>
              </div>
              <p className="text-gray-400">
                {t('hero.title')} passionate about creating amazing digital experiences.
              </p>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="font-bold text-lg">{t('footer.contact')}</h3>
              <div className="space-y-2">
                <a
                  href="mailto:abdelilah.elgallati6@gmail.com"
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Mail size={18} />
                  <span>{t('footer.email')}</span>
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Connect</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/AbdelilahElgallati"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/abdelilah-elgallati"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">
              © {currentYear} {t('hero.name')}. {t('footer.rights')}
            </p>
            <div className="flex items-center space-x-1 text-gray-400 text-sm mt-4 md:mt-0">
              <span>Made with</span>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <span>and lots of coffee</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};