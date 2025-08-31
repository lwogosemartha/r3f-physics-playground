/**
 * @description App
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {OrbitControls, SoftShadows} from '@react-three/drei'
import {Canvas} from '@react-three/fiber'
import {Physics, RigidBody} from '@react-three/rapier'

export const App = () => {
  return (
    <Canvas camera={{fov: 35, position: [4, 1, 8]}} shadows={true}>
      <SoftShadows />

      <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2} />

      <ambientLight intensity={2} />
      <directionalLight intensity={5} position={[1, 1, 1]} castShadow={true} />

      <Physics>
        <RigidBody>
          <mesh position={[0, 3, 0]} castShadow={true}>
            <boxGeometry />
            <meshStandardMaterial color="lime" />
          </mesh>
        </RigidBody>

        <RigidBody type="fixed">
          <mesh
            scale={[10, 0.1, 10]}
            position={[0, -0.05, 0]}
            receiveShadow={true}
          >
            <boxGeometry />
            <meshStandardMaterial color="hotpink" />
          </mesh>
        </RigidBody>
      </Physics>
    </Canvas>
  )
}
