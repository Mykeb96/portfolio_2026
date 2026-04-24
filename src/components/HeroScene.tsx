import { useEffect, useRef } from 'react'
import * as THREE from 'three'

/**
 * Full-bleed decorative WebGL layer. Content sits above in the DOM.
 */
export function HeroScene() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0x07070a, 0.045)

    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 80)
    camera.position.set(0, 0.15, 5.2)

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.05
    container.appendChild(renderer.domElement)

    const group = new THREE.Group()
    scene.add(group)

    const mainGeo = new THREE.IcosahedronGeometry(1.05, 1)
    const mainMat = new THREE.MeshStandardMaterial({
      color: 0x1c1c24,
      roughness: 0.35,
      metalness: 0.78,
      emissive: 0x3d1f55,
      emissiveIntensity: 0.12,
      flatShading: true,
    })
    const mainMesh = new THREE.Mesh(mainGeo, mainMat)
    group.add(mainMesh)

    const edgeSource = new THREE.IcosahedronGeometry(1.12, 0)
    const edgeGeo = new THREE.EdgesGeometry(edgeSource)
    edgeSource.dispose()
    const edgeMat = new THREE.LineBasicMaterial({
      color: 0x9b86c4,
      transparent: true,
      opacity: 0.28,
    })
    const edgeLines = new THREE.LineSegments(edgeGeo, edgeMat)
    group.add(edgeLines)

    const haloGeo = new THREE.TorusGeometry(1.55, 0.012, 12, 128)
    const haloMat = new THREE.MeshBasicMaterial({
      color: 0x6a5acd,
      transparent: true,
      opacity: 0.22,
    })
    const halo = new THREE.Mesh(haloGeo, haloMat)
    halo.rotation.x = Math.PI / 2.35
    group.add(halo)

    scene.add(new THREE.AmbientLight(0xffffff, 0.35))
    const key = new THREE.DirectionalLight(0xf0ecff, 1.15)
    key.position.set(5, 4, 6)
    scene.add(key)
    const fill = new THREE.DirectionalLight(0x6040a0, 0.45)
    fill.position.set(-6, -1, -4)
    scene.add(fill)

    let raf = 0
    const clock = new THREE.Clock()
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    let animate = !mq.matches

    const onMotionPreference = () => {
      animate = !mq.matches
    }
    mq.addEventListener('change', onMotionPreference)

    const setSize = () => {
      const w = container.clientWidth
      const h = container.clientHeight
      if (w === 0 || h === 0) return
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }

    setSize()
    const ro = new ResizeObserver(setSize)
    ro.observe(container)

    const tick = () => {
      raf = requestAnimationFrame(tick)
      const t = clock.getElapsedTime()
      if (animate) {
        group.rotation.x = t * 0.11
        group.rotation.y = t * 0.16
        halo.rotation.z = t * 0.05
      }
      renderer.render(scene, camera)
    }
    tick()

    return () => {
      cancelAnimationFrame(raf)
      mq.removeEventListener('change', onMotionPreference)
      ro.disconnect()
      mainGeo.dispose()
      mainMat.dispose()
      edgeGeo.dispose()
      edgeMat.dispose()
      haloGeo.dispose()
      haloMat.dispose()
      renderer.dispose()
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="hero-scene-root"
      aria-hidden="true"
    />
  )
}
