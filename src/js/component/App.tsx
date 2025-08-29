/**
 * @description App
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {ContactShadows, OrbitControls} from '@react-three/drei'
import {Canvas} from '@react-three/fiber'

export const App = () => {
  return (
    <Canvas camera={{fov: 35, position: [4, 1, 8]}}>
      <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2} />

      <ContactShadows opacity={0.5} blur={3} position={[0, -0.5, 0]} />

      <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
    </Canvas>
  )
}
