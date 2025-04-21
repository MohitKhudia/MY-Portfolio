"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default function ThreeModel() {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const controlsRef = useRef(null);
  const mixerRef = useRef(null);
  const modelRef = useRef(null);

  useEffect(() => {
    // 1. Initialize scene if not exists
    if (!sceneRef.current) {
      // Basic Three.js setup
      sceneRef.current = new THREE.Scene();
      sceneRef.current.background = null;

      // Camera
      cameraRef.current = new THREE.PerspectiveCamera(
        35,
        mountRef.current.clientWidth / mountRef.current.clientHeight,
        0.1,
        1000
      );
      cameraRef.current.position.set(0, 1, 8);

      // Renderer
      rendererRef.current = new THREE.WebGLRenderer({ 
        antialias: true,
        alpha: true
      });
      rendererRef.current.setSize(
        mountRef.current.clientWidth,
        mountRef.current.clientHeight
      );
      mountRef.current.appendChild(rendererRef.current.domElement);

      // Lights
      const ambientLight = new THREE.AmbientLight(0xffffff, 1);
      sceneRef.current.add(ambientLight);
      
      const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
      directionalLight.position.set(5, 10, 7);
      sceneRef.current.add(directionalLight);

      // Controls
      controlsRef.current = new OrbitControls(
        cameraRef.current,
        rendererRef.current.domElement
      );
      controlsRef.current.enableDamping = true;
      controlsRef.current.dampingFactor = 0.05;
      controlsRef.current.enableZoom = false;
    }

    // 2. Load model
    const loader = new GLTFLoader();
    loader.load(
      "/model/RobotExpressive.glb",
      (gltf) => {
        // Remove previous model if exists
        if (modelRef.current) {
          sceneRef.current.remove(modelRef.current);
        }

        // Add new model
        const model = gltf.scene;
        model.scale.set(0.5, 0.5, 0.5);
        model.position.y = -1;
        sceneRef.current.add(model);
        modelRef.current = model;

        // Animation setup
        mixerRef.current = new THREE.AnimationMixer(model);
        const actions = {};
        gltf.animations.forEach((clip) => {
          actions[clip.name] = mixerRef.current.clipAction(clip);
        });

        // Initial animation sequence
        playAnimation(actions, 'Wave');
        setTimeout(() => playAnimation(actions, "Idle"), 6000);
        setTimeout(() => playAnimation(actions, "Dance"), 3000);

        // Click interaction
        const handleClick = () => {
          playAnimation(actions, "Jump");
          setTimeout(() => playAnimation(actions, "Idle"), 2000);
        };
        rendererRef.current.domElement.addEventListener('click', handleClick);

        // Store cleanup function
        return () => {
          rendererRef.current.domElement.removeEventListener('click', handleClick);
        };
      },
      undefined,
      (error) => {
        console.error("Error loading model:", error);
      }
    );

    // 3. Animation loop
    const clock = new THREE.Clock();
    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      
      if (mixerRef.current) {
        mixerRef.current.update(clock.getDelta());
      }
      
      if (controlsRef.current) {
        controlsRef.current.update();
      }
      
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };
    animate();

    // 4. Handle resize
    const handleResize = () => {
      cameraRef.current.aspect = 
        mountRef.current.clientWidth / mountRef.current.clientHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(
        mountRef.current.clientWidth,
        mountRef.current.clientHeight
      );
    };
    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      
      // Cleanup model if exists
      if (modelRef.current && sceneRef.current) {
        sceneRef.current.remove(modelRef.current);
      }
      
      // Note: We intentionally don't dispose everything to maintain state
    };
  }, []);

  const playAnimation = (actions, name) => {
    if (!actions[name]) {
      console.warn(`Animation "${name}" not found`);
      return;
    }

    // Stop all current actions
    Object.values(actions).forEach(action => action.stop());
    
    // Play new action
    const action = actions[name];
    action.reset().play();
  };

  return (
    <div 
      ref={mountRef} 
      style={{
        width: '100%',
        height: '100%',
        overflow: 'hidden'
      }}
    />
  );
}