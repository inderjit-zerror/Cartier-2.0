import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF, useTexture } from "@react-three/drei";
import React, { useRef, useState } from "react";
import { DoubleSide } from "three";

const SceneSection = () => {
  const { viewport , camera } = useThree();
  const { nodes, materials } = useGLTF(`/model/Mouse.glb`);
  const ring = useGLTF("/model/Ring.glb");
  const box = useGLTF("/model/box.glb");

  // Texture ------------------------------------------

  const texture1 = useTexture('/model/texture/Texture1.jpg')
  const texture2 = useTexture('/model/texture/To2.jpg')
  const texture3 = useTexture('/model/texture/T3.jpg')

  // ------------------------------------------------------
 
  // Refs for model groups
  const ringRef = useRef();
  const boxRef = useRef();
  const mouseRef = useRef();
  const dragPlaneRef = useRef();

  // Drag state
  const dragging = useRef(false);
  const lastX = useRef(0);

  // -------- FIX FOR MOBILE + PC --------
  const getClientX = (e) => {
    return e.clientX ?? e.touches?.[0]?.clientX ?? 0;
  };
  // -------------------------------------

  // Pointer events
  const handlePointerDown = (e) => {
    dragging.current = true;
    lastX.current = getClientX(e);
  };

  const handlePointerUp = () => {
    dragging.current = false;
  };

 const handlePointerMove = (e) => {
  if (!dragging.current) return;

 const x = getClientX(e);
    const deltaX = x - lastX.current;
    lastX.current = x;

    const y = e.point.y; // WORLD Y

    // ---- SCREEN 1 ----
    if (ringRef.current && y < viewport.height / 2 && y > -viewport.height / 2) {
      ringRef.current.rotation.y += deltaX * 0.01;
    }

    // ---- SCREEN 2 ----
    else if (boxRef.current && y < -viewport.height / 2 && y > -viewport.height * 1.5) {
      boxRef.current.rotation.y += deltaX * 0.01;
    }

    // ---- SCREEN 3 ----
    else if (mouseRef.current && y < -viewport.height * 1.5 && y > -viewport.height * 2.5) {
      mouseRef.current.rotation.y += deltaX * 0.01;
    }
  };

  // Keep drag plane always in front of camera
  useFrame(() => {
    if (dragPlaneRef.current) {
      dragPlaneRef.current.position.copy(camera.position);
      dragPlaneRef.current.position.z -= 1;
    }
  });
  // ------------------------------------------------------

  return (
    <>
      {/* Scren-1 */}
      <group position={[0, 0, 0]} >
        <mesh>
          <planeGeometry args={[viewport.width, viewport.height]} />
          <meshBasicMaterial map={texture1}  side={DoubleSide} />
        </mesh>
        {/* Ring-Model-1 */}
        <group
          ref={ringRef}
          dispose={null}
          scale={0.05}
          rotation={[-Math.PI / 6, Math.PI / 6, Math.PI / 3]}
          position={[0, 0, 1]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={ring.nodes.Object_2.geometry}
            position={[0, 0, 0]}
            rotation={[0, 0, 0]} 
          >
            <meshStandardMaterial
              attach="material"
              {...ring.materials["08___Default"]}
              side={DoubleSide} // 👈 should work now
            />
          </mesh>
        </group>
      </group>

      {/* Scren-2 */}
      <group position={[0, -viewport.height, 0]}>
        <mesh>
          <planeGeometry args={[viewport.width, viewport.height]} />
          <meshBasicMaterial map={texture2}  />
        </mesh>
        {/* Box-Model */}
        <group
        ref={boxRef}
          dispose={null}
          scale={0.008}
          position={[0, 0, 3]}
          rotation={[0, Math.PI / 2, 0]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={box.nodes.Box_Box_0.geometry}
            material={box.materials.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={box.nodes.Pillow_Pillow_0.geometry}
            material={box.materials.Pillow}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={box.nodes.Light_Light_0.geometry}
            material={box.materials.Light}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={box.nodes.Diamond_Heart_Diamond_Heart1_0.geometry}
            material={box.materials.Diamond_Heart1}
            position={[-10.069, 10.15, 15.292]}
            rotation={[-1.212, 0, 0]}
            scale={6.622}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={box.nodes.Diamond1_Diamond1_0.geometry}
            material={box.materials.Diamond1}
            position={[-10.069, 10.15, 15.292]}
            rotation={[-1.212, 0, 0]}
            scale={6.622}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={box.nodes.Ring_Heart_Ring_Heart_0.geometry}
            material={box.materials.Ring_Heart}
            position={[-10.069, 10.15, 15.292]}
            rotation={[-1.212, 0, 0]}
            scale={6.622}
          />
        </group>
      </group>

      {/* Scren-3 */}
      <group position={[0, -viewport.height * 2, 0]}>
        <mesh>
          <planeGeometry args={[viewport.width, viewport.height]} />
          <meshBasicMaterial map={texture3} />
        </mesh>

        {/* Model-Mouse-3 */}
        <group dispose={null} scale={0.07} ref={mouseRef} position={[0,0,3]}>
          <group rotation={[-Math.PI / 3, 0, Math.PI / 3]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.R_Mouse_00_R_Mouse_0.geometry}
              material={materials.R_Mouse}
              position={[0, 3.403, 0.868]}
            />
          </group>
        </group>
      </group>

      {/* Transparent drag layer (ALWAYS on top of camera) */}
      <mesh
        ref={dragPlaneRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      >
        <planeGeometry args={[viewport.width, viewport.height * 3]} />
        <meshBasicMaterial transparent opacity={0} depthTest={false} />
      </mesh>
    </>
  );
};

export default SceneSection;
