import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Earth from './Earth';

const Contact = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const erodeMarker = {
        location: [11.3410, 77.7172], 
        size: 0.08,
    };

    const socialLinks = [
        {
            name: 'Email',
            path: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z',
            url: 'mailto:sanjai.amulrasu@gmail.com',
            display: 'sanjai.amulrasu@gmail.com',
            className: 'hover:border-rose-500/50 hover:shadow-[0_0_20px_rgba(244,63,94,0.2)]',
            iconColor: 'group-hover:text-rose-400',
        },
        {
            name: 'LinkedIn',
            path: 'M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z',
            url: 'https://www.linkedin.com/in/sanjaiamulrasu',
            display: 'linkedin.com/in/sanjaiamulrasu',
            className: 'hover:border-sky-500/50 hover:shadow-[0_0_20px_rgba(14,165,233,0.2)]',
            iconColor: 'group-hover:text-sky-400',
        },
        {
            name: 'GitHub',
            path: 'M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z',
            url: 'https://github.com/sanjaiamulrasu',
            display: 'github.com/sanjaiamulrasu',
            className: 'hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]',
            iconColor: 'group-hover:text-emerald-400',
        },
        {
            name: 'Discord',
            path: 'M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.2 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.53.31-1.07.57-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.67-.53 3.4-1.33 5.2-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.85 2.12-1.89 2.12z',
            url: 'https://discord.com/users/sanjai1146',
            display: 'sanjai1146',
            className: 'hover:border-indigo-500/50 hover:shadow-[0_0_20px_rgba(99,102,241,0.2)]',
            iconColor: 'group-hover:text-indigo-400',
        },
    ];

    return (
        <section id="contact" className="py-20 relative">
            <div className="container mx-auto px-4 md:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">
                            Get In Touch
                        </h2>
                        <div className="w-20 h-1 bg-indigo-500 mx-auto mb-4" />
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Let's discuss your next project or collaboration opportunity
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col items-center justify-center p-8 text-center"
                        >

                            <div className="w-full">
                                <div className="h-80 w-full mb-16 flex items-center justify-center">
                                    <Earth
                                        className="max-w-md"
                                        markers={[erodeMarker]}
                                        mapBrightness={2}
                                        baseColor={[0.8, 0.8, 0.8]}
                                        markerColor={[1, 1, 1]}
                                        glowColor={[1, 1, 1]}
                                        dark={1}
                                        opacity={0.8}
                                    />
                                </div>

                                <h3 className="text-xl font-medium text-white/80 font-display tracking-wide flex items-center justify-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                    Erode, Tamil Nadu, India
                                </h3>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <div>
                                <h3 className="text-2xl font-bold text-indigo-400 mb-6 font-display">
                                    Connect With Me
                                </h3>
                                <div className="space-y-4">
                                    {socialLinks.map((social, index) => (
                                        <motion.a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={inView ? { opacity: 1, x: 0 } : {}}
                                            transition={{ duration: 0.4, delay: index * 0.1 }}
                                            whileHover={{ scale: 1.03, x: 10 }}
                                            className={`flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl transition-all duration-300 group ${social.className}`}
                                        >
                                            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/10 text-gray-300">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    className="w-6 h-6"
                                                >
                                                    <path d={social.path} />
                                                </svg>
                                            </div>
                                            <div>
                                                <div className={`text-white font-semibold transition-colors ${social.iconColor}`}>
                                                    {social.name}
                                                </div>
                                                <div className="text-sm text-gray-400">
                                                    {social.display}
                                                </div>
                                            </div>
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
