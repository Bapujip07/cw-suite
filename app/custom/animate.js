



import React from 'react';
import { motion } from 'framer-motion';

const loadingContainer = {
    width: "4rem",
    height: "4rem",
    display: "flex",
    justifyContent: "space-around",
};

const loadingCircle = {
    display: "block",
    width: "1rem",
    height: "1rem",
    backgroundColor: "#3A36DB",
    borderRadius: "0.5rem",
};

const loadingContainerVariants = {
    start: {
        transition: {
            staggerChildren: 0.2,
        },
    },
    end: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const loadingCircleVariants = {
    start: {
        y: "0%",
    },
    end: {
        y: "60%",
    },
};

const loadingCircleTransition = {
    duration: 0.4,
    yoyo: Infinity,
    ease: "easeInOut",
};

const LoadingAnimation = () => {
    const loadingVariants = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0, transition: { duration: 0.3 } }, // Smooth exit animation
    };

    return (
        <motion.div
            variants={loadingVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed top-0 left-0 w-full h-full opacity-30 flex justify-center items-center z-50"
        >
            <div className="flex flex-col items-center">
                {/* Loading animation */}
                <motion.div
                    style={loadingContainer}
                    variants={loadingContainerVariants}
                    initial="start"
                    animate="end"
                >
                    <motion.span
                        style={loadingCircle}
                        variants={loadingCircleVariants}
                        transition={loadingCircleTransition}
                    ></motion.span>
                    <motion.span
                        style={loadingCircle}
                        variants={loadingCircleVariants}
                        transition={loadingCircleTransition}
                    ></motion.span>
                    <motion.span
                        style={loadingCircle}
                        variants={loadingCircleVariants}
                        transition={loadingCircleTransition}
                    ></motion.span>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default LoadingAnimation;
















