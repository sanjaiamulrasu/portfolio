import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Galaxy from './components/Galaxy';

function App() {
    return (
        <div className="relative w-full overflow-x-hidden">
            <div className="fixed inset-0 z-0 pointer-events-none select-none">
                <Galaxy 
                    mouseRepulsion={false}
                    mouseInteraction={false}
                    density={1.2}
                    glowIntensity={0.2}
                    saturation={0}
                    hueShift={120}
                    twinkleIntensity={0.1}
                    rotationSpeed={0.05}
                    repulsionStrength={1.5}
                    autoCenterRepulsion={0}
                    starSpeed={0.5}
                    speed={1}
                />
            </div>

            <div className="fixed inset-0 grid-bg opacity-20 z-0 pointer-events-none select-none" />

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
                    © 2026 Sanjai. Built with React.
                </p>
            </footer>
        </div>
    );
}

export default App;
