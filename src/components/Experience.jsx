'use client'
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import SceneSection from './SceneSection'
import CameraScroll from './CameraScroll'

const Experience = () => {
  return (
    <div className='w-full h-screen fixed top-0 left-0 z-50'>
        <Canvas className='w-full h-full'>
            <PerspectiveCamera makeDefault fov={45} position={[0,0,5]} />
            <Environment preset="city" />
            <CameraScroll />
            <SceneSection />
        </Canvas>
    </div>
  )
}

export default Experience