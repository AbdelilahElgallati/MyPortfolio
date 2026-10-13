import React from 'react';
import { Mail, MapPin, Briefcase, Phone, Github, Linkedin, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('contact.title')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t('contact.description')}
            </p>
          </div>

          {/* Contact Information Card */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 mx-auto max-w-2xl">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              {t('contact.info.title')}
            </h3>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <Mail className="text-blue-600 dark:text-blue-400" size={24} />
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {t('contact.info.email')}
                  </h4>
                  <a
                    href="mailto:abdelilah.elgallati6@gmail.com"
                    className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    abdelilah.elgallati6@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <Phone className="text-green-600 dark:text-green-400" size={24} />
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {t('contact.info.phone')}
                  </h4>
                  <a
                    href="tel:+212708135350"
                    className="text-gray-900 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors"
                  >
                    {t('contact.info.phoneValue')}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <MapPin className="text-red-600 dark:text-red-400" size={24} />
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {t('contact.info.location')}
                  </h4>
                  <p className="text-gray-900 dark:text-white">
                    {t('contact.info.locationValue')}
                  </p>
                </div>
              </div>

              {/* Availability */}
              <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <Briefcase className="text-purple-600 dark:text-purple-400" size={24} />
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {t('contact.info.availability')}
                  </h4>
                  <p className="text-gray-900 dark:text-white">
                    {t('contact.info.availabilityValue')}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 text-center">
                Connect with me
              </h4>
              <div className="flex justify-center space-x-6">
                <a
                  href={t('contact.info.linkedin')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                  <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                
                <a
                  href={t('contact.info.github')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-2 bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
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