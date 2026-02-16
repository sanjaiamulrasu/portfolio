import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const projects = [
        {
            title: "Face Login System",
            description:
                "Built a real-time face-based authentication system using OpenCV for live webcam capture and face detection. Implemented secure face feature extraction and matching without storing raw images, ensuring privacy-focused user authentication through Flask backend integration.",
            tech: [
                "Python",
                "OpenCV",
                "face_recognition",
                "Flask",
                "NumPy",
                "HTML",
                "CSS",
                "SQL"
            ],
            github: "https://github.com/sanjaiamulrasu",
            gradient: "from-indigo-500 to-indigo-700",
        },
        {
            title: "Financial Assistant – Risk Classification System",
            description:
                "Developed an AI-driven financial analytics system to analyze personal expense data and classify financial risk levels as Low, Medium, or High using machine learning models. Generated actionable insights to improve spending decisions and financial planning.",
            tech: [
                "Python",
                "Pandas",
                "NumPy",
                "Scikit-learn",
                "XGBoost",
                "Matplotlib"
            ],
            github: "https://github.com/sanjaiamulrasu",
            gradient: "from-purple-500 to-purple-700",
        },
        {
            title: "Pokemon Card Game (Interactive Web App)",
            description:
                "Built a browser-based interactive card game using JavaScript. Implemented dynamic DOM manipulation, event delegation, score tracking, and real-time UI updates to enhance user engagement and gameplay logic.",
            tech: [
                "JavaScript",
                "HTML",
                "CSS"
            ],
            github: "https://github.com/sanjaiamulrasu",
            gradient: "from-blue-500 to-blue-700",
        },
    ];

    return (
        <section id="projects" className="py-20 relative">
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
                            Featured Projects
                        </h2>
                        <div className="w-20 h-1 bg-indigo-300 mx-auto mb-4" />
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Explore my recent work in AI, ML, and Data Science
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                whileHover={{ y: -10 }}
                                className="group"
                            >
                                <div className="relative p-8 rounded-xl h-full flex flex-col overflow-hidden bg-white/5 border border-white/10 transition-all duration-300 hover:border-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">

                                    <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${project.gradient} rounded-full scale-100 group-hover:scale-[20] transition-transform duration-700 ease-in-out z-0 opacity-20 group-hover:opacity-100`} />



                                    <div className="relative z-10 flex flex-col h-full">
                                        <div className="text-5xl font-bold text-white/5 mb-4 font-display group-hover:text-white/20 transition-colors">
                                            0{index + 1}
                                        </div>

                                        <h3 className="text-3xl font-bold text-white mb-4 font-display leading-tight">
                                            {project.title}
                                        </h3>

                                        <p className="text-gray-400 group-hover:text-white/90 transition-colors mb-8 leading-relaxed flex-grow">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {project.tech.map((tech, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-3 py-1 text-sm bg-white/5 border border-white/10 rounded-full text-indigo-200 group-hover:bg-white/10 group-hover:text-white transition-colors"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="mt-auto">
                                            <motion.a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-indigo-300 font-medium group-hover:text-white transition-colors"
                                            >
                                                <span>View Source</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </motion.a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="text-center mt-12"
                    >
                        <motion.a
                            href="https://github.com/sanjaiamulrasu"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            className="inline-flex items-center gap-2 px-8 py-4 glass glass-hover rounded-lg font-semibold text-white border border-purple-500/50"
                        >
                            View All Projects
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
