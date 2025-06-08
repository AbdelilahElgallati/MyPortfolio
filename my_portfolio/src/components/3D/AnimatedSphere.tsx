import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

interface AnimatedSphereProps {
  position?: [number, number, number];
  scale?: number;
  color?: string;
}

export const AnimatedSphere: React.FC<AnimatedSphereProps> = ({ 
  position = [0, 0, 0], 
  scale = 1,
  color = '#8B5CF6'
}) => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.008;
      meshRef.current.scale.setScalar(scale + Math.sin(state.clock.elapsedTime * 2) * 0.1);
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color={color} wireframe />
    </mesh>
  );
};