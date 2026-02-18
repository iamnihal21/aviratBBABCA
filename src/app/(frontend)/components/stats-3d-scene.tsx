"use client"

import { useRef, useMemo, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Text, Float, Environment, MeshTransmissionMaterial } from "@react-three/drei"
import * as THREE from "three"

// Orange theme colors
const ACCENT_COLOR = "#fc9a19"
const ACCENT_LIGHT = "#fdba4d"
const ACCENT_LIGHTER = "#fdd17d"

interface StatPillarProps {
  position: [number, number, number]
  height: number
  color: string
  value: string
  label: string
  delay: number
}

function StatPillar({ position, height, color, value, label, delay }: StatPillarProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const groupRef = useRef<THREE.Group>(null)
  const currentHeight = useRef(0)

  useFrame((state) => {
    const elapsed = state.clock.elapsedTime - delay
    if (elapsed > 0) {
      // Animate height growth
      const targetHeight = Math.min(elapsed * 2, height)
      currentHeight.current = THREE.MathUtils.lerp(currentHeight.current, targetHeight, 0.05)
      
      if (meshRef.current) {
        meshRef.current.scale.y = currentHeight.current / height
        meshRef.current.position.y = (currentHeight.current / 2)
      }
    }
    
    // Subtle floating animation
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime + delay) * 0.05
    }
  })

  return (
    <group ref={groupRef} position={position}>
      {/* Glass pillar */}
      <mesh ref={meshRef}>
        <cylinderGeometry args={[0.3, 0.4, height, 32]} />
        <MeshTransmissionMaterial
          backside
          samples={4}
          thickness={0.5}
          chromaticAberration={0.1}
          anisotropy={0.3}
          distortion={0.1}
          distortionScale={0.2}
          temporalDistortion={0.1}
          iridescence={1}
          iridescenceIOR={1}
          iridescenceThicknessRange={[0, 1400]}
          color={color}
          transparent
          opacity={0.8}
        />
      </mesh>
      
      {/* Glow ring at base */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
        <ringGeometry args={[0.35, 0.5, 32]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} transparent opacity={0.6} />
      </mesh>
      
      {/* Value text */}
      <Float speed={2} floatIntensity={0.1}>
        <Text
          position={[0, height + 0.5, 0]}
          fontSize={0.4}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          font="/fonts/Geist-Bold.ttf"
        >
          {value}
        </Text>
      </Float>
      
      {/* Label text */}
      <Text
        position={[0, -0.4, 0]}
        fontSize={0.15}
        color="#888888"
        anchorX="center"
        anchorY="middle"
        font="/fonts/Geist-Regular.ttf"
      >
        {label}
      </Text>
    </group>
  )
}

function ParticleField() {
  const points = useRef<THREE.Points>(null)
  
  const particles = useMemo(() => {
    const count = 200
    const positions = new Float32Array(count * 3)
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15
      positions[i * 3 + 1] = Math.random() * 5
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15
    }
    
    return positions
  }, [])

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.02
    }
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.03} color={ACCENT_COLOR} transparent opacity={0.4} sizeAttenuation />
    </points>
  )
}

function GridFloor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
      <planeGeometry args={[20, 20, 20, 20]} />
      <meshStandardMaterial
        color="#1a2634"
        wireframe
        transparent
        opacity={0.2}
      />
    </mesh>
  )
}

function Scene() {
  const stats = [
    { value: "15K+", label: "Students", height: 2, color: ACCENT_COLOR, delay: 0 },
    { value: "1.2K", label: "Faculty", height: 1.5, color: ACCENT_LIGHT, delay: 0.3 },
    { value: "98%", label: "Employment", height: 2.5, color: ACCENT_COLOR, delay: 0.6 },
    { value: "#12", label: "Ranking", height: 2.2, color: ACCENT_LIGHTER, delay: 0.9 },
  ]

  return (
    <>
      <Environment preset="night" />
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 10, 5]} intensity={0.5} />
      <pointLight position={[0, 5, 0]} intensity={0.5} color={ACCENT_COLOR} />
      
      <ParticleField />
      <GridFloor />
      
      {stats.map((stat, i) => (
        <StatPillar
          key={stat.label}
          position={[(i - 1.5) * 2, 0, 0]}
          height={stat.height}
          color={stat.color}
          value={stat.value}
          label={stat.label}
          delay={stat.delay}
        />
      ))}
    </>
  )
}

export function Stats3DScene() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-full h-[350px] bg-primary/5 rounded-xl animate-pulse" />
  }

  return (
    <div className="w-full h-[350px]">
      <Canvas
        camera={{ position: [0, 3, 8], fov: 45 }}
        gl={{ antialias: true }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}
