import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Download, ArrowDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { FloatingCube } from './3D/FloatingCube';
import { AnimatedSphere } from './3D/AnimatedSphere';
import cvFileEn from "../ressources/files/Abdelilah_Elgallati_CV_En.pdf";
import cvFileFr from "../ressources/files/Abdelilah_Elgallati_CV_Fr.pdf";

export const Hero: React.FC = () => {
    const { t, language } = useLanguage();

    const scrollToProjects = () => {
        const element = document.querySelector('#projects');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleDownloadCV = () => {
        const cvFile = language === 'fr' ? cvFileFr : cvFileEn;
        const fileName = language === 'fr' ? 'Abdelilah_Elgallati_CV_FR.pdf' : 'Abdelilah_Elgallati_CV_EN.pdf';
        
        const link = document.createElement("a");
        link.href = cvFile;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
            {/* 3D Background */}
            <div className="absolute inset-0 opacity-20">
                <Canvas>
                    <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    <Suspense fallback={null}>
                        <FloatingCube position={[-3, 2, 0]} scale={0.8} color="#3B82F6" />
                        <AnimatedSphere position={[3, -1, 0]} scale={0.6} color="#8B5CF6" />
                        <FloatingCube position={[0, -3, -2]} scale={0.5} color="#10B981" />
                        <AnimatedSphere position={[-2, -2, -1]} scale={0.4} color="#F59E0B" />
                    </Suspense>
                    <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
                </Canvas>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 text-center z-10">
                <div className="max-w-4xl mx-auto space-y-6">
                    {/* Name & Title */}
                    <div className="space-y-3">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white animate-fade-in">
                            {t('hero.name')}
                        </h1>
                        
                        <h2 className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-semibold animate-fade-in-delay-1">
                            {t('hero.title')}
                        </h2>
                        
                        <p className="text-lg text-gray-600 dark:text-gray-300 animate-fade-in-delay-2">
                            {t('hero.tagline')}
                        </p>
                    </div>

                    {/* Status */}
                    <div className="text-green-600 dark:text-green-400 font-medium animate-fade-in-delay-2">
                        ✅ Available Immediately • Open to Relocation
                    </div>
                    
                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-3">
                        <button 
                            onClick={scrollToProjects}
                            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            {t('hero.cta')}
                        </button>
                        
                        <button 
                            onClick={handleDownloadCV}
                            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-full font-semibold hover:border-blue-500 transition-all duration-300"
                        >
                            <Download size={18} />
                            <span>{t('hero.cv')}</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
                <ArrowDown size={20} className="text-gray-400" />
            </div>
        </section>
    );
};