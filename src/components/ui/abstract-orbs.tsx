"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";

function Orbs() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.5;
      group.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.1) * 0.2;
    }
  });

  return (
    <group ref={group}>
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[1, 0.5, 0]}>
          <sphereGeometry args={[1.5, 64, 64]} />
          <MeshTransmissionMaterial
            backside
            samples={4}
            thickness={2}
            chromaticAberration={0.025}
            anisotropy={0.1}
            distortion={0.2}
            distortionScale={0.1}
            temporalDistortion={0.1}
            color="#facc15" // yellow-400
            clearcoat={1}
            roughness={0.1}
          />
        </mesh>
      </Float>

      <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
        <mesh position={[-2, -1, -2]}>
          <sphereGeometry args={[1, 64, 64]} />
          <MeshTransmissionMaterial
            backside
            samples={4}
            thickness={1}
            chromaticAberration={0.05}
            color="#eab308" // yellow-500
            clearcoat={1}
            roughness={0.15}
          />
        </mesh>
      </Float>

      <Float speed={1} rotationIntensity={2} floatIntensity={2.5}>
        <mesh position={[-1.5, 1.5, -1]}>
          <sphereGeometry args={[1.2, 64, 64]} />
          <MeshTransmissionMaterial
            backside
            samples={4}
            thickness={1.5}
            chromaticAberration={0.05}
            color="#94a3b8" // slate-400 for reflection
            clearcoat={1}
            roughness={0.2}
          />
        </mesh>
      </Float>
    </group>
  );
}

import { Suspense } from "react";

export function AbstractOrbs() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#facc15" />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#ffffff" />
        
        <Suspense fallback={null}>
          <Orbs />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
