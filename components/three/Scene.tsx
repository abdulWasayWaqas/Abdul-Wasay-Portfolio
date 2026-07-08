"use client";

import { useMemo, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

/* ---- Particle shell arranged on a sphere ---- */
function Particles({ count = 1400, radius = 3.1 }: { count?: number; radius?: number }) {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // even-ish distribution on a sphere (golden spiral) with slight jitter
      const t = i / count;
      const phi = Math.acos(1 - 2 * t);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      const r = radius * (0.82 + Math.random() * 0.35);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count, radius]);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.04;
    ref.current.rotation.x += delta * 0.012;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#6ee7b7"
        transparent
        opacity={0.85}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

/* ---- Distorted glowing core ---- */
function Core() {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.18;
    mesh.current.rotation.z = state.clock.elapsedTime * 0.06;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.5} floatIntensity={0.7}>
      <mesh ref={mesh} scale={1.35}>
        <icosahedronGeometry args={[1, 6]} />
        <MeshDistortMaterial
          color="#0f766e"
          emissive="#10b981"
          emissiveIntensity={0.45}
          roughness={0.25}
          metalness={0.85}
          distort={0.38}
          speed={1.6}
        />
      </mesh>
      {/* faint wireframe halo */}
      <mesh scale={1.7}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial color="#34d399" wireframe transparent opacity={0.12} />
      </mesh>
    </Float>
  );
}

/* ---- Cursor-following rig ---- */
function Rig({
  children,
  mouse,
}: {
  children: React.ReactNode;
  mouse: React.MutableRefObject<{ x: number; y: number }>;
}) {
  const group = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!group.current) return;
    const mx = mouse.current.x;
    const my = mouse.current.y;
    // translate the sphere toward the cursor
    group.current.position.x = THREE.MathUtils.damp(group.current.position.x, mx * 1.7, 3, delta);
    group.current.position.y = THREE.MathUtils.damp(group.current.position.y, my * 1.1, 3, delta);
    // subtle rotational parallax toward the cursor
    group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, mx * 0.5, 3, delta);
    group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, -my * 0.35, 3, delta);
  });

  return <group ref={group}>{children}</group>;
}

export default function Scene() {
  // canvas has pointer-events:none, so track the mouse at the window level
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 45 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
      style={{ pointerEvents: "none" }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[6, 6, 6]} intensity={2.2} color="#6ee7b7" />
      <pointLight position={[-6, -3, -4]} intensity={1.1} color="#0ea5e9" />
      <Rig mouse={mouse}>
        <Core />
        <Particles />
      </Rig>
    </Canvas>
  );
}
