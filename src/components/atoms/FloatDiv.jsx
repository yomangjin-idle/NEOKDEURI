import React from "react";
import { motion } from "framer-motion";
export default function FloatDiv({
    children,
    initialY,
    exitY,
    duration,
}) {
    return (
        <motion.div
            initial={{ y: initialY, opacity: 0 }}
            animate={{ y: exitY, opacity: 1 }}
            exit={{ y: exitY, opacity: 0 }}
            transition={{ duration: duration }}
        >
            {children}
        </motion.div>
    );
}
