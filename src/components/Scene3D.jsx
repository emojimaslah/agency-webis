import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, TorusKnot, MeshDistortMaterial, Stars, MeshWobbleMaterial } from '@react-three/drei';
import { useTheme } from '../context/ThemeContext';

const AnimatedShape = ({ theme }) => {
  const meshRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.1;
      meshRef.current.rotation.y = t * 0.15;
      meshRef.current.scale.setScalar(1 + Math.sin(t * 0.5) * 0.1);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <TorusKnot ref={meshRef} args={[1, 0.3, 128, 32]} scale={1} position={[2, 0, -2]}>
        <MeshDistortMaterial
          color={theme === 'dark' ? '#3b82f6' : '#2563eb'}
          speed={2}
          distort={0.3}
          radius={1}
          metalness={0.9}
          roughness={0.1}
          emissive={theme === 'dark' ? '#00e5ff' : '#0066ff'}
          emissiveIntensity={0.5}
        />
      </TorusKnot>
    </Float>
  );
};

const Particles = ({ theme }) => {
  const count = 500;
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 20;
      p[i * 3 + 1] = (Math.random() - 0.5) * 20;
      p[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return p;
  }, [count]);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color={theme === 'dark' ? '#ffffff' : '#3b82f6'}
        transparent
        opacity={0.3}
        sizeAttenuation
      />
    </points>
  );
};

const Scene3D = () => {
  const { theme } = useTheme();

  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <ambientLight intensity={theme === 'dark' ? 0.2 : 0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#60a5fa" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />

      <AnimatedShape theme={theme} />
      <Particles theme={theme} />

      {theme === 'dark' && <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />}

      <fog attach="fog" args={[theme === 'dark' ? '#020617' : '#ffffff', 5, 15]} />
    </Canvas>
  );
};

export default Scene3D;
