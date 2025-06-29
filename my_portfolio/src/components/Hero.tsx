// import React, { Suspense } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
// import { ArrowDown } from 'lucide-react';
// import { useLanguage } from '../contexts/LanguageContext';
// import { FloatingCube } from './3D/FloatingCube';
// import { AnimatedSphere } from './3D/AnimatedSphere';

// export const Hero: React.FC = () => {
//   const { t } = useLanguage();

//   const scrollToProjects = () => {
//     const element = document.querySelector('#projects');
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
//       {/* 3D Background */}
//       <div className="absolute inset-0 opacity-30">
//         <Canvas>
//           <PerspectiveCamera makeDefault position={[0, 0, 5]} />
//           <ambientLight intensity={0.5} />
//           <pointLight position={[10, 10, 10]} />
//           <Suspense fallback={null}>
//             <FloatingCube position={[-3, 2, 0]} scale={0.8} color="#3B82F6" />
//             <AnimatedSphere position={[3, -1, 0]} scale={0.6} color="#8B5CF6" />
//             <FloatingCube position={[0, -3, -2]} scale={0.5} color="#10B981" />
//             <AnimatedSphere position={[-2, -2, -1]} scale={0.4} color="#F59E0B" />
//           </Suspense>
//           <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
//         </Canvas>
//       </div>

//       {/* Content */}
//       <div className="container mx-auto px-4 text-center z-10">
//         <div className="max-w-4xl mx-auto">
//           <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
//             <span className="block">{t('hero.name')}</span>
//           </h1>
          
//           <h2 className="text-2xl md:text-3xl text-blue-600 dark:text-blue-400 mb-4 font-semibold animate-fade-in-delay-1">
//             {t('hero.title')}
//           </h2>
          
//           <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in-delay-2">
//             {t('hero.tagline')}
//           </p>
          
//           <button
//             onClick={scrollToProjects}
//             className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-fade-in-delay-3"
//           >
//             <span>{t('hero.cta')}</span>
//             <ArrowDown size={20} />
//           </button>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//         <ArrowDown size={24} className="text-gray-600 dark:text-gray-400" />
//       </div>
//     </section>
//   );
// };

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { ArrowDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { FloatingCube } from './3D/FloatingCube';
import { AnimatedSphere } from './3D/AnimatedSphere';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-30">
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
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
            <span className="block">{t('hero.name')}</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-blue-600 dark:text-blue-400 mb-4 font-semibold animate-fade-in-delay-1">
            {t('hero.title')}
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in-delay-2">
            {t('hero.tagline')}
          </p>
          
          <button
            onClick={scrollToProjects}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-fade-in-delay-3"
          >
            <span>{t('hero.cta')}</span>
            <ArrowDown size={20} />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown size={24} className="text-gray-600 dark:text-gray-400" />
      </div>
    </section>
  );
};