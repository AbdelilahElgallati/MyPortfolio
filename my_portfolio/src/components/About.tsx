import React from "react";
import { Download } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../utils/translations";
import profileImage from "../ressources/images/My_Profile_Image.png";

export const About: React.FC = () => {
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

  // Access the translations object directly to get array data
  const currentTranslations = translations[language];
  const languages = currentTranslations.about.languages;

  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            {t("about.title")}
          </h2>

          <div className="grid lg:grid-cols-3 gap-8 items-center">
            
            {/* Profile Image */}
            <div className="text-center">
              <div className="w-48 h-48 mx-auto rounded-2xl overflow-hidden shadow-lg border-4 border-white dark:border-gray-800 mb-4">
                <img
                  src={profileImage}
                  alt={t("hero.name")}
                  className="w-full h-full object-cover"
                  style={{
                    objectPosition: "50% 20%",
                    transform: "scale(1)",
                  }}
                />
              </div>
              
              {/* CV Download */}
              <div className="flex flex-col items-center gap-2">
                <button
                  onClick={() => handleDownloadCV()}
                  className="inline-flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  <Download size={16} />
                  <span>{t('hero.cv')}</span>
                </button>
                
                <button 
                  onClick={() => handleDownloadCV(language === 'en' ? 'fr' : 'en')}
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {t('hero.cvSecondary')}
                </button>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Bio - Only essential info */}
              <div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  AI & Data engineer with dual Master's degrees (Sorbonne Paris Nord & USMBA, July 2026). 
                  I build production-oriented AI systems - from 3.6M-sample ML pipelines to full-stack SaaS platforms with RAG and real-time features.
                </p>
              </div>

              {/* Key Info Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Education & Status */}
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-200 dark:border-blue-700">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Education & Status</h3>
                  <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <div>🎓 Dual Master's degrees (2026)</div>
                    <div>🚀 Available immediately</div>
                    <div>🌍 Open to relocation worldwide</div>
                  </div>
                </div>

                {/* Languages */}
                <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg border border-green-200 dark:border-green-700">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">{t("about.languagesTitle")}</h3>
                  <div className="space-y-1 text-sm">
                    {languages.map((lang: any, index: number) => (
                      <div key={index} className="flex justify-between">
                        <span className="text-gray-700 dark:text-gray-300">{lang.name}</span>
                        <span className="text-gray-600 dark:text-gray-400">{lang.level}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Seeking */}
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/30 dark:to-blue-900/30 p-4 rounded-lg border border-purple-200 dark:border-purple-700">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Currently Seeking</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Junior roles in AI/ML Engineering, GenAI/NLP, Data Science, or Full-Stack Development
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
