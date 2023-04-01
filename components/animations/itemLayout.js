import { motion } from "framer-motion"

const ItemLayout = ({ children }) => (
    <motion.li
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -50, opacity: 0 }}
      transition={{
        duration: 0.05
      }}
      whileTap={{scale: [null, 1.02, 1.02], transition: {duration: 0.1}}}
      whileHover={{scale: [null, 1.025, 1.025], transition: { duration: 0.1 }}}    
    >
      {children}
    </motion.li>
    )


export default ItemLayout