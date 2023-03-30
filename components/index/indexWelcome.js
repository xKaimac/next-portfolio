import styles from "@/styles/Home.module.css";

import Link from "next/link";

import { motion } from "framer-motion";

export function IndexWelcome() {
  const left = {visible: { opacity: 1, x:0}, hidden: { opacity: 0, x:-100}};
  const right = {visible: { opacity: 1, y:0}, hidden: { opacity: 0, y:100}};
    return (
        <div className={styles.container}>
            <motion.div initial="hidden"
                        animate="visible" 
                        variants={left}
                        transition={{ duration: 1 }}
                        className={styles.left}>
              <h1 className={styles.title}>Welcome to My Portfolio.</h1>
            </motion.div>
            <motion.div initial="hidden"
                        animate="visible"
                        transition={{duration:.2, delay: 1 }} 
                        variants={right} 
                        className={styles.right}>
              <Link href="/portfoliogame" >
                <img src="https://res.cloudinary.com/dhfmjugt0/image/upload/v1680128222/ezgif_com_gif_maker_a621f6de87.gif?updated_at=2023-03-29T22:17:02.884Z" alt="Image could not be loaded" />
              </Link>
            </motion.div>
        </div>
    )
}