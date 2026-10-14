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
    <section id="about" className="surface-page py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-center text-primary mb-10">
            {t("about.title")}
          </h2>

          <div className="grid lg:grid-cols-3 gap-8 items-center">
            
            {/* Profile Image */}
            <div className="text-center">
              <div className="w-48 h-48 mx-auto rounded-2xl overflow-hidden shadow-lg border-4 border-white dark:border-slate-700 mb-4">
                <img
                  src={profileImage}
                  alt={t("hero.name")}
                  loading="lazy"
                  decoding="async"
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
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary-700 text-white rounded-lg font-medium hover:bg-primary-800 transition-colors"
                >
                  <Download size={16} />
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

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Bio - Only essential info */}
              <div>
                <p className="text-secondary leading-relaxed max-w-3xl">
                  {t('about.bio')}
                </p>
              </div>

              {/* Key Info Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Education & Status */}
                <div className="surface-tint-primary p-5 rounded-lg border border-primary-200 dark:border-primary-700">
                  <h3 className="font-semibold text-primary mb-3">{t('about.educationStatusTitle')}</h3>
                  <div className="space-y-2 text-sm text-secondary">
                    <div>🎓 Dual Master's degrees (2026)</div>
                    <div>🚀 {t('about.available')}</div>
                    <div>🌍 {t('about.relocation')}</div>
                  </div>
                </div>

                {/* Languages */}
                <div className="surface-tint-teal p-5 rounded-lg border border-teal-200 dark:border-teal-700">
                  <h3 className="font-semibold text-primary mb-3">{t("about.languagesTitle")}</h3>
                  <div className="space-y-1 text-sm">
                    {languages.map((lang, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="text-secondary">{lang.name}</span>
                        <span className="text-muted">{lang.level}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Seeking */}
              <div className="surface-tint-gradient p-5 rounded-lg border border-teal-200 dark:border-teal-700">
                <h3 className="font-semibold text-primary mb-2">{t('about.currentlySeekingTitle')}</h3>
                <p className="text-sm text-secondary">
                  {t('about.currentlySeeking')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
