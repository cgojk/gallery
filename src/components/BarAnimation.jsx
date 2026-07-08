import { motion } from "framer-motion";


export default function BarAnimation({ progress }) {
    return (
        <motion.div
            className="bar__fill"
            // initial={{ width: 0 }}
            initial ={false}
            animate={{ width: `${progress}%` }}
            transition={{
                
        
             duration: 0.4,
             delay: 0.2,
            ease: "easeInOut",
  }}
        />
    );
}

