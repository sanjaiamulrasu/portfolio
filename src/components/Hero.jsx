import React from 'react';
import { motion } from 'framer-motion';
import CardSwap, { Card } from './CardSwap'

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
            <div className="w-full px-4 md:px-8 z-10 relative">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-left"
                    >
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-3xl md:text-4xl text-gray-200 font-medium mb-4 flex items-center gap-3"
                        >
                            Hello! <span className="animate-wave origin-bottom-right inline-block">👋</span>
                        </motion.h2>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-6xl md:text-8xl font-bold mb-6 tracking-tight leading-tight text-white"
                        >
                            I'm <span className="text-indigo-500 font-extrabold hover:text-blue-400 transition-colors duration-300">Sanjai</span>
                        </motion.h1>

                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="text-md md:text-lg text-gray-400 font-light tracking-wide mb-10"
                        >
                            Data Analyst | ML Engineer | AI Enthusiast
                        </motion.h3>



                    </motion.div>

                    <div className="hidden md:block sticky top-24 self-start relative" style={{ height: "600px", zIndex: 5 }}>
                        <CardSwap
                            width={450}
                            height={380}
                            cardDistance={60}
                            verticalDistance={70}
                            delay={5000}
                            pauseOnHover={false}
                        >

                            {/* ABOUT PREVIEW */}
                            <Card>
                                <div className="h-full p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-white flex flex-col justify-center items-center text-center hover:shadow-[0_0_40px_rgba(99,102,241,0.4)] transition-all duration-500">

                                    <h3 className="text-3xl font-bold text-indigo-400 mb-6 font-display">
                                        About Me
                                    </h3>

                                    <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                                        AI &amp; Data Science graduate skilled in Python, SQL,
                                        Machine Learning and building intelligent systems
                                        for real-world impact.
                                    </p>

                                </div>
                            </Card>


                            {/* PROJECTS PREVIEW */}
                            <Card>
                                <div className="h-full p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-white flex flex-col justify-center items-center text-center hover:shadow-[0_0_40px_rgba(99,102,241,0.4)] transition-all duration-500">

                                    <h3 className="text-3xl font-bold text-indigo-400 mb-6 font-display">
                                        Projects
                                    </h3>

                                    <div className="text-gray-400 text-sm space-y-2">
                                        <p>Face Login System</p>
                                        <p>Financial Risk Classifier</p>
                                        <p>Pokémon Card Game</p>
                                    </div>

                                </div>
                            </Card>


                            {/* SKILLS PREVIEW */}
                            <Card>
                                <div className="h-full p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-white flex flex-col justify-center items-center text-center hover:shadow-[0_0_40px_rgba(99,102,241,0.4)] transition-all duration-500">

                                    <h3 className="text-3xl font-bold text-indigo-400 mb-8 font-display">
                                        Skills
                                    </h3>

                                    <div className="grid grid-cols-3 gap-6">
                                        {[
                                            {
                                                name: "Python",
                                                img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                                            },
                                            {
                                                name: "Java",
                                                img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                                            },
                                            {
                                                name: "SQL",
                                                img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                                            },
                                            {
                                                name: "Pandas",
                                                img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg"
                                            },
                                            {
                                                name: "Flask",
                                                img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg"
                                            },
                                            {
                                                name: "Spring Boot",
                                                img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
                                            }
                                        ].map((skill, i) => (
                                            <div key={i} className="flex flex-col items-center gap-2">
                                                <img
                                                    src={skill.img}
                                                    alt={skill.name}
                                                    className="w-10 h-10 grayscale brightness-200 hover:grayscale-0 transition-all duration-300"
                                                />
                                                <p className="text-xs text-gray-300">
                                                    {skill.name}
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                </div>
                            </Card>

                        </CardSwap>
                    </div>

                </div>
            </div>

            <div className="absolute bottom-20 left-0 w-full z-20">
                <div className="w-full px-4 md:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="flex items-center gap-8"
                    >
                        {[
                            {
                                label: 'Email',
                                href: 'mailto:sanjai.amulrasu@gmail.com',
                                path: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6"
                            },
                            {
                                label: 'LinkedIn',
                                href: 'https://www.linkedin.com/in/sanjaiamulrasu',
                                path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 4a2 2 0 1 1-2 2 2 2 0 0 1 2-2z"
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/sanjaiamulrasu',
                                path: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                            },
                            {
                                label: 'Discord',
                                href: 'https://discord.com/users/sanjai1146',
                                path: "M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286z",
                                solid: true
                            }
                        ].map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, color: "#60a5fa" }}
                                className="text-gray-400 transition-colors duration-300"
                                aria-label={social.label}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="28"
                                    height="28"
                                    viewBox="0 0 24 24"
                                    fill={social.solid ? "currentColor" : "none"}
                                    stroke={social.solid ? "none" : "currentColor"}
                                    strokeWidth={social.solid ? "0" : "2"}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d={social.path} />
                                </svg>
                            </motion.a>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
