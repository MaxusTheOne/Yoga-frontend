import { motion } from 'framer-motion'

export default function AnimatedPage({ children }) {
    AnimatedPage.propTypes

    const animations = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
    }

    return (
        <motion.div
            variants={animations}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 2 }}
        >
            {children}
        </motion.div>
    )
}
