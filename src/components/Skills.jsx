import React from "react";
import { motion } from "framer-motion";

// ─── Skill data ────────────────────────────────────────────────────────────── //

const skillGroups = [
    {
        label: "Programming",
        color: "from-violet-500/20 to-indigo-500/20",
        border: "border-violet-500/30",
        dot: "bg-violet-400",
        skills: [
            { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
            { name: "Java", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
            { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        ],
    },
    {
        label: "Web Development",
        color: "from-sky-500/20 to-cyan-500/20",
        border: "border-sky-500/30",
        dot: "bg-sky-400",
        skills: [
            { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            { name: "Spring Boot", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
            { name: "HTML / CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        ],
    },
    {
        label: "ML & Data Analysis",
        color: "from-emerald-500/20 to-teal-500/20",
        border: "border-emerald-500/30",
        dot: "bg-emerald-400",
        skills: [
            { name: "Pandas", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
            { name: "NumPy", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
            { name: "Scikit-learn", img: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
            { name: "TensorFlow", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
        ],
    },
    {
        label: "Tools",
        color: "from-orange-500/20 to-amber-500/20",
        border: "border-orange-500/30",
        dot: "bg-orange-400",
        skills: [
            { name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
            { name: "Docker", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
            { name: "VS Code", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
            { name: "Power BI", img: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
        ],
    },
];

// All logos for the scrolling bar
const allLogos = [
    { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Java", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Spring Boot", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
    { name: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Pandas", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
    { name: "NumPy", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
    { name: "Scikit-learn", img: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
    { name: "TensorFlow", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
    { name: "OpenCV", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
    { name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Docker", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Postman", img: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
    { name: "VS Code", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "MySQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Power BI", img: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
];

// ─── Story paragraphs ──────────────────────────────────────────────────────── //

const storyItems = [
    {
        title: "Machine Learning",
        text: "I began exploring machine learning to understand how data can solve real-world problems, working with Pandas, NumPy, Scikit-learn, and TensorFlow for data cleaning, analysis, and model development.",
    },
    {
        title: "Web Development",
        text: "To bring intelligent systems to users, I learned web technologies such as React, Node.js, and Spring Boot to build modern applications that integrate machine learning solutions.",
    },
    {
        title: "Computer Vision",
        text: "While building my Face Login System, I explored computer vision using Python and OpenCV for real-time face detection and authentication.",
    },
    {
        title: "Tools & Workflow",
        text: "Alongside development I use Git, Docker, Postman, and VS Code to manage projects, test APIs, and maintain efficient development workflows.",
    },
];

// ─── Sub-components ────────────────────────────────────────────────────────── //

const SkillCard = ({ skill, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-1 bg-white/5 border border-white/10 rounded-md p-1.5 hover:bg-white/10 hover:border-indigo-400/40 hover:shadow-[0_0_15px_rgba(99,102,241,0.2)] transition-all duration-300 group"
    >
        <img
            src={skill.img}
            alt={skill.name}
            className="w-8 h-8 object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
        />
        <span className="text-[10px] font-medium text-gray-400 group-hover:text-white transition-colors text-center leading-tight">
            {skill.name}
        </span>
    </motion.div>
);

const SkillGroup = ({ group, groupIndex }) => (
    <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
        viewport={{ once: true }}
        className={`rounded-lg border ${group.border} bg-gradient-to-br ${group.color} p-2`}
    >
        <div className="flex items-center gap-1.5 mb-2">
            <span className={`w-1.5 h-1.5 rounded-full ${group.dot}`} />
            <h4 className="text-[11px] font-semibold text-white/90 tracking-wide uppercase">
                {group.label}
            </h4>
        </div>
        <div className="grid grid-cols-4 gap-1.5">
            {group.skills.map((skill, i) => (
                <SkillCard key={skill.name} skill={skill} delay={groupIndex * 0.1 + i * 0.05} />
            ))}
        </div>
    </motion.div>
);

const ScrollingLogos = () => (
    <div className="w-full relative overflow-hidden py-8 mt-8">
        <div className="absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-gray-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-gray-950 to-transparent z-10 pointer-events-none" />
        <div className="flex items-center gap-8 animate-scroll hover:[animation-play-state:paused]">
            {[...allLogos, ...allLogos].map((skill, i) => (
                <div key={i} className="flex items-center justify-center w-16 h-16 flex-shrink-0" title={skill.name}>
                    <img
                        src={skill.img}
                        alt={skill.name}
                        className="w-10 h-10 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-300"
                    />
                </div>
            ))}
        </div>
    </div>
);

// ─── Main Section ──────────────────────────────────────────────────────────── //

const Skills = () => {
    return (
        <section id="skills" className="py-16 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">

                {/* Section heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
                        Skills &amp; Expertise
                    </h2>
                    <div className="w-16 h-1 bg-indigo-500 mx-auto mb-3 rounded-full" />
                    <p className="text-gray-400 max-w-xl mx-auto text-xs md:text-sm">
                        My journey — from understanding data to building full-stack intelligent systems.
                    </p>
                </motion.div>

                {/* Two-column body */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

                    {/* ── LEFT: Story (50%) ── */}
                    <div className="w-full lg:w-[50%] flex flex-col gap-4">
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="text-lg font-semibold text-white/90 pb-1.5 border-b border-white/10"
                        >
                            How I Learned
                        </motion.h3>

                        {storyItems.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.45, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="flex gap-4 group"
                            >
                                {/* Vertical line (only if not last item) */}
                                <div className="flex flex-col items-center pt-2">
                                    <div className="w-2 h-2 rounded-full bg-indigo-500/50 group-hover:bg-indigo-400 transition-colors duration-300" />
                                    {i < storyItems.length - 1 && (
                                        <div className="w-px flex-1 mt-2 bg-gradient-to-b from-indigo-500/30 to-transparent" />
                                    )}
                                </div>

                                <div className="pb-6">
                                    <h4 className="text-sm font-semibold text-indigo-400 mb-1 uppercase tracking-wider">
                                        {item.title}
                                    </h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {item.text}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* ── RIGHT: Visual skills (50%) ── */}
                    <div className="w-full lg:w-[50%] flex flex-col gap-3">
                        <motion.h3
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="text-lg font-semibold text-white/90 pb-1.5 border-b border-white/10"
                        >
                            Technologies
                        </motion.h3>

                        {skillGroups.map((group, gi) => (
                            <SkillGroup key={group.label} group={group} groupIndex={gi} />
                        ))}
                    </div>
                </div>

                {/* Scrolling logo strip */}
                <ScrollingLogos />
            </div>
        </section>
    );
};

export default Skills;
