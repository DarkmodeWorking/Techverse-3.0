"use client";

import React from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { ExtendedColors, Overwrite, NodeProps, NonFunctionKeys, Vector3, Euler, Matrix4, Quaternion, Layers } from '@react-three/fiber';
import { EventHandlers } from '@react-three/fiber/dist/declarations/src/core/events';

export function Model(props: React.JSX.IntrinsicAttributes & Omit<ExtendedColors<Overwrite<Partial<THREE.Group<THREE.Object3DEventMap>>, NodeProps<THREE.Group<THREE.Object3DEventMap>, typeof THREE.Group>>>, NonFunctionKeys<{ position?: Vector3; up?: Vector3; scale?: Vector3; rotation?: Euler; matrix?: Matrix4; quaternion?: Quaternion; layers?: Layers; dispose?: (() => void) | null; }>> & { position?: Vector3; up?: Vector3; scale?: Vector3; rotation?: Euler; matrix?: Matrix4; quaternion?: Quaternion; layers?: Layers; dispose?: (() => void) | null; } & EventHandlers) {
  const { nodes, materials } = useGLTF('/tshirt.glb'); 

  // Check and cast material to MeshStandardMaterial for emissive properties
  const tshirtMaterial = materials['default'] as THREE.MeshStandardMaterial | undefined;

  if (tshirtMaterial) {
    tshirtMaterial.emissive = new THREE.Color(0x222222); // Soft gray glow
    tshirtMaterial.emissiveIntensity = 1.2; // Adjust for desired glow effect
  }

  return (
    <group {...props} dispose={null}>
      {nodes && Object.keys(nodes).map((key) => {
        const node = nodes[key];

        if (node instanceof THREE.Mesh) {
          return (
            <mesh
              key={key}
              geometry={node.geometry}
              material={tshirtMaterial || materials[node.material?.name] || materials['default']}
              position={node.position}
              rotation={node.rotation}
              scale={node.scale}
            />
          );
        }
        return null;
      })}
    </group>
  );
}

useGLTF.preload('/tshirt.glb');
