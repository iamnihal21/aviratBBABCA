"use client"

import React from "react"

import { useRef, useState } from "react"
import { Canvas, useFrame, ThreeEvent } from "@react-three/fiber"
import { Float, Text, RoundedBox, Environment } from "@react-three/drei"
import * as THREE from "three"

interface BuildingProps {
  position: [number, number, number]
  size: [number, number, number]
  color: string
  label: string
  hoverColor: string
  onClick?: () => void
}

function Building({ position, size, color, label, hoverColor, onClick }: BuildingProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (meshRef.current) {
      const targetY = hovered ? position[1] + 0.1 : position[1]
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY, 0.1)
    }
  })

  return (
    <group>
      <RoundedBox
        ref={meshRef}
        args={size}
        position={position}
        radius={0.05}
        smoothness={4}
        onPointerOver={(e: ThreeEvent<PointerEvent>) => {
          e.stopPropagation()
          setHovered(true)
          document.body.style.cursor = "pointer"
        }}
        onPointerOut={() => {
          setHovered(false)
          document.body.style.cursor = "default"
        }}
        onClick={(e: ThreeEvent<MouseEvent>) => {
          e.stopPropagation()
          onClick?.()
        }}
      >
        <meshStandardMaterial
          color={hovered ? hoverColor : color}
          roughness={0.3}
          metalness={0.5}
        />
      </RoundedBox>
      {hovered && (
        <Float speed={3} floatIntensity={0.2}>
          <Text
            position={[position[0], position[1] + size[1] / 2 + 0.4, position[2]]}
            fontSize={0.15}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
            font="/fonts/Geist-Bold.ttf"
          >
            {label}
          </Text>
        </Float>
      )}
    </group>
  )
}

function CampusGround() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
      <planeGeometry args={[10, 10]} />
      <meshStandardMaterial color="#1a2634" roughness={0.8} />
    </mesh>
  )
}

function PathWays() {
  return (
    <group position={[0, -0.49, 0]}>
      {/* Horizontal path */}
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[6, 0.3]} />
        <meshStandardMaterial color="#2a3a4a" roughness={0.9} />
      </mesh>
      {/* Vertical path */}
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.3, 6]} />
        <meshStandardMaterial color="#2a3a4a" roughness={0.9} />
      </mesh>
    </group>
  )
}

function Trees() {
  const treePositions: [number, number, number][] = [
    [-2.5, 0, -2.5],
    [2.5, 0, -2.5],
    [-2.5, 0, 2.5],
    [2.5, 0, 2.5],
    [0, 0, -3],
    [3, 0, 0],
  ]

  return (
    <group>
      {treePositions.map((pos, i) => (
        <group key={i} position={pos}>
          {/* Trunk */}
          <mesh position={[0, 0, 0]}>
            <cylinderGeometry args={[0.05, 0.08, 0.4, 8]} />
            <meshStandardMaterial color="#4a3728" roughness={0.9} />
          </mesh>
          {/* Foliage */}
          <mesh position={[0, 0.4, 0]}>
            <coneGeometry args={[0.25, 0.5, 8]} />
            <meshStandardMaterial color="#2d5a3d" roughness={0.8} />
          </mesh>
        </group>
      ))}
    </group>
  )
}

function RotatingScene({ children }: { children: React.ReactNode }) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.3
    }
  })

  return <group ref={groupRef}>{children}</group>
}

function Scene() {
  return (
    <>
      <Environment preset="city" />
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 10, 5]} intensity={0.8} castShadow />
      <pointLight position={[-3, 3, -3]} intensity={0.3} color="#3b9e7c" />

      <RotatingScene>
        <CampusGround />
        <PathWays />
        <Trees />
        
        {/* Main Administration Building */}
        <Building
          position={[0, 0.4, -1.5]}
          size={[1.5, 0.8, 0.8]}
          color="#3b4a5a"
          hoverColor="#3b9e7c"
          label="Administration"
        />
        
        {/* Engineering Building */}
        <Building
          position={[-1.8, 0.5, 0]}
          size={[1, 1, 0.8]}
          color="#4a5a6a"
          hoverColor="#3b9e7c"
          label="Engineering"
        />
        
        {/* Science Building */}
        <Building
          position={[1.8, 0.35, 0]}
          size={[0.9, 0.7, 1]}
          color="#3a4a5a"
          hoverColor="#3b9e7c"
          label="Sciences"
        />
        
        {/* Arts Building */}
        <Building
          position={[-1, 0.3, 1.5]}
          size={[1.2, 0.6, 0.7]}
          color="#5a6a7a"
          hoverColor="#3b9e7c"
          label="Arts & Humanities"
        />
        
        {/* Library */}
        <Building
          position={[1.2, 0.45, 1.5]}
          size={[1.4, 0.9, 0.8]}
          color="#4a5a6a"
          hoverColor="#3b9e7c"
          label="Library"
        />
        
        {/* Medical Center */}
        <Building
          position={[0, 0.35, 0.5]}
          size={[0.8, 0.7, 0.6]}
          color="#3a4a5a"
          hoverColor="#3b9e7c"
          label="Medical Center"
        />
      </RotatingScene>
    </>
  )
}

export function Programs3DScene() {
  return (
    <div className="w-full h-[400px] md:h-[500px]">
      <Canvas
        camera={{ position: [4, 4, 4], fov: 45 }}
        gl={{ antialias: true }}
        shadows
      >
        <Scene />
      </Canvas>
    </div>
  )
}
