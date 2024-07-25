import React, { Suspense, useState, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, Html, useGLTF } from '@react-three/drei';

// Model component
export function Model(props) {
  const { nodes, materials } = useGLTF('/scene.gltf');
  console.log('Materials:', materials); // Check materials

  return (
    <group {...props} dispose={null} scale={[0.1, 0.1, 0.1]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.eyebrow.geometry}
        material={materials.eyebrow}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Area_(1)'].geometry}
        material={materials['Area (1)']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Area_(4)'].geometry}
        material={materials['Area (4)']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Area_(2)'].geometry}
        material={materials['Area (2)']}
      />
      <mesh castShadow receiveShadow geometry={nodes.Head.geometry} material={materials.Head} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Area_(3)'].geometry}
        material={materials['Area (3)']}
      />
      <mesh castShadow receiveShadow geometry={nodes.blob.geometry} material={materials.blob} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['blob_(2)'].geometry}
        material={materials['blob (2)']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['blob_(4)'].geometry}
        material={materials['blob (4)']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['blob_(6)'].geometry}
        material={materials['blob (6)']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['blob_(8)'].geometry}
        material={materials['blob (8)']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['blob_(10)'].geometry}
        material={materials['blob (10)']}
      />
    </group>
  );
}
useGLTF.preload('/scene.gltf');

// Scene component
const Scene = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [modelPosition, setModelPosition] = useState([1, -30, 0]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      // Calculate mouse position offset from the center
      const x = (event.clientX - window.innerWidth / 2) / (window.innerWidth / 2); // Range [-1, 1]
      const y = -(event.clientY - window.innerHeight / 2) / (window.innerHeight / 2); // Range [-1, 1]
      setMouse({ x, y });
    };

    const handleKeyDown = (event) => {
      const moveSpeed = 1; // Speed of movement
      setModelPosition((prev) => {
        let [x, y, z] = prev;
        switch (event.key) {
          case 'ArrowUp':
            y += moveSpeed;
            break;
          case 'ArrowDown':
            y -= moveSpeed;
            break;
          case 'ArrowLeft':
            x -= moveSpeed;
            break;
          case 'ArrowRight':
            x += moveSpeed;
            break;
          default:
            break;
        }
        return [x, y, z];
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Map mouse position to model rotation
  const rotation = [
    mouse.y * Math.PI / 4, // Rotate around the x-axis
    mouse.x * Math.PI / 4, // Rotate around the y-axis
    0 // No rotation around the z-axis
  ];

  return (
    <Canvas
      shadows
      camera={{ position: [0, 50, -135], fov: 50 }}
      style={{ height: '100vh', width: '100vw' }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} castShadow />
      <Suspense fallback={<Html><div>Loading...</div></Html>}>
        <Model position={modelPosition} rotation={rotation} />
      </Suspense>
      <OrbitControls />
      {/* Name in the top-left corner */}
      <Html position={[0, 0, 0]}>
        {/* <div style={{ position: 'absolute', top: 10, left: 10, color: 'white', fontSize: '24px', fontWeight: 'bold' }}>
          Your Name
        </div> */}
      </Html>
      {/* Social Media Bubbles at the bottom */}
      <Html position={[0, 0, 0]}>
        {/* <div style={{ position: 'absolute', top: 100, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '10px' }}>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <div style={bubbleStyle('blue')}>LinkedIn</div>
          </a>
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <div style={bubbleStyle('black')}>GitHub</div>
          </a>
          <a href="mailto:youremail@example.com">
            <div style={bubbleStyle('red')}>Email</div>
          </a>
        </div> */}
      </Html>
      {/* Resume Link/Button */}
      <Html position={[0, 0, 0]}>
        {/* <div style={{ position: 'absolute', top: 10, right: 10 }}>
          <a href="/path/to/your/resume.pdf" target="_blank" rel="noopener noreferrer" style={resumeStyle}>
            Resume
          </a>
        </div> */}
      </Html>
    </Canvas>
  );
};

// Bubble style
const bubbleStyle = (color) => ({
  backgroundColor: color,
  color: 'white',
  borderRadius: '50%',
  width: '40px',
  height: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: 'none',
  fontSize: '14px',
  fontWeight: 'bold',
  cursor: 'pointer',
  border: '2px solid white'
});

// Resume link/button style
const resumeStyle = {
  backgroundColor: 'black',
  color: 'white',
  padding: '10px 20px',
  borderRadius: '5px',
  textDecoration: 'none',
  fontSize: '16px',
  fontWeight: 'bold',
  cursor: 'pointer'
};

export default Scene;
