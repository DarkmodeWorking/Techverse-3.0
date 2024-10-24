"use client"; // Ensure this is a client-side component

import React from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { ExtendedColors, Overwrite, NodeProps, NonFunctionKeys, Vector3, Euler, Matrix4, Quaternion, Layers } from '@react-three/fiber';
import { EventHandlers } from '@react-three/fiber/dist/declarations/src/core/events';

export function Model(props: React.JSX.IntrinsicAttributes & Omit<ExtendedColors<Overwrite<Partial<THREE.Group<THREE.Object3DEventMap>>, NodeProps<THREE.Group<THREE.Object3DEventMap>, typeof THREE.Group>>>, NonFunctionKeys<{ position?: Vector3; up?: Vector3; scale?: Vector3; rotation?: Euler; matrix?: Matrix4; quaternion?: Quaternion; layers?: Layers; dispose?: (() => void) | null; }>> & { position?: Vector3; up?: Vector3; scale?: Vector3; rotation?: Euler; matrix?: Matrix4; quaternion?: Quaternion; layers?: Layers; dispose?: (() => void) | null; } & EventHandlers) {
  const { nodes, materials } = useGLTF('/tshirt.glb'); // Load the GLB model

  // Debugging: Log nodes and materials to the console
  console.log("Nodes:", nodes);
  console.log("Materials:", materials);

  return (
    <group {...props} dispose={null}>
      {/* Iterate through nodes to render them if available */}
      {nodes && Object.keys(nodes).map((key) => {
        const node = nodes[key];

        // Check if the node is a Mesh
        if (node instanceof THREE.Mesh) {
          return (
            <mesh
              key={key}
              geometry={node.geometry as THREE.BufferGeometry} // Type assertion
              material={materials[node.material?.name] || materials['default']} // Handle undefined materials
              position={node.position} // Use node's position
              rotation={node.rotation} // Use node's rotation
              scale={node.scale} // Use node's scale
            />
          );
        }
        return null; // Return null for non-mesh nodes
      })}
    </group>
  );
}

useGLTF.preload('/tshirt.glb'); // Preload the model
