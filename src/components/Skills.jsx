import React from "react";
import { motion } from "framer-motion";

const skills = [
    // Languages
    { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Java", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    // Frontend
    { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    // Backend
    { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Spring Boot", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
    { name: "Flask", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
    // Data & ML
    { name: "Pandas", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
    { name: "NumPy", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
    { name: "Matplotlib", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg" },
    { name: "TensorFlow", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
    { name: "Scikit-learn", img: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
    { name: "XGBoost", img: "https://xgboost.ai/images/logo/xgboost-logo.png" },
    { name: "OpenCV", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
    // Database & Tools
    { name: "SQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Docker", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Postman", img: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
    { name: "VS Code", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Figma", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Power BI", img: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
];

const SkillLogo = ({ skill }) => (
    <div
        className="flex items-center justify-center w-20 h-20 flex-shrink-0"
        title={skill.name}
    >
        <img
            src={skill.img}
            alt={skill.name}
            className="w-12 h-12 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-300"
        />
    </div>
);

const Skills = () => {
    return (
        <section id="skills" className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display text-white">
                        Skills & Expertise
                    </h2>
                    <div className="w-20 h-1 bg-indigo-500 mx-auto mb-4" />
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Technologies and tools I use to build intelligent systems.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 mb-16">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 hover:border-indigo-500/50 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all duration-300"
                        >
                            <p className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                                {skill.name}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="w-full relative overflow-hidden py-8">
                {/* Gradient Overlays for smooth fading edges */}
                <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-gray-950 to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-gray-950 to-transparent z-10 pointer-events-none" />

                <div className="flex items-center justify-center gap-8 animate-scroll hover:[animation-play-state:paused]">
                    {skills.map((skill, index) => (
                        <SkillLogo key={`orig-${index}`} skill={skill} />
                    ))}
                    {skills.map((skill, index) => (
                        <SkillLogo key={`dup-${index}`} skill={skill} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
