"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import { Sphere } from "@react-three/drei"
import * as THREE from "three"

export function EarthGlobe() {
  const earthRef = useRef<THREE.Mesh>(null)
  const cloudsRef = useRef<THREE.Mesh>(null)

  // Create Earth texture
  const earthTexture = useMemo(() => {
    const canvas = document.createElement("canvas")
    canvas.width = 1024
    canvas.height = 512
    const ctx = canvas.getContext("2d")!

    // Create a simple Earth-like texture
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
    gradient.addColorStop(0, "#1e40af")
    gradient.addColorStop(0.3, "#059669")
    gradient.addColorStop(0.7, "#d97706")
    gradient.addColorStop(1, "#1e40af")

    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Add some landmass-like shapes
    ctx.fillStyle = "#059669"
    for (let i = 0; i < 20; i++) {
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      const radius = Math.random() * 50 + 20
      ctx.beginPath()
      ctx.arc(x, y, radius, 0, Math.PI * 2)
      ctx.fill()
    }

    return new THREE.CanvasTexture(canvas)
  }, [])

  // Create cloud texture
  const cloudTexture = useMemo(() => {
    const canvas = document.createElement("canvas")
    canvas.width = 1024
    canvas.height = 512
    const ctx = canvas.getContext("2d")!

    ctx.fillStyle = "rgba(255, 255, 255, 0.1)"
    for (let i = 0; i < 50; i++) {
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      const radius = Math.random() * 30 + 10
      ctx.beginPath()
      ctx.arc(x, y, radius, 0, Math.PI * 2)
      ctx.fill()
    }

    return new THREE.CanvasTexture(canvas)
  }, [])

  // Sentinel points data
  const sentinelPoints = useMemo(() => {
    const points = []
    for (let i = 0; i < 50; i++) {
      const phi = Math.acos(-1 + (2 * i) / 50)
      const theta = Math.sqrt(50 * Math.PI) * phi

      const x = Math.cos(theta) * Math.sin(phi)
      const y = Math.cos(phi)
      const z = Math.sin(theta) * Math.sin(phi)

      points.push({
        position: [x * 2.1, y * 2.1, z * 2.1],
        active: Math.random() > 0.3,
      })
    }
    return points
  }, [])

  useFrame((state) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.002
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += 0.003
    }
  })

  return (
    <group>
      {/* Earth */}
      <Sphere ref={earthRef} args={[2, 64, 64]}>
        <meshPhongMaterial map={earthTexture} />
      </Sphere>

      {/* Clouds */}
      <Sphere ref={cloudsRef} args={[2.05, 64, 64]}>
        <meshPhongMaterial map={cloudTexture} transparent opacity={0.4} />
      </Sphere>

      {/* Atmosphere */}
      <Sphere args={[2.15, 64, 64]}>
        <meshPhongMaterial color="#87ceeb" transparent opacity={0.1} />
      </Sphere>

      {/* Sentinel Points */}
      {sentinelPoints.map((point, index) => (
        <group key={index} position={point.position as [number, number, number]}>
          <Sphere args={[0.02, 8, 8]}>
            <meshBasicMaterial
              color={point.active ? "#f59e0b" : "#6b7280"}
              emissive={point.active ? "#f59e0b" : "#000000"}
              emissiveIntensity={point.active ? 0.5 : 0}
            />
          </Sphere>
          {point.active && (
            <Sphere args={[0.05, 8, 8]}>
              <meshBasicMaterial color="#f59e0b" transparent opacity={0.3} />
            </Sphere>
          )}
        </group>
      ))}

      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#4f46e5" />
    </group>
  )
}
