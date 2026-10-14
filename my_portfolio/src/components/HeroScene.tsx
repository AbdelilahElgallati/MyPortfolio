import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { FloatingCube } from './3D/FloatingCube';
import { AnimatedSphere } from './3D/AnimatedSphere';

export function HeroScene() {
  return (
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
  );
}
