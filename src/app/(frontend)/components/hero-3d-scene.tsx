"use client"

import { useRef, useMemo, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, MeshDistortMaterial, Sphere, Box, Torus, Icosahedron, Environment } from "@react-three/drei"
import * as THREE from "three"

// Orange theme color
const ACCENT_COLOR = "#fc9a19"
const ACCENT_LIGHT = "#fdba4d"
const ACCENT_LIGHTER = "#fdd17d"

// Floating geometric shapes
function FloatingShape({ position, shape, color, speed = 1, distort = 0.3 }: { 
  position: [number, number, number]
  shape: "sphere" | "box" | "torus" | "icosahedron"
  color: string
  speed?: number
  distort?: number
}) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1 * speed
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15 * speed
    }
  })

  const ShapeComponent = {
    sphere: Sphere,
    box: Box,
    torus: Torus,
    icosahedron: Icosahedron,
  }[shape]

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <ShapeComponent ref={meshRef} args={shape === "torus" ? [0.5, 0.2, 16, 32] : [0.5, 32, 32]} position={position}>
        <MeshDistortMaterial
          color={color}
          roughness={0.2}
          metalness={0.8}
          distort={distort}
          speed={2}
          transparent
          opacity={0.7}
        />
      </ShapeComponent>
    </Float>
  )
}

// Animated particles
function Particles({ count = 100 }) {
  const mesh = useRef<THREE.Points>(null)
  
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const scales = new Float32Array(count)
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20
      scales[i] = Math.random()
    }
    
    return { positions, scales }
  }, [count])

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.elapsedTime * 0.02
      mesh.current.rotation.x = state.clock.elapsedTime * 0.01
    }
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.positions.length / 3}
          array={particles.positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color={ACCENT_COLOR}
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

// Animated rings
function AnimatedRings() {
  const ring1 = useRef<THREE.Mesh>(null)
  const ring2 = useRef<THREE.Mesh>(null)
  const ring3 = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (ring1.current) {
      ring1.current.rotation.x = t * 0.2
      ring1.current.rotation.y = t * 0.1
    }
    if (ring2.current) {
      ring2.current.rotation.x = t * 0.15
      ring2.current.rotation.z = t * 0.1
    }
    if (ring3.current) {
      ring3.current.rotation.y = t * 0.2
      ring3.current.rotation.z = t * 0.15
    }
  })

  return (
    <group position={[3, 0, -2]}>
      <mesh ref={ring1}>
        <torusGeometry args={[2, 0.02, 16, 100]} />
        <meshStandardMaterial color={ACCENT_COLOR} transparent opacity={0.5} />
      </mesh>
      <mesh ref={ring2}>
        <torusGeometry args={[2.5, 0.02, 16, 100]} />
        <meshStandardMaterial color={ACCENT_LIGHT} transparent opacity={0.4} />
      </mesh>
      <mesh ref={ring3}>
        <torusGeometry args={[3, 0.02, 16, 100]} />
        <meshStandardMaterial color={ACCENT_LIGHTER} transparent opacity={0.3} />
      </mesh>
    </group>
  )
}

// Globe with wireframe
function Globe() {
  const globeRef = useRef<THREE.Mesh>(null)
  const wireframeRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (globeRef.current) {
      globeRef.current.rotation.y = t * 0.1
    }
    if (wireframeRef.current) {
      wireframeRef.current.rotation.y = t * 0.1
      wireframeRef.current.rotation.x = t * 0.05
    }
  })

  return (
    <group position={[-4, -1, -3]}>
      <mesh ref={globeRef}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshStandardMaterial
          color="#1a2634"
          transparent
          opacity={0.8}
        />
      </mesh>
      <mesh ref={wireframeRef}>
        <sphereGeometry args={[1.6, 16, 16]} />
        <meshStandardMaterial
          color={ACCENT_COLOR}
          wireframe
          transparent
          opacity={0.5}
        />
      </mesh>
    </group>
  )
}

// DNA Helix structure
function DNAHelix() {
  const groupRef = useRef<THREE.Group>(null)
  
  const helixPoints = useMemo(() => {
    const points: { pos1: [number, number, number]; pos2: [number, number, number] }[] = []
    for (let i = 0; i < 20; i++) {
      const t = i * 0.3
      const x1 = Math.cos(t) * 0.5
      const z1 = Math.sin(t) * 0.5
      const x2 = Math.cos(t + Math.PI) * 0.5
      const z2 = Math.sin(t + Math.PI) * 0.5
      const y = i * 0.15 - 1.5
      points.push({ pos1: [x1, y, z1], pos2: [x2, y, z2] })
    }
    return points
  }, [])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <group ref={groupRef} position={[5, 0, -4]}>
      {helixPoints.map((point, i) => (
        <group key={i}>
          <mesh position={point.pos1}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial color={ACCENT_COLOR} />
          </mesh>
          <mesh position={point.pos2}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial color={ACCENT_LIGHT} />
          </mesh>
          {i % 2 === 0 && (
            <mesh position={[(point.pos1[0] + point.pos2[0]) / 2, point.pos1[1], (point.pos1[2] + point.pos2[2]) / 2]}>
              <cylinderGeometry args={[0.02, 0.02, 1, 8]} />
              <meshStandardMaterial color="#ffffff" transparent opacity={0.3} />
            </mesh>
          )}
        </group>
      ))}
    </group>
  )
}

function Scene() {
  return (
    <>
      <Environment preset="night" />
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} />
      <pointLight position={[-5, 5, -5]} intensity={0.3} color={ACCENT_COLOR} />
      
      {/* Floating shapes */}
      <FloatingShape position={[-3, 2, -2]} shape="icosahedron" color={ACCENT_COLOR} speed={0.8} distort={0.4} />
      <FloatingShape position={[4, 1.5, -3]} shape="sphere" color={ACCENT_LIGHT} speed={1.2} distort={0.2} />
      <FloatingShape position={[-5, -1, -4]} shape="box" color="#1a2634" speed={0.6} distort={0.1} />
      <FloatingShape position={[2, -2, -2]} shape="torus" color={ACCENT_COLOR} speed={1} distort={0.3} />
      
      {/* Animated elements */}
      <Particles count={150} />
      <AnimatedRings />
      <Globe />
      <DNAHelix />
    </>
  )
}

export function Hero3DScene() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="absolute inset-0 z-0 bg-primary" />
  }

  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}
