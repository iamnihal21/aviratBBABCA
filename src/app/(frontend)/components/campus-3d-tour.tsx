"use client"

import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { OrbitControls, Text, Environment, Sky, Cloud } from "@react-three/drei"
import * as THREE from "three"
import { Button } from "@/app/(frontend)/components/ui/button"
import { ChevronLeft, ChevronRight, RotateCcw } from "lucide-react"

// Orange theme colors
const ACCENT_COLOR = "#fc9a19"
const ACCENT_LIGHT = "#fdba4d"

interface LocationProps {
  position: [number, number, number]
  name: string
  description: string
  isActive: boolean
  onClick: () => void
}

function LocationMarker({ position, name, isActive, onClick }: LocationProps) {
  const markerRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (markerRef.current) {
      markerRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.1
      markerRef.current.rotation.y = state.clock.elapsedTime
    }
  })

  return (
    <group position={[position[0], 0, position[2]]}>
      <mesh
        ref={markerRef}
        position={[0, position[1], 0]}
        onPointerOver={() => {
          setHovered(true)
          document.body.style.cursor = "pointer"
        }}
        onPointerOut={() => {
          setHovered(false)
          document.body.style.cursor = "default"
        }}
        onClick={onClick}
      >
        <octahedronGeometry args={[0.3, 0]} />
        <meshStandardMaterial
          color={isActive ? ACCENT_COLOR : hovered ? ACCENT_LIGHT : "#ffffff"}
          emissive={isActive ? ACCENT_COLOR : "#000000"}
          emissiveIntensity={isActive ? 0.5 : 0}
        />
      </mesh>
      
      {/* Beacon light */}
      <pointLight
        position={[0, position[1], 0]}
        intensity={isActive ? 2 : 0.5}
        color={ACCENT_COLOR}
        distance={3}
      />
      
      {/* Label */}
      {(hovered || isActive) && (
        <Text
          position={[0, position[1] + 0.8, 0]}
          fontSize={0.25}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          font="/fonts/Geist-Bold.ttf"
        >
          {name}
        </Text>
      )}
    </group>
  )
}

function CampusBuilding({ 
  position, 
  size, 
  color,
  windowRows = 3
}: { 
  position: [number, number, number]
  size: [number, number, number]
  color: string
  windowRows?: number
}) {
  return (
    <group position={position}>
      {/* Main building */}
      <mesh position={[0, size[1] / 2, 0]} castShadow receiveShadow>
        <boxGeometry args={size} />
        <meshStandardMaterial color={color} roughness={0.7} />
      </mesh>
      
      {/* Roof */}
      <mesh position={[0, size[1] + 0.1, 0]}>
        <boxGeometry args={[size[0] + 0.1, 0.2, size[2] + 0.1]} />
        <meshStandardMaterial color="#1a2634" roughness={0.5} />
      </mesh>
      
      {/* Windows */}
      {Array.from({ length: windowRows }).map((_, row) =>
        Array.from({ length: Math.floor(size[0] * 2) }).map((_, col) => (
          <mesh
            key={`${row}-${col}`}
            position={[
              -size[0] / 2 + 0.3 + col * 0.5,
              0.5 + row * 0.8,
              size[2] / 2 + 0.01
            ]}
          >
            <planeGeometry args={[0.3, 0.5]} />
            <meshStandardMaterial
              color="#87ceeb"
              emissive="#87ceeb"
              emissiveIntensity={0.1}
              transparent
              opacity={0.8}
            />
          </mesh>
        ))
      )}
    </group>
  )
}

function Ground() {
  return (
    <group>
      {/* Grass */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]} receiveShadow>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial color="#2d5a3d" roughness={0.9} />
      </mesh>
      
      {/* Pathways */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[2, 30]} />
        <meshStandardMaterial color="#8b7355" roughness={0.8} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, Math.PI / 2]} position={[0, 0, 5]}>
        <planeGeometry args={[2, 20]} />
        <meshStandardMaterial color="#8b7355" roughness={0.8} />
      </mesh>
    </group>
  )
}

function CameraController({ target, enabled }: { target: [number, number, number]; enabled: boolean }) {
  const { camera } = useThree()
  const targetPosition = useRef(new THREE.Vector3(...target))

  useEffect(() => {
    targetPosition.current.set(target[0] + 5, target[1] + 3, target[2] + 5)
  }, [target])

  useFrame(() => {
    if (enabled) {
      camera.position.lerp(targetPosition.current, 0.02)
      camera.lookAt(target[0], target[1], target[2])
    }
  })

  return null
}

function Scene({ 
  locations, 
  activeIndex, 
  onLocationClick,
  autoRotate 
}: { 
  locations: Array<{ position: [number, number, number]; name: string; description: string }>
  activeIndex: number
  onLocationClick: (index: number) => void
  autoRotate: boolean
}) {
  return (
    <>
      <Sky sunPosition={[100, 20, 100]} />
      <Environment preset="park" />
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 20, 10]} intensity={1} castShadow />
      
      <Cloud position={[-10, 15, -10]} speed={0.2} opacity={0.5} />
      <Cloud position={[10, 12, 5]} speed={0.1} opacity={0.4} />
      
      <Ground />
      
      {/* Campus Buildings */}
      <CampusBuilding position={[0, 0, -8]} size={[6, 4, 4]} color="#4a5a6a" windowRows={4} />
      <CampusBuilding position={[-8, 0, 0]} size={[4, 3, 5]} color="#5a6a7a" windowRows={3} />
      <CampusBuilding position={[8, 0, 0]} size={[5, 3.5, 4]} color="#3a4a5a" windowRows={3} />
      <CampusBuilding position={[-5, 0, 8]} size={[4, 2.5, 3]} color="#4a5a6a" windowRows={2} />
      <CampusBuilding position={[5, 0, 8]} size={[6, 3, 4]} color="#5a6a7a" windowRows={3} />
      <CampusBuilding position={[0, 0, 5]} size={[3, 2, 3]} color="#3a4a5a" windowRows={2} />
      
      {/* Location Markers */}
      {locations.map((loc, i) => (
        <LocationMarker
          key={loc.name}
          position={loc.position}
          name={loc.name}
          description={loc.description}
          isActive={i === activeIndex}
          onClick={() => onLocationClick(i)}
        />
      ))}
      
      <CameraController 
        target={locations[activeIndex].position} 
        enabled={!autoRotate}
      />
      
      <OrbitControls 
        enablePan={false}
        minDistance={8}
        maxDistance={25}
        minPolarAngle={0.3}
        maxPolarAngle={Math.PI / 2.2}
        autoRotate={autoRotate}
        autoRotateSpeed={0.5}
      />
    </>
  )
}

const locations = [
  { position: [0, 2, -8] as [number, number, number], name: "Main Hall", description: "The historic heart of our campus, home to administration and academic leadership." },
  { position: [-8, 1.5, 0] as [number, number, number], name: "Engineering", description: "State-of-the-art facilities for engineering and technology research." },
  { position: [8, 1.75, 0] as [number, number, number], name: "Science Center", description: "Our flagship research facility with cutting-edge laboratories." },
  { position: [-5, 1.25, 8] as [number, number, number], name: "Arts Building", description: "Creative spaces for visual and performing arts programs." },
  { position: [5, 1.5, 8] as [number, number, number], name: "Library", description: "Over 2 million volumes and digital resources at your fingertips." },
  { position: [0, 1, 5] as [number, number, number], name: "Student Center", description: "The social hub of campus life with dining and recreation." },
]

export function Campus3DTour() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoRotate, setAutoRotate] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handlePrev = () => {
    setAutoRotate(false)
    setActiveIndex((prev) => (prev - 1 + locations.length) % locations.length)
  }

  const handleNext = () => {
    setAutoRotate(false)
    setActiveIndex((prev) => (prev + 1) % locations.length)
  }

  const handleLocationClick = (index: number) => {
    setAutoRotate(false)
    setActiveIndex(index)
  }

  return (
    <div className="relative w-full">
      <div className="h-[500px] md:h-[600px] w-full rounded-xl overflow-hidden">
        <Canvas shadows camera={{ position: [15, 10, 15], fov: 50 }}>
          <Scene 
            locations={locations} 
            activeIndex={activeIndex} 
            onLocationClick={handleLocationClick}
            autoRotate={autoRotate}
          />
        </Canvas>
      </div>
      
      {/* Info Panel */}
      <div className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:bottom-4 md:w-80 bg-background/90 backdrop-blur-md rounded-lg p-4 border border-border">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-accent uppercase tracking-wider">Virtual Tour</span>
          <span className="text-xs text-muted-foreground">{activeIndex + 1} / {locations.length}</span>
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">
          {locations[activeIndex].name}
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          {locations[activeIndex].description}
        </p>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={handlePrev}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" onClick={handleNext}>
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => setAutoRotate(!autoRotate)}
            className={autoRotate ? "bg-accent text-accent-foreground" : ""}
          >
            <RotateCcw className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
