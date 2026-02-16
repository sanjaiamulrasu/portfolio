import React, { useRef, useMemo, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Create circular star texture for soft-edged particles
function createStarTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');

    // Create radial gradient for soft circular star
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.2, 'rgba(255, 255, 255, 0.8)');
    gradient.addColorStop(0.4, 'rgba(255, 255, 255, 0.4)');
    gradient.addColorStop(0.7, 'rgba(255, 255, 255, 0.1)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 64, 64);

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
}

// Cosmic Background Component
function CosmicBackground() {
    const meshRef = useRef();

    // Vertex shader for background
    const vertexShader = `
        varying vec2 vUv;
        varying vec3 vPosition;
        
        void main() {
            vUv = uv;
            vPosition = position;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `;

    // Fragment shader for cosmic gradient with nebula effect
    const fragmentShader = `
        uniform float time;
        varying vec2 vUv;
        varying vec3 vPosition;
        
        // Noise function for nebula effect
        float noise(vec2 p) {
            return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
        }
        
        void main() {
            vec2 center = vec2(0.5, 0.5);
            float dist = distance(vUv, center);
            
            // Deep cosmic gradient: near-black -> dark navy -> indigo
            vec3 deepBlack = vec3(0.01, 0.01, 0.02);
            vec3 darkNavy = vec3(0.05, 0.08, 0.15);
            vec3 darkIndigo = vec3(0.1, 0.12, 0.25);
            
            // Radial gradient from center
            vec3 color = mix(darkIndigo, deepBlack, dist * 1.2);
            color = mix(color, darkNavy, smoothstep(0.3, 0.8, dist));
            
            // Add subtle nebula glow
            float nebula = noise(vUv * 3.0 + time * 0.01) * 0.3;
            nebula += noise(vUv * 5.0 - time * 0.015) * 0.2;
            
            // Blue/purple light diffusion
            vec3 nebulaColor = vec3(0.15, 0.1, 0.3) * nebula * 0.4;
            color += nebulaColor * (1.0 - dist);
            
            // Subtle vignette
            float vignette = smoothstep(1.0, 0.3, dist);
            color *= 0.7 + vignette * 0.3;
            
            gl_FragColor = vec4(color, 1.0);
        }
    `;

    const uniforms = useMemo(
        () => ({
            time: { value: 0 }
        }),
        []
    );

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.material.uniforms.time.value = state.clock.getElapsedTime();
        }
    });

    return (
        <mesh ref={meshRef} position={[0, 0, -10]}>
            <planeGeometry args={[100, 100]} />
            <shaderMaterial
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                uniforms={uniforms}
                side={THREE.BackSide}
            />
        </mesh>
    );
}

function DeepSpace() {
    const pointsRef = useRef();
    const materialRef = useRef();
    const [blinkingStars, setBlinkingStars] = useState([]);
    const [nextBlinkTime, setNextBlinkTime] = useState(0);
    const blinkDataRef = useRef([]);

    // Create star texture once
    const starTexture = useMemo(() => createStarTexture(), []);

    // Generate random star positions and properties
    const [positions, colors, sizes, baseColors] = useMemo(() => {
        const starCount = 5000;
        const positions = new Float32Array(starCount * 3);
        const colors = new Float32Array(starCount * 3);
        const sizes = new Float32Array(starCount);
        const baseColors = new Float32Array(starCount * 3);

        for (let i = 0; i < starCount; i++) {
            const i3 = i * 3;

            // Random positions in a sphere
            const radius = Math.random() * 25 + 5;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(Math.random() * 2 - 1);

            positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
            positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
            positions[i3 + 2] = radius * Math.cos(phi);

            // Light blue to indigo gradient colors with more variation
            const colorChoice = Math.random();
            let r, g, b;
            if (colorChoice < 0.3) {
                // Light blue with slight variation
                r = 0.6 + Math.random() * 0.4;
                g = 0.8 + Math.random() * 0.2;
                b = 1.0;
            } else if (colorChoice < 0.6) {
                // Medium blue
                r = 0.4 + Math.random() * 0.3;
                g = 0.6 + Math.random() * 0.3;
                b = 0.9 + Math.random() * 0.1;
            } else {
                // Indigo/purple
                r = 0.5 + Math.random() * 0.3;
                g = 0.3 + Math.random() * 0.3;
                b = 0.8 + Math.random() * 0.2;
            }

            colors[i3] = r;
            colors[i3 + 1] = g;
            colors[i3 + 2] = b;

            // Store base colors for restoration
            baseColors[i3] = r;
            baseColors[i3 + 1] = g;
            baseColors[i3 + 2] = b;

            // More size variation for realism
            sizes[i] = 0.08 + Math.random() * 0.15;
        }

        return [positions, colors, sizes, baseColors];
    }, []);

    // Easing function for smooth animations
    const easeInOutQuad = (t) => {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    };

    useFrame((state) => {
        if (!pointsRef.current) return;

        const time = state.clock.getElapsedTime();

        // Rotate starfield slowly
        pointsRef.current.rotation.x = time * 0.02;
        pointsRef.current.rotation.y = time * 0.03;

        // Check if it's time to select new blinking stars
        if (time >= nextBlinkTime) {
            const numBlinkingStars = Math.floor(Math.random() * 11) + 10; // 10-20 stars
            const newBlinkingStars = [];
            const usedIndices = new Set();

            while (newBlinkingStars.length < numBlinkingStars) {
                const index = Math.floor(Math.random() * 5000);
                if (!usedIndices.has(index)) {
                    usedIndices.add(index);
                    newBlinkingStars.push(index);
                    blinkDataRef.current[index] = {
                        startTime: time,
                        duration: 1 + Math.random() * 2, // 1-3 seconds
                        baseSize: sizes[index],
                        targetSize: sizes[index] * (1.5 + Math.random() * 0.5), // 1.5x to 2x
                    };
                }
            }

            setBlinkingStars(newBlinkingStars);
            setNextBlinkTime(time + Math.min(...newBlinkingStars.map(i => blinkDataRef.current[i].duration)));
        }

        // Animate blinking stars
        const geometry = pointsRef.current.geometry;
        const sizeAttr = geometry.attributes.size;
        const colorAttr = geometry.attributes.color;

        blinkingStars.forEach((index) => {
            const data = blinkDataRef.current[index];
            if (!data) return;

            const elapsed = time - data.startTime;
            const progress = Math.min(elapsed / data.duration, 1);

            // Create a blink cycle (0 -> 1 -> 0) using easing
            let blinkCycle;
            if (progress < 0.5) {
                blinkCycle = easeInOutQuad(progress * 2);
            } else {
                blinkCycle = easeInOutQuad((1 - progress) * 2);
            }

            // Animate size
            const currentSize = data.baseSize + (data.targetSize - data.baseSize) * blinkCycle;
            sizeAttr.setX(index, currentSize);

            // Animate color shift to white/bright
            const i3 = index * 3;
            const baseR = baseColors[i3];
            const baseG = baseColors[i3 + 1];
            const baseB = baseColors[i3 + 2];

            // Shift towards white with blinking (enhanced glow)
            const colorShift = blinkCycle * 0.5; // 50% shift to white for more glow
            colorAttr.setXYZ(
                index,
                baseR + (1.0 - baseR) * colorShift,
                baseG + (1.0 - baseG) * colorShift,
                baseB + (1.0 - baseB) * colorShift
            );

            // Reset if animation complete
            if (progress >= 1) {
                sizeAttr.setX(index, data.baseSize);
                colorAttr.setXYZ(index, baseR, baseG, baseB);
            }
        });

        // Mark attributes as needing update
        sizeAttr.needsUpdate = true;
        colorAttr.needsUpdate = true;

        // Clean up finished animations
        blinkingStars.forEach((index) => {
            const data = blinkDataRef.current[index];
            if (data && time - data.startTime >= data.duration) {
                delete blinkDataRef.current[index];
            }
        });
    });

    return (
        <group>
            {/* Cosmic Background */}
            <CosmicBackground />

            {/* Stars with circular texture */}
            <points ref={pointsRef}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={positions.length / 3}
                        array={positions}
                        itemSize={3}
                    />
                    <bufferAttribute
                        attach="attributes-color"
                        count={colors.length / 3}
                        array={colors}
                        itemSize={3}
                    />
                    <bufferAttribute
                        attach="attributes-size"
                        count={sizes.length}
                        array={sizes}
                        itemSize={1}
                    />
                </bufferGeometry>
                <pointsMaterial
                    ref={materialRef}
                    map={starTexture}
                    vertexColors
                    size={0.1}
                    sizeAttenuation={true}
                    transparent
                    opacity={0.9}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                    alphaTest={0.01}
                />
            </points>
        </group>
    );
}

export default DeepSpace;
