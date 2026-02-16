import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });




    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    return (
        <section id="about" className="py-20 md:py-32 relative">
            <div className="container mx-auto px-4 md:px-8">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">
                            About Me
                        </h2>
                        <div className="w-20 h-1 bg-indigo-400 mx-auto" />
                    </motion.div>

                    <div className="max-w-4xl mx-auto">

                        <motion.div variants={itemVariants}>
                            <div className="glass p-8 rounded-2xl">
                                <h3 className="text-2xl font-bold text-indigo-300 mb-4 font-display">
                                    Professional Summary
                                </h3>
                                <p className="text-gray-300 leading-relaxed mb-6">
                                    Aspiring AI and Data Science graduate with strong expertise in Python, SQL, and machine learning,
                                    passionate about transforming raw data into actionable business insights. Experienced in building
                                    real-time AI systems, financial risk classification models, and performing in-depth exploratory data analysis.
                                </p>
                                <p className="text-gray-300 leading-relaxed mb-6">
                                    Skilled in developing end-to-end solutions using Python, OpenCV, Flask, and modern web technologies.
                                    Seeking opportunities to leverage analytical thinking, data modeling, and problem-solving skills
                                    to drive data-informed decision-making.
                                </p>

                                <div className="flex flex-wrap gap-3">
                                    {['Data Analysis', 'ML Engineering', 'Business Insights', 'AI Innovation'].map((tag, index) => (
                                        <motion.span
                                            key={index}
                                            whileHover={{ scale: 1.1 }}
                                            className="px-4 py-2 glass glass-hover rounded-full text-sm text-indigo-300 border border-indigo-500/30"
                                        >
                                            {tag}
                                        </motion.span>
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

export default About;
