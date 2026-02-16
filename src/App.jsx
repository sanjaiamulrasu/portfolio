import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import DeepSpace from './components/DeepSpace';

function App() {
    return (
        <div className="relative min-h-screen">
            <div className="fixed inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                    <Suspense fallback={null}>
                        <ambientLight intensity={0.3} />
                        <pointLight position={[10, 10, 10]} color="#7dd3fc" intensity={1.5} />
                        <pointLight position={[-10, -10, -10]} color="#6366f1" intensity={1.2} />
                        <DeepSpace />
                    </Suspense>
                </Canvas>
            </div>

            <div className="fixed inset-0 grid-bg opacity-20 z-0" />

            <Navigation />

            <main className="relative z-10">
                <Hero />
                <About />
                <Projects />
                <Skills />


                <Contact />
            </main>

            <footer className="relative z-10 py-8 text-center border-t border-white/10">
                <p className="text-gray-400">
                    © 2026 Sanjai. All rights reserved. Built with React.
                </p>
            </footer>
        </div>
    );
}

export default App;
