import React from 'react';
import { motion } from 'framer-motion';

const Loading = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-950 z-50">
            <div className="text-center">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="w-16 h-16 mx-auto mb-4 border-4 border-cyan-400 border-t-transparent rounded-full"
                />
                <motion.p
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-cyan-400 text-lg font-medium"
                >
                    Loading...
                </motion.p>
            </div>
        </div>
    );
};

export default Loading;
