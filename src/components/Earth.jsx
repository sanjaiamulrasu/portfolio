import React, { useEffect, useRef } from 'react';
import createGlobe from 'cobe';

const Earth = ({
    className = '',
    theta = 0.25,
    dark = 1,
    scale = 1.1,
    diffuse = 1.2,
    mapSamples = 40000,
    mapBrightness = 6,
    baseColor = [0.29, 0.27, 0.62], // Indigo color
    markerColor = [0.93, 0.26, 0.26], // Red marker
    glowColor = [0.38, 0.39, 0.94], // Indigo glow
    markers = [],
}) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        let width = 0;
        const onResize = () =>
            canvasRef.current && (width = canvasRef.current.offsetWidth);
        window.addEventListener('resize', onResize);
        onResize();
        let phi = 0;

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: width * 2,
            height: width * 2,
            phi: 0,
            theta: theta,
            dark: dark,
            scale: scale,
            diffuse: diffuse,
            mapSamples: mapSamples,
            mapBrightness: mapBrightness,
            baseColor: baseColor,
            markerColor: markerColor,
            glowColor: glowColor,
            opacity: 1,
            offset: [0, 0],
            markers: markers,
            onRender: (state) => {
                // Continuous rotation
                state.phi = phi;
                phi += 0.005;
            },
        });

        return () => {
            globe.destroy();
            window.removeEventListener('resize', onResize);
        };
    }, [theta, dark, scale, diffuse, mapSamples, mapBrightness, baseColor, markerColor, glowColor, markers]);

    return (
        <div className={`flex items-center justify-center w-full ${className}`}>
            <canvas
                ref={canvasRef}
                style={{
                    width: '100%',
                    height: '100%',
                    maxWidth: '100%',
                    aspectRatio: '1',
                }}
            />
        </div>
    );
};

export default Earth;
