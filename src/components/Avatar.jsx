import React, { Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, ContactShadows, Environment, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

function Character() {
  const group = React.useRef();
  const head = React.useRef();
  useFrame(({ pointer, clock }) => {
    if (group.current) {
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, pointer.x * 0.32, 0.045);
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -pointer.y * 0.12, 0.045);
      group.current.position.y = Math.sin(clock.elapsedTime * 1.2) * 0.05;
    }
    if (head.current) head.current.rotation.y = Math.sin(clock.elapsedTime * 0.7) * 0.08;
  });
  return <group ref={group}>
    <mesh position={[0, -0.58, 0]} castShadow><capsuleGeometry args={[0.48, 0.72, 8, 16]} /><meshStandardMaterial color="#252a31" roughness={0.72} /></mesh>
    <mesh position={[0, -0.2, 0.42]}><sphereGeometry args={[0.28, 32, 32]} /><meshStandardMaterial color="#d4d7db" metalness={0.1} roughness={0.28} /></mesh>
    <group ref={head} position={[0, 0.48, 0]}>
      <mesh castShadow><sphereGeometry args={[0.53, 48, 48]} /><meshStandardMaterial color="#c98e6a" roughness={0.78} /></mesh>
      <mesh position={[0, 0.25, -0.03]} castShadow><sphereGeometry args={[0.54, 32, 24, 0, Math.PI * 2, 0, Math.PI * 0.52]} /><meshStandardMaterial color="#202126" roughness={0.9} /></mesh>
      <mesh position={[-0.19, 0.02, 0.475]}><sphereGeometry args={[0.055, 20, 20]} /><meshStandardMaterial color="#202126" /></mesh>
      <mesh position={[0.19, 0.02, 0.475]}><sphereGeometry args={[0.055, 20, 20]} /><meshStandardMaterial color="#202126" /></mesh>
      <mesh position={[0, -0.16, 0.5]}><boxGeometry args={[0.18, 0.025, 0.025]} /><meshStandardMaterial color="#704637" /></mesh>
      <mesh position={[-0.54, -0.02, 0]}><sphereGeometry args={[0.12, 24, 24]} /><meshStandardMaterial color="#c98e6a" /></mesh>
      <mesh position={[0.54, -0.02, 0]}><sphereGeometry args={[0.12, 24, 24]} /><meshStandardMaterial color="#c98e6a" /></mesh>
    </group>
    <mesh position={[-0.55, -0.68, 0.02]} rotation={[0, 0, -0.22]} castShadow><capsuleGeometry args={[0.15, 0.62, 6, 12]} /><meshStandardMaterial color="#c98e6a" /></mesh>
    <mesh position={[0.55, -0.68, 0.02]} rotation={[0, 0, 0.22]} castShadow><capsuleGeometry args={[0.15, 0.62, 6, 12]} /><meshStandardMaterial color="#c98e6a" /></mesh>
  </group>;
}

export default function Avatar() {
  return <div className="avatar-canvas" aria-label="Interactive 3D illustrated avatar. Move your pointer to interact.">
    <Canvas shadows camera={{ position: [0, 0, 4.2], fov: 38 }} dpr={[1, 1.8]}>
      <ambientLight intensity={1.5} /><directionalLight position={[3, 5, 5]} intensity={2.1} castShadow />
      <pointLight position={[-3, 1, 2]} intensity={22} color="#c7d7ff" />
      <Suspense fallback={null}><Float speed={1.5} rotationIntensity={0.08} floatIntensity={0.25}><Character /></Float><ContactShadows position={[0, -1.5, 0]} opacity={0.25} scale={4} blur={2.5} far={3} /><Environment preset="studio" /></Suspense>
    </Canvas>
    <span className="avatar-note"><span className="live-dot"/> INTERACTIVE 3D</span>
  </div>;
}
