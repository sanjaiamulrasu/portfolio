import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/* ─── Animation Variants ──────────────────────────────────────── */
const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.13 } },
};
const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};


/* ─── Reusable glass card ─────────────────────────────────────── */
const GlassCard = ({ children, className = '', hoverGlow = true }) => (
    <div
        className={`
            bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl
            transition-all duration-300
            ${hoverGlow ? 'hover:shadow-[0_0_32px_rgba(99,102,241,0.25)] hover:border-indigo-500/30' : ''}
            ${className}
        `}
    >
        {children}
    </div>
);

/* ─── Tech Stack ──────────────────────────────────────────────── */
const techStack = [
    { name: 'Python', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'React', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Docker', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Git', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'SQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Java', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Spring Boot', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
];


/* ─── Info cards ──────────────────────────────────────────────── */
const infoCards = [
    {
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        label: 'Experience',
        value: 'Fresher',
        sub: 'Aspiring ML Engineer',
        accent: 'indigo',
    },
    {
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422A12.083 12.083 0 0121 13c0 4.418-4.03 8-9 8s-9-3.582-9-8c0-.85.138-1.67.39-2.44L12 14z" />
            </svg>
        ),
        label: 'Education',
        value: 'B.Tech AI & DS',
        sub: 'Bannari Amman Institute of Technology',
        accent: 'blue',
    },
    {
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        ),
        label: 'Tech Stack',
        value: 'Python · React',
        sub: 'ML · Docker · SQL',
        accent: 'violet',
    },
    {
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        ),
        label: 'Interests',
        value: 'AI Development',
        sub: 'Web Dev · Data Viz',
        accent: 'cyan',
    },
];

const accentMap = {
    indigo: { border: 'border-indigo-500/30', icon: 'text-indigo-400', label: 'text-indigo-300', bg: 'bg-indigo-500/10' },
    blue: { border: 'border-blue-500/30', icon: 'text-blue-400', label: 'text-blue-300', bg: 'bg-blue-500/10' },
    violet: { border: 'border-violet-500/30', icon: 'text-violet-400', label: 'text-violet-300', bg: 'bg-violet-500/10' },
    cyan: { border: 'border-cyan-500/30', icon: 'text-cyan-400', label: 'text-cyan-300', bg: 'bg-cyan-500/10' },
};

/* ═══════════════════════════════════════════════════════════════ */
const About = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });


    return (
        <section
            id="about"
            className="py-20 md:py-32 relative"
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
        >
            <div className="container mx-auto px-4 md:px-8">

                {/* ── Section Title ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-indigo-400 mx-auto rounded-full" />
                </motion.div>

                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >

                    {/* ── Two-column layout ── */}
                    <div className="grid md:grid-cols-2 gap-8 mb-10">

                        {/* ── LEFT COLUMN ── */}
                        <div className="flex flex-col gap-8">

                            {/* Professional Summary */}
                            <motion.div variants={itemVariants}>
                                <GlassCard className="p-6 md:p-8 h-full">
                                    <div className="flex items-center gap-3 mb-5">
                                        <div className="p-2 rounded-lg bg-indigo-500/15 text-indigo-400">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-lg font-bold text-indigo-300">Professional Summary</h3>
                                    </div>

                                    <p className="text-gray-300 leading-7 text-sm mb-4 max-w-prose">
                                        I am a final-year Artificial Intelligence and Data Science student with a strong interest 
                                        in building data-driven solutions and intelligent applications. 
                                        I have experience working with Python, JavaScript, and modern web technologies, 
                                        along with data analysis and machine learning tools such as Pandas, NumPy, Scikit-learn, and TensorFlow.
                                    </p>
                                    <p className="text-gray-300 leading-7 text-sm mb-6 max-w-prose">
                                        I enjoy developing web applications and working on data cleaning, 
                                        exploratory data analysis, and machine learning model development. 
                                        I am also interested in applying my knowledge to solve real-world problems through AI,
                                        data analytics, and modern software development practices.
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {['Full Stack Development','Data Analysis','Machine Learning','AI Solutions','DevOps Tools'].map((tag, i) => (
                                            <motion.span
                                                key={i}
                                                whileHover={{ scale: 1.08 }}
                                                className="px-3 py-1.5 rounded-full text-xs text-indigo-300 bg-indigo-500/10 border border-indigo-500/30 cursor-default"
                                            >
                                                {tag}
                                            </motion.span>
                                        ))}
                                    </div>
                                </GlassCard>
                            </motion.div>
                        </div>

                        {/* ── RIGHT COLUMN ── */}
                        <div className="flex flex-col gap-6">

                            {/* Info Cards Grid */}
                            <div className="grid grid-cols-2 gap-4">
                                {infoCards.map((card, i) => {
                                    const a = accentMap[card.accent];
                                    return (
                                        <motion.div key={i} variants={itemVariants}>
                                            <GlassCard className={`p-5 border ${a.border} h-full`}>
                                                <div className={`inline-flex p-2 rounded-lg mb-3 ${a.bg} ${a.icon}`}>
                                                    {card.icon}
                                                </div>
                                                <p className={`text-[11px] uppercase tracking-widest mb-1 ${a.label}`}>{card.label}</p>
                                                <p className="text-white text-sm font-semibold leading-snug">{card.value}</p>
                                                <p className="text-gray-500 text-xs mt-0.5 leading-snug">{card.sub}</p>
                                            </GlassCard>
                                        </motion.div>
                                    );
                                })}
                            </div>

                            {/* Tech Stack Icons */}
                            <motion.div variants={itemVariants}>
                                <GlassCard className="p-6">
                                    <div className="flex items-center gap-3 mb-5">
                                        <div className="p-2 rounded-lg bg-violet-500/15 text-violet-400">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                            </svg>
                                        </div>
                                        <h3 className="text-lg font-bold text-violet-300">Tech Stack</h3>
                                    </div>
                                    <div className="flex flex-wrap gap-3">
                                        {techStack.map((tech, i) => (
                                            <motion.div
                                                key={i}
                                                whileHover={{ scale: 1.1, y: -3 }}
                                                className="flex flex-col items-center gap-1.5 p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-violet-500/40 hover:bg-violet-500/10 transition-all duration-300 cursor-default min-w-[56px] group"
                                            >
                                                <img src={tech.img} alt={tech.name} className="w-8 h-8 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />
                                                <span className="text-[9px] text-gray-400 group-hover:text-gray-200 transition-colors duration-300 tracking-wide">{tech.name}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </GlassCard>
                            </motion.div>
                        </div>
                    </div>


                </motion.div>
            </div>
        </section>
    );
};

export default About;
