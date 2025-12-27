import React, { useEffect, useMemo } from 'react'
import { useGLTF, Html } from '@react-three/drei'
import * as THREE from 'three'
import { motion } from 'framer-motion'

export function Model(props) {
  const { scene } = useGLTF('/models/programmer_desktop_3d_pc (1)/scene-transformed.glb');
  const clonedScene = useMemo(() => scene.clone(), [scene]);

  useEffect(() => {
    clonedScene.traverse((child) => {
      if (child.isMesh && child.material) {
        const nodeName = child.name.toLowerCase();

        // 1. إجبار الشاشة على اللون الأسود وحذف صورتها
        if (nodeName.includes('screen') || nodeName.includes('monitor') || nodeName.includes('display')) {
          console.log("Found screen:", child.name); // للتشخيص
          if (Array.isArray(child.material)) {
            child.material = child.material.map(m => {
              const newMat = m.clone();
              newMat.map = null;
              newMat.color.set(0x000000);
              return newMat;
            });
          } else {
            child.material = child.material.clone();
            child.material.map = null;
            child.material.color.set(0x000000);
          }
        }

        // نسخ المادة لتجنب التأثير على المشاهد الأخرى
        if (Array.isArray(child.material)) {
          child.material = child.material.map((mat) => {
            const newMat = mat.clone();
            if (newMat.color && newMat.color.r < 0.15 && newMat.color.g < 0.15 && newMat.color.b < 0.15) {
              newMat.color = new THREE.Color(0x555555); // رمادي
            }
            return newMat;
          });
        } else {
          // فقط إذا لم تكن الشاشة التي عدلناها فوق
          if (!(nodeName.includes('screen') || nodeName.includes('monitor') || nodeName.includes('display'))) {
            child.material = child.material.clone();
            if (child.material.color && child.material.color.r < 0.15 && child.material.color.g < 0.15 && child.material.color.b < 0.15) {
              child.material.color = new THREE.Color(0x555555); // رمادي
            }
          }
        }
      }
    });
  }, [clonedScene]);

  return (
    <group {...props} dispose={null}>
      <primitive object={clonedScene} />



    </group>
  )
}

useGLTF.preload('/models/programmer_desktop_3d_pc (1)/scene-transformed.glb')
export default Model;