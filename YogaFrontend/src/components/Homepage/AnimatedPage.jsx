import { motion } from 'framer-motion'

//Framer Motion is a popular animation library for React,
//that allows developers to create fluid and expressive animations declaratively

export default function AnimatedPage({ children }) {
    //This line below is just to avoid error messages
    AnimatedPage.propTypes

    const animations = {
        initial: { opacity: 0 }, // Initial state when the component mounts
        animate: { opacity: 1 }, // State to animate to
        exit: { opacity: 0 }, // State when the component is exiting
    }
    return (
        <motion.div
            variants={animations}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 1 }}
        >
            {/* This is where the component is placed as a child within the animation div */}
            {children}
        </motion.div>
    )
}
