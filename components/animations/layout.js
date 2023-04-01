import { motion } from "framer-motion"

const Layout = ({ children }) => (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -50, opacity: 0 }}
      transition={{

        duration: 0.25}}
    >
      {children}
    </motion.div>
    )


export default Layout