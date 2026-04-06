// 3D DNA double helix background using Three.js

import * as THREE from 'three'

export type HelixState = {
  canvas: HTMLCanvasElement
  renderer: THREE.WebGLRenderer
  scene: THREE.Scene
  camera: THREE.PerspectiveCamera
  helix: THREE.Group
  scrollY: number
}

export function createHelix(canvas: HTMLCanvasElement): HelixState | null {
  // Skip on mobile to save GPU
  if (window.innerWidth < 768) return null

  try {
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100)
    camera.position.z = 5

    const helix = new THREE.Group()

    // Build double helix
    const turns = 4
    const pointsPerTurn = 40
    const totalPoints = turns * pointsPerTurn
    const radius = 0.8
    const height = 6
    const halfH = height / 2

    const curve1Points: THREE.Vector3[] = []
    const curve2Points: THREE.Vector3[] = []

    for (let i = 0; i <= totalPoints; i++) {
      const t = i / totalPoints
      const angle = t * turns * Math.PI * 2
      const y = t * height - halfH
      curve1Points.push(new THREE.Vector3(Math.cos(angle) * radius, y, Math.sin(angle) * radius))
      curve2Points.push(new THREE.Vector3(Math.cos(angle + Math.PI) * radius, y, Math.sin(angle + Math.PI) * radius))
    }

    const material = new THREE.LineBasicMaterial({ color: 0x00e676, transparent: true, opacity: 0.35 })

    const geom1 = new THREE.BufferGeometry().setFromPoints(curve1Points)
    const geom2 = new THREE.BufferGeometry().setFromPoints(curve2Points)
    helix.add(new THREE.Line(geom1, material))
    helix.add(new THREE.Line(geom2, material))

    // Cross-links (base pairs)
    const linkMat = new THREE.LineBasicMaterial({ color: 0x00e676, transparent: true, opacity: 0.15 })
    for (let i = 0; i <= totalPoints; i += 4) {
      const t = i / totalPoints
      const angle = t * turns * Math.PI * 2
      const y = t * height - halfH
      const p1 = new THREE.Vector3(Math.cos(angle) * radius, y, Math.sin(angle) * radius)
      const p2 = new THREE.Vector3(Math.cos(angle + Math.PI) * radius, y, Math.sin(angle + Math.PI) * radius)
      const linkGeom = new THREE.BufferGeometry().setFromPoints([p1, p2])
      helix.add(new THREE.Line(linkGeom, linkMat))
    }

    // Sphere nodes at base pair junctions
    const sphereGeom = new THREE.SphereGeometry(0.04, 6, 6)
    const sphereMat = new THREE.MeshBasicMaterial({ color: 0x00e676, transparent: true, opacity: 0.25 })
    for (let i = 0; i <= totalPoints; i += 4) {
      const t = i / totalPoints
      const angle = t * turns * Math.PI * 2
      const y = t * height - halfH
      const s1 = new THREE.Mesh(sphereGeom, sphereMat)
      s1.position.set(Math.cos(angle) * radius, y, Math.sin(angle) * radius)
      helix.add(s1)
      const s2 = new THREE.Mesh(sphereGeom, sphereMat)
      s2.position.set(Math.cos(angle + Math.PI) * radius, y, Math.sin(angle + Math.PI) * radius)
      helix.add(s2)
    }

    scene.add(helix)

    return { canvas, renderer, scene, camera, helix, scrollY: 0 }
  } catch {
    return null // WebGL not available
  }
}

export function tickHelix(state: HelixState | null, ts: number): void {
  if (!state) return

  const w = state.canvas.clientWidth
  const h = state.canvas.clientHeight
  if (w <= 0 || h <= 0) return

  state.renderer.setSize(w, h, false)
  state.camera.aspect = w / h
  state.camera.updateProjectionMatrix()

  // Slow auto-rotation
  state.helix.rotation.y = ts * 0.0002
  // Scroll parallax
  state.helix.position.y = state.scrollY * 0.002

  state.renderer.render(state.scene, state.camera)
}

export function setHelixScroll(state: HelixState | null, scrollY: number): void {
  if (state) state.scrollY = scrollY
}
