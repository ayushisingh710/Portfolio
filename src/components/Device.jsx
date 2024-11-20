/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF, useVideoTexture } from '@react-three/drei'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Device = (props) => {
    const group = useRef()
    const { nodes, materials } = useGLTF('/models/mac-draco.glb')
    const txt = useVideoTexture(props.texture ? props.texture : '/textures/project/project1.mp4')
    useEffect(() => {
        if (txt) {
            txt.flipY = false;
        }
    }, [txt]);

    useGSAP(() => {
        gsap.from(group.current.rotation, {
            y: Math.PI / 2,
            duration: 1,
            ease: "power2.inOut"
        })
    }, [txt])
    return (
        <group ref={group} {...props} dispose={null} scale={0.8} position={[0, -4, 0]}>
            <group position={[0.002, -0.038, 0.414]} rotation={[0.014, 0, 0]}>
                <group position={[0, 2.965, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube008.geometry}
                        material={materials.aluminium}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube008_1.geometry}
                        material={materials['matte.001']}
                    >

                    </mesh>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube008_2.geometry}
                        material={materials['screen.001']}
                    >
                        <meshBasicMaterial map={txt} />
                    </mesh>
                </group>
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.keyboard.geometry}
                material={materials.keys}
                position={[1.793, 0, 3.451]}
            />
            <group position={[0, -0.1, 3.394]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube002.geometry}
                    material={materials.aluminium}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube002_1.geometry}
                    material={materials.trackpad}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.touchbar.geometry}
                material={materials.touchbar}
                position={[0, -0.027, 1.201]}
            />
        </group>
    )
}

useGLTF.preload('/models/mac-draco.glb')

export default Device