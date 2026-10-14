import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Download, ArrowDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { FloatingCube } from './3D/FloatingCube';
import { AnimatedSphere } from './3D/AnimatedSphere';

export const Hero: React.FC = () => {
    const { t, language } = useLanguage();
    const [showScene, setShowScene] = useState(false);

    useEffect(() => {
        const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
        const updateSceneVisibility = () => {
            setShowScene(!motionPreference.matches && window.innerWidth > 640);
        };

        updateSceneVisibility();
        motionPreference.addEventListener('change', updateSceneVisibility);
        window.addEventListener('resize', updateSceneVisibility);

        return () => {
            motionPreference.removeEventListener('change', updateSceneVisibility);
            window.removeEventListener('resize', updateSceneVisibility);
        };
    }, []);

    const scrollToProjects = () => {
        const element = document.querySelector('#projects');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

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
        <section id="hero" className="hero-surface min-h-screen flex items-center justify-center relative overflow-hidden pb-40 sm:pb-32">
            {/* 3D Background */}
            {showScene && (
                <div className="absolute inset-0 opacity-30 dark:opacity-20" aria-hidden="true">
                    <Canvas>
                        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                        <ambientLight intensity={0.5} />
                        <pointLight position={[10, 10, 10]} />
                        <Suspense fallback={null}>
                            <FloatingCube position={[-3, 2, 0]} scale={0.8} color="#0284C7" />
                            <AnimatedSphere position={[3, -1, 0]} scale={0.6} color="#14B8A6" />
                            <FloatingCube position={[0, -3, -2]} scale={0.5} color="#0D9488" />
                            <AnimatedSphere position={[-2, -2, -1]} scale={0.4} color="#F59E0B" />
                        </Suspense>
                        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
                    </Canvas>
                </div>
            )}

            {/* Background Pattern for Light Mode */}
            <div className="absolute inset-0 opacity-5 dark:opacity-0" aria-hidden="true">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 25% 25%, var(--color-primary-600) 2px, transparent 2px),
                             radial-gradient(circle at 75% 75%, var(--color-teal-600) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}></div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 text-center z-10 relative">
                <div className="max-w-4xl mx-auto space-y-6">
                    {/* Name & Title */}
                    <div className="space-y-3">
                        <h1 className="font-display text-4xl md:text-6xl font-bold text-primary animate-fade-in drop-shadow-sm">
                            {t('hero.name')}
                        </h1>
                        
                        <h2 className="text-xl md:text-2xl text-primary-800 dark:text-primary-300 font-semibold animate-fade-in-delay-1 drop-shadow-sm">
                            {t('hero.title')}
                        </h2>
                        
                        <p className="text-lg text-secondary animate-fade-in-delay-2 drop-shadow-sm">
                            {t('hero.tagline')}
                        </p>
                    </div>

                    {/* Status */}
                    <div className="inline-flex items-center gap-2 bg-teal-100 dark:bg-teal-900/40 text-teal-800 dark:text-teal-200 px-4 py-2 rounded-full font-medium animate-fade-in-delay-2 border border-teal-200 dark:border-teal-700">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                        {t('hero.status')}
                    </div>
                    
                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-3">
                        <button 
                            onClick={scrollToProjects}
                            className="px-8 py-3 bg-primary-700 hover:bg-primary-800 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-primary-700"
                        >
                            {t('hero.cta')}
                        </button>
                        
                        <div className="flex flex-col items-center gap-2">
                            <button 
                                onClick={() => handleDownloadCV()}
                                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-400 dark:border-slate-600 text-primary bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full font-semibold hover:border-primary-500 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300"
                            >
                                <Download size={18} />
                                <span>{t('hero.cv')}</span>
                            </button>
                            
                            <button 
                                onClick={() => handleDownloadCV(language === 'en' ? 'fr' : 'en')}
                                className="text-sm text-primary-800 dark:text-primary-300 hover:text-primary-900 dark:hover:text-primary-200 hover:underline font-medium"
                            >
                                {t('hero.cvSecondary')}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 motion-safe:animate-bounce z-10">
                <ArrowDown size={20} className="text-muted" aria-hidden="true" />
            </div>

            {/* Highlights Strip */}
            <div className="absolute bottom-0 left-0 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-default z-20 shadow-lg">
                <div className="container mx-auto px-4 py-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div className="space-y-1">
                            <div className="text-2xl font-bold text-primary-700 dark:text-primary-300">3.6M</div>
                            <div className="text-sm text-secondary font-medium">Training samples</div>
                        </div>
                        <div className="space-y-1">
                            <div className="text-2xl font-bold text-teal-700 dark:text-teal-300">0.9495</div>
                            <div className="text-sm text-secondary font-medium">Validation AUC</div>
                        </div>
                        <div className="space-y-1">
                            <div className="text-2xl font-bold text-teal-700 dark:text-teal-300">30+</div>
                            <div className="text-sm text-secondary font-medium">Backend modules</div>
                        </div>
                        <div className="space-y-1">
                            <div className="text-2xl font-bold text-accent-700 dark:text-accent-300">3</div>
                            <div className="text-sm text-secondary font-medium">Languages (AR/FR/EN)</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};