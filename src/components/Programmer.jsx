import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { scene } = useGLTF('/models/programmer_desktop_3d_pc%20(1)/scene-transformed.glb');

  return (
    <primitive object={scene} {...props} />
  )
}

useGLTF.preload('/models/programmer_desktop_3d_pc%20(1)/scene-transformed.glb')

export default Model;