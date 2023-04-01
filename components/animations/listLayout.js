import { motion } from "framer-motion"

const ListLayout = ({ children }) => (
    <motion.ol
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -50, opacity: 0 }}
      transition={{
        staggerChildren: 0.1
      }}
    >
      {children}
    </motion.ol>
    )


export default ListLayout